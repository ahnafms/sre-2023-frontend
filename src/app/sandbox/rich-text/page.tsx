'use client';
import React, { useState } from 'react';
import { Descendant, Node } from 'slate';

import RichText from '@/components/rich-text/RichText';
import useRichText from '@/hooks/useRichText';
import { serialize } from '@/utilities/slate/SlateEditorUtil';

const initialValue: Descendant[] = [
  { type: 'paragraph', children: [{ text: '' }] },
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
        placeholder='Hello'
      />
      <button onClick={setPlaceholder}>set placeholder</button>
      <div id='placeholder-content' />
    </div>
  );
}
