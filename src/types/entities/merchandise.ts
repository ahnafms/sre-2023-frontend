export type merchAtribute = {
  id: number;
  name: string;
  cover_filepath: string;
  cover_filename: string;
  url: string;
  description: string;
  price: number;
  pin: boolean;
  show: boolean;
};

export type updateMerchAtribute = {
  id: number;
  name?: string;
  cover?: FileList;
  cover_filepath: string;
  cover_filename: string;
  url?: string;
  description: string;
  price?: number;
  pin?: boolean;
  show?: boolean;
};

export type addMerchAtribute = {
  name: string;
  cover: FileList;
  url: string;
  description: string;
  price: number;
  pin: boolean;
  show: boolean;
};
