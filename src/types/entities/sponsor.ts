export type SponsorColumn = {
  id: number;
  name: string;
  file_name: string;
  file_path: string;
  detail: string;
};

// !TODO: change image/file field name
export type SponsorFile = {
  name: string;
  file: FileList;
  detail: string;
};

export type SponsorImage = {
  name: string;
  image: FileList;
  detail: string;
};

export type registerSponsor = {
  name: string;
  file: FileList;
  detail: string;
};

export type updateSponsor = {
  name?: string;
  image?: FileList;
  detail?: string;
};
