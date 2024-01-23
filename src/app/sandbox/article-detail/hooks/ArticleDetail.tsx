import { useQuery } from '@tanstack/react-query';

import { ApiResponseMeta } from '@/types/api';

export type ArticleDetailType = {
  id: string;
  title: string;
  cover_filename: string;
  cover_filepath: string;
  time_to_read: number;
  description: string;
  release_date: string;
  pin: boolean;
  show: boolean;
  created_at: string;
  updated_at: string;
};

export const ArticleDetail = () => {
  const { data: articleData, isLoading: isLoadingArticle } = useQuery<
    ApiResponseMeta<ArticleDetailType[]>
  >({
    queryKey: ['/article'],
  });
  return { articleData, isLoadingArticle };
};

export const FormatDate = (input: string) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const date = new Date(input);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
