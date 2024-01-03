import { ApiResponse } from '../api';

export type DashboardUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  telp_number?: string;
  password?: string;
};

export type DashboardUserResponse = ApiResponse<{
  id: string;
  name: string;
  email: string;
  role: string;
}>;

export type UpdateDashboardUser = {
  id: string;
  name?: string;
  telp_number: string;
};
