import { useQuery } from '@tanstack/react-query';

import { ApiResponseMeta } from '@/types/api';
import { ArticleColumn } from '@/types/entities/dashboardArticle';

export type ArticleDetailType = ArticleColumn;

export const ArticleDetail = (type: string, id: string) => {
  const { data: articleData, isLoading: isLoadingArticle } = useQuery<
    ApiResponseMeta<ArticleDetailType>
  >({
    queryKey: [`/${type}/${id}`],
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
