import React from 'react';
import { Descendant } from 'slate';

import RichText from '@/components/rich-text/RichText';

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
  {
    type: 'image',
    url: '/next.svg',
    children: [{ text: '' }],
  },
];

export default function page() {
  return (
    <div className='bg-white w-full h-screen text-black'>
      <RichText initialValue={initialValue} />
    </div>
  );
}
