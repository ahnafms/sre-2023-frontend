'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Redirect from '@/app/go/[redirect]/components/redirect';
import api from '@/lib/api';
import { ApiError } from '@/types/api';
import { RedirectRequest, RedirectResponse } from '@/types/entities/redirect';

interface RedirectLinkProps {
  params: {
    redirect: string;
  };
}

export default function RedirectLink({ params }: RedirectLinkProps) {
  const router = useRouter();

  const url = params.redirect;

  const { mutate } = useMutation<RedirectResponse, ApiError, RedirectRequest>({
    mutationFn: async data => {
      const res = await api.patch<RedirectResponse>('/url_shortener/public', {
        alias: data.alias,
      });
      return res.data;
    },
    onSuccess: data => {
      setTimeout(() => router.push(data.data.url), 3000);
    },
    onError: () => router.replace('/'),
  });

  useEffect(() => {
    mutate({ alias: url });
  }, [url, mutate]);

  return <Redirect />;
}
