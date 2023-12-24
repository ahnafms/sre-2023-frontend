import { ApiResponse } from '../api';

export type Staff = {
  id: string;
  full_name: string;
  division: string;
  position: string;
  major: string;
  image_path: string;
  image_file_name: string;
  linked_in: string;
  instagram: string;
};

export type RegisterStaffRequest = {
  full_name: string;
  division_id: number;
  position: string;
  major_id: number;
  image: FileList;
  linked_in: string;
  instagram: string;
};

export type RegisterStaffResponse = ApiResponse<{
  id: string;
  full_name: string;
  division_id: string;
  position: string;
  major_id: string;
  image_path: string;
  image_file_name: string;
  linked_in: string;
  instagram: string;
}>;

export type UpdateStaffRequest = {
  full_name?: string;
  division_id?: string;
  position?: string;
  major_id?: string;
  image?: FileList;
  linked_in?: string;
  instagram?: string;
};
