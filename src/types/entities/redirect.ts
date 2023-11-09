import { ApiResponse } from '@/types/api';

export type RedirectResponse = ApiResponse<{
  url: string;
}>;

export type RedirectRequest = {
  alias: string;
};
