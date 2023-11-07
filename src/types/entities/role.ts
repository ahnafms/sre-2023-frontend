import { PermissionList } from './permission-list';

export type Role = {
  id: number;
  name: string;
};

export type RoleAuthColumn = {
  id: number;
  role_id: number;
  role_name: string;
  permission_id: number;
  permission_route: keyof PermissionList;
  last_update: string;
};

export type RoleHasPermission = {
  id: number;
  role_id: number;
  permission_id: string;
};
