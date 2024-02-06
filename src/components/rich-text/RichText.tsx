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
import clsxm from '@/lib/clsxm';
import { SlateElement, SlateLeaf } from '@/utilities/slate/SlateEditorUtil';

import Typography from '../Typography';

type RichTextProps = {
  editor: ReactEditor;
  initialValue: Descendant[];
  placeholder?: string;
  id?: string;
  label?: string;
  className?: string;
  readOnly?: boolean;
  onChange?: ((value: Descendant[]) => void) | undefined;
  onSelectionChange?: ((selection: BaseSelection) => void) | undefined;
  onValueChange?: ((value: Descendant[]) => void) | undefined;
};

const RichText = ({
  id,
  label,
  editor,
  className,
  initialValue,
  placeholder,
  readOnly,
  ...rest
}: RichTextProps) => {
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
      {label && (
        <Typography
          as='label'
          htmlFor={id}
          variant='c2'
          weight='semibold'
          color='input'
          className='w-full'
        >
          {label}
        </Typography>
      )}
      {!readOnly && <SlateToolbar />}
      <Editable
        id={id}
        renderLeaf={renderLeaf}
        renderElement={renderElement}
        placeholder={placeholder}
        renderPlaceholder={props => (
          <span
            {...props.attributes}
            style={{
              ...props.attributes.style,
              position: 'absolute',
              top: '',
            }}
          >
            {props.children}
          </span>
        )}
        className={clsxm(
          'w-full px-3 py-1.5 rounded-lg',
          'outline-none ring-1 ring-inset ring-typo-inline',
          'text-c2 text-typo-input placeholder:text-typo-icon',
          'focus:ring-1 focus:ring-inset focus:ring-success-40',
          className,
        )}
        spellCheck
        autoFocus
        readOnly
      />
    </Slate>
  );
};

export default RichText;
