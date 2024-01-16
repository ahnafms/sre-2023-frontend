/* eslint-disable @typescript-eslint/no-explicit-any */

import escapeHTML from 'escape-html';
import { Editor, Element as SlateElementProps, Transforms } from 'slate';
import { Text } from 'slate';
import { RenderElementProps, RenderLeafProps } from 'slate-react';

import RichTextImage from '@/components/rich-text/Image';
import { CustomElement, CustomText } from '@/types/rich-text';

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

export const SlateElement = (props: RenderElementProps) => {
  const { attributes, children, element } = props;
  switch (element.type) {
    case 'heading-one':
      return (
        <h1 className='text-[80px] leading-[96px]' {...attributes}>
          {children}
        </h1>
      );
    case 'heading-two':
      return (
        <h2 className='text-[72px] leading-[90px]' {...attributes}>
          {children}
        </h2>
      );
    case 'heading-three':
      return (
        <h3 className='text-[64px] leading-[84px]' {...attributes}>
          {children}
        </h3>
      );
    case 'heading-four':
      return (
        <h4 className='text-[64px] leading-[84px]' {...attributes}>
          {children}
        </h4>
      );
    case 'heading-five':
      return (
        <h5 className='text-[32px] leading-[48px]' {...attributes}>
          {children}
        </h5>
      );
    case 'heading-six':
      return (
        <h6 className='text-[24px] leading-[32px]' {...attributes}>
          {children}
        </h6>
      );
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>;
    case 'link':
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );
    case 'image':
      return <RichTextImage {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export const SlateLeaf = ({ leaf, children, attributes }: RenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <code>{children}</code>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

const isBlockActive = (
  editor: Editor,
  format: CustomElement['type'],
  blockType = 'type',
) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n =>
        !Editor.isEditor(n) &&
        SlateElementProps.isElement(n) &&
        (n as any)[blockType] === format,
    }),
  );

  return !!match;
};

export const toggleBlock = (editor: Editor, format: CustomElement['type']) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: n =>
      !Editor.isEditor(n) &&
      SlateElementProps.isElement(n) &&
      LIST_TYPES.includes((n as any).type),
    split: true,
  });

  const newProperties: Partial<SlateElementProps> = {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  };

  Transforms.setNodes<SlateElementProps>(editor, newProperties);

  if (!isActive && isList) {
    const block: any = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

export const isMarkActive = (editor: Editor, format: keyof CustomText) => {
  const marks: Partial<CustomText | null> = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const toggleMark = (editor: Editor, format: keyof CustomText) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export const serialize = (node: any) => {
  if (Text.isText(node)) {
    let string = escapeHTML(node.text);
    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }
    return string;
  }

  const children =
    node.children.map((n: any) => serialize(n)).join('') || '&nbsp';

  switch (node.type) {
    case 'quote':
      return `<blockquote><p>${children}</p></blockquote>`;
    case 'paragraph':
      return `<p>${children}</p>`;
    case 'link':
      return `<a href="${escapeHTML(node.url)}">${children}</a>`;
    case 'heading-one':
      return `
        <h1 class='text-9xl'>
          ${children}
        </h1>
      `;
    case 'heading-two':
      return `
        <h2 class='text-[72px] leading-[90px]'>
          ${children}
        </h2>
      `;
    case 'heading-three':
      return `
        <h3 class='text-[64px] leading-[84px]'>
          ${children}
        </h3>
      `;
    case 'heading-four':
      return `
        <h4 class='text-[64px] leading-[84px]'>
          ${children}
        </h4>
      `;
    case 'heading-five':
      return `
        <h5 class='text-[32px] leading-[48px]'>
${children}
        </h5>
      `;
    case 'heading-six':
      return `
        <h6 class='text-[24px] leading-[32px]'>
          ${children}
        </h6>
      `;
    case 'bulleted-list':
      return `<ul>${children}</ul>`;
    case 'list-item':
      return `<li>${children}</li>`;
    case 'numbered-list':
      return `<ol>${children}</ol>`;
    default:
      return `<p>${children}</p>`;
  }
};
