import { PermissionList } from './permission-list';

export type User = {
  id: string;
  name: string;
  token?: string;
  telp_number: string;
  email: string;
  role_id: number;
  role: string;
  is_verified: boolean;
  permission: PermissionList;
};
