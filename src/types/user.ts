enum PermissionEnum {
  'all',
  'authed',
  'users.index',
  'user.index',
  'admin_verify_user.update',
  'admin_sponsor.create',
  'admin_role.update',
  'admin_role.delete',
  'admin_permission.update',
  'admin_permission.delete',
  'admin_role_has_permission.update',
  'admin_role_has_permission.delete',
  'admin_staff.create',
  'admin_staff.update',
  'admin_staff.delete',
  'admin_sponsor.delete',
  'admin_sponsor.update',
}

export type Permission = keyof typeof PermissionEnum;

export type User = {
  id: string;
  name: string;
  token?: string;
  telp_number: string;
  email: string;
  role_id: number;
  role: string;
  is_verified: boolean;
  permission: Permission[];
};
