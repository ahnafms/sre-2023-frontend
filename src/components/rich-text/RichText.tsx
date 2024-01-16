'use client';

import React from 'react';
import { BaseSelection, Descendant } from 'slate';
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
  Slate,
} from 'slate-react';

import SlateToolbar from '@/components/rich-text/Toolbar';
import { SlateElement, SlateLeaf } from '@/utilities/slate/SlateEditorUtil';

type RichTextProps = {
  editor: ReactEditor;
  initialValue: Descendant[];
  onChange?: ((value: Descendant[]) => void) | undefined;
  onSelectionChange?: ((selection: BaseSelection) => void) | undefined;
  onValueChange?: ((value: Descendant[]) => void) | undefined;
};

const RichText = ({ editor, initialValue, ...rest }: RichTextProps) => {
  const renderElement = React.useCallback(
    (props: RenderElementProps) => <SlateElement {...props} />,
    [],
  );

  const renderLeaf = React.useCallback(
    (props: RenderLeafProps) => <SlateLeaf {...props} />,
    [],
  );

  return (
    <Slate editor={editor} initialValue={initialValue} {...rest}>
      <SlateToolbar />
      <Editable
        spellCheck
        autoFocus
        renderLeaf={renderLeaf}
        renderElement={renderElement}
      />
    </Slate>
  );
};

export default RichText;
