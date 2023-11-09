'use client';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import Redirect from '@/app/go/[redirect]/components/redirect';
import { ApiError, ApiReturn } from '@/types/api';

type URL = {
  URL: string;
};

export default function RedirectLink({ params }: { params: string }) {
  const router = useRouter();

  const { data: queryData, isError } = useQuery<ApiReturn<URL>, ApiError>({
    queryKey: [`/api/${params}`],
  });

  if (isError) {
    router.replace('/');
  }

  if (!queryData) {
    return <Redirect />;
  }

  router.push(queryData.data.URL);

  return <Redirect />;
}
