import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    toastify?: boolean;
    loadingMessage?: string;
  }
}

export type ApiResponse<TData> = {
  status: boolean;
  message: string;
  data: TData;
};

export type ApiError = {
  status: boolean;
  message: string;
  error: string;
};
