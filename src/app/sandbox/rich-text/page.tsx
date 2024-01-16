'use client';
import React, { useState } from 'react';
import { Descendant, Node } from 'slate';

import RichText from '@/components/rich-text/RichText';
import useRichText from '@/hooks/useRichText';
import { serialize } from '@/utilities/slate/SlateEditorUtil';

const initialValue: Descendant[] = [
  {
    type: 'link',
    url: 'http://www.google.com',
    children: [{ text: 'ini google' }],
  },
  { type: 'heading-one', children: [{ text: 'heading1' }] },
  { type: 'heading-two', children: [{ text: 'heading2' }] },
  { type: 'heading-three', children: [{ text: 'heading3' }] },
  { type: 'heading-four', children: [{ text: 'heading4' }] },
  { type: 'heading-five', children: [{ text: 'heading5' }] },
  { type: 'heading-six', children: [{ text: 'heading6' }] },
  { type: 'paragraph', children: [{ text: 'ini bold', bold: true }] },
  { type: 'paragraph', children: [{ text: 'italic', italic: true }] },
  { type: 'paragraph', children: [{ text: 'underline', underline: true }] },
  {
    type: 'numbered-list',
    children: [{ text: 'ini item1' }, { text: 'ini item2' }],
  },
  {
    type: 'list-item',
    children: [{ text: 'ini item1' }, { text: 'ini item2' }],
  },
  {
    type: 'bulleted-list',
    children: [{ text: 'ini item1' }, { text: 'ini item2' }],
  },
];

export default function Page() {
  const editor = useRichText();
  const [content, setContent] = useState<string>();

  const getContent = (value: Descendant[]) => {
    let html: string = '';
    value.forEach((node: Node) => {
      html += serialize(node);
    });
    setContent(html);
  };

  const setPlaceholder = () => {
    const placeholderContent = document.getElementById('placeholder-content');
    if (placeholderContent && content) {
      placeholderContent.insertAdjacentHTML('beforeend', content);
    }
  };

  return (
    <div className='bg-white w-full h-screen text-black'>
      <RichText
        editor={editor}
        onValueChange={getContent}
        initialValue={initialValue}
      />
      <button onClick={setPlaceholder}>set placeholder</button>
      <div id='placeholder-content' />
    </div>
  );
}
