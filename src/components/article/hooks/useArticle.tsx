'use client';

import { useQuery } from '@tanstack/react-query';

import { PaginatedApiResponse } from '@/types/api';

export type ArticleProps = {
  id: string;
  title: string;
  cover_filename: string;
  cover_filepath: string;
  time_to_read: number;
  description: string;
  release_date: Date;
  pin: true;
  show: true;
  created_at: Date;
  updated_at: Date;
};

export default function useArticle(type: string, page: number) {
  const { data, isLoading } = useQuery<PaginatedApiResponse<ArticleProps[]>>({
    queryKey: [`/${type}/public?&per_page=${page}`],
  });

  return { data, isLoading };
}
