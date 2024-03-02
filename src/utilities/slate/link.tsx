/* eslint-disable */

import { GoUnlink } from 'react-icons/go';
import { Editor, Element, Path, Range, Transforms } from 'slate';
import { ReactEditor, useFocused, useSelected, useSlate } from 'slate-react';

import { createParagraphNode } from './paragraph';
import { LinkElement } from '@/types/rich-text';

export const createLinkNode = (href: string, text: string): LinkElement => ({
  type: 'link',
  href,
  children: [{ text }],
});

export const insertLink = (editor: Editor, url: string) => {
  if (!url) return;

  const { selection } = editor;
  const link = createLinkNode(url, 'New Link');

  ReactEditor.focus(editor);

  if (selection) {
    const [parentNode, parentPath] = Editor.parent(
      editor,
      selection.focus?.path,
    );

    // Remove the Link node if we're inserting a new link node inside of another
    // link.
    if ((parentNode as any).type === 'link') {
      removeLink(editor);
    }

    if (editor.isVoid(parentNode as any)) {
      Transforms.insertNodes(editor, createParagraphNode([link]), {
        at: Path.next(parentPath),
        select: true,
      });
    } else if (Range.isCollapsed(selection)) {
      // Insert the new link in our last known locatio
      Transforms.insertNodes(editor, link as any, { select: true });
    } else {
      // Wrap the currently selected range of text into a Link
      Transforms.wrapNodes(editor, link as any, { split: true });
      Transforms.collapse(editor, { edge: 'end' });
    }
  } else {
    // Insert the new link node at the bottom of the Editor when selection
    // is falsey
    Transforms.insertNodes(editor, createParagraphNode([link as any]));
  }
};

export const removeLink = (editor: Editor, opts = {}) => {
  Transforms.unwrapNodes(editor, {
    ...opts,
    match: n =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === 'link',
  });
};

export const Link = ({ attributes, element, children }: any) => {
  const editor = useSlate();
  const selected = useSelected();
  const focused = useFocused();

  return (
    <span className='relative'>
      <a
        {...attributes}
        className='border-b-2'
        style={{ borderColor: 'blue', color: 'blue' }}
        href={`https://${element.href}`}
        target='_blank'
        rel='noreferrer'
      >
        {children}
      </a>
      {selected && focused && (
        <div
          className='absolute 
          left-1/2 
          -translate-x-1/2 
          bg-typo-outline 
          flex gap-3 
          px-3 py-2 
          rounded-lg text-typo-dark
          z-50
          '
          contentEditable={false}
        >
          <a
            href={`https://${element.href}`}
            className='border-b-2 border-tertiary-60 text-sm '
            target='_blank'
            rel='noreferrer'
          >
            {element.href}
          </a>
          <button className='text-sm' onClick={() => removeLink(editor)}>
            <GoUnlink />
          </button>
        </div>
      )}
    </span>
  );
};
