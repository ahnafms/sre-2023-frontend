import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

declare module 'slate' {
  export interface BaseElement {
    type: string;
  }

  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

type ParagraphElement = { type: 'paragraph'; children: CustomText[] };

type LinkElement = { type: 'link'; url: string; children: CustomText[] };

type BulletedListElement = { type: 'bulleted-list'; children: CustomText[] };

type ListItemElement = { type: 'list-item'; children: CustomText[] };

type NumberedListElement = { type: 'numbered-list'; children: CustomText[] };

export type ImageElement = {
  type: 'image';
  url: string;
  children: CustomText[];
};

type HeadingOneElement = {
  type: 'heading-one';
  children: CustomText[];
};
type HeadingTwoElement = {
  type: 'heading-two';
  children: CustomText[];
};
type HeadingThreeElement = {
  type: 'heading-three';
  children: CustomText[];
};
type HeadingFourElement = {
  type: 'heading-four';
  children: CustomText[];
};
type HeadingFiveElement = {
  type: 'heading-five';
  children: CustomText[];
};
type HeadingSixElement = {
  type: 'heading-six';
  children: CustomText[];
};

type FormattedText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  underline?: boolean;
};

export type CustomText = FormattedText;

export type CustomElement =
  | ParagraphElement
  | HeadingOneElement
  | HeadingTwoElement
  | HeadingThreeElement
  | HeadingFourElement
  | HeadingFiveElement
  | HeadingSixElement
  | LinkElement
  | BulletedListElement
  | ListItemElement
  | NumberedListElement
  | ImageElement;
