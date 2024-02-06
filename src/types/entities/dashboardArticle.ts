import { Descendant } from 'slate';
export type ArticleColumn = {
  id: string;
  title: string;
  content: { data: Descendant[] }[];
  time_to_read: number;
  release_date: string;
  description: string;
  cover_filename: string;
  cover_filepath: string;
  show: boolean;
  pin: boolean;
};

export type RegisterArticle = {
  title: string;
  content: Descendant[];
  time_to_read: number;
  release_date: string;
  description: string;
  cover: FileList;
};

export type EditArticle = {
  title?: string;
  cover?: FileList;
  content?: { data: Descendant[] }[];
  time_to_read?: number;
  release_date?: string;
  description?: string;
  show: boolean;
  pin: boolean;
};
