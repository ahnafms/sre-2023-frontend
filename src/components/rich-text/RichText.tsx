'use client';

import React from 'react';
import { createEditor, Descendant } from 'slate';
import { withHistory } from 'slate-history';
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from 'slate-react';

import SlateToolbar from '@/components/rich-text/Toolbar';
import clsxm from '@/lib/clsxm';
import { SlateElement, SlateLeaf } from '@/utilities/slate/SlateEditorUtil';
import { withImages } from '@/utilities/slate/SlateImageUtil';

const RichText = ({ initialValue }: { initialValue: Descendant[] }) => {
  const editor = React.useMemo(
    () => withImages(withHistory(withReact(createEditor()))),
    [],
  );

  const renderElement = React.useCallback(
    (props: RenderElementProps) => <SlateElement {...props} />,
    [],
  );

  const renderLeaf = React.useCallback(
    (props: RenderLeafProps) => <SlateLeaf {...props} />,
    [],
  );

  return (
    <div className={clsxm('w-full h-full p-10')}>
      <Slate editor={editor} initialValue={initialValue}>
        <SlateToolbar />
        <Editable
          spellCheck
          autoFocus
          renderLeaf={renderLeaf}
          renderElement={renderElement}
        />
      </Slate>
    </div>
  );
};

export default RichText;
