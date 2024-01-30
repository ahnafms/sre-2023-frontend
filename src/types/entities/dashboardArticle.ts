export type ArticleColumn = {
  id: string;
  title: string;
  content?: ArticleContent[];
  time_to_read: number;
  release_date: string;
  description: string;
  cover_filename: string;
  cover_filepath: string;
  show: boolean;
  pin: boolean;
};

type ArticleContent = {
  id: string;
  name: string;
};

export type RegisterArticle = {
  title: string;
  content: ArticleContent[];
  time_to_read: number;
  release_date: string;
  description: string;
  cover: FileList;
};

export type EditArticle = {
  title?: string;
  cover?: FileList;
  content?: ArticleContent[];
  time_to_read?: number;
  release_date?: string;
  description?: string;
  show: boolean;
  pin: boolean;
};
