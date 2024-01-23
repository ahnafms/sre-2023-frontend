export type DocumentColumn = {
  id: string;
  title: string;
  description: string;
  document_file_path: string;
  document_file_name: string;
  cover_file_path: string;
  cover_file_name: string;
  release_date: string;
};

export type RegisterDocument = {
  title: string;
  description: string;
  release_date: string;
  document: FileList;
  cover: FileList;
};

export type UpdateDocument = {
  title?: string;
  description?: string;
  release_date?: string;
  document?: FileList;
  cover?: FileList;
};
