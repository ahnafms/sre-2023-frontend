import { AiOutlineUnorderedList } from 'react-icons/ai';
import { LuHeading1 } from 'react-icons/lu';
import { useSlate } from 'slate-react';

import { CustomElement } from '@/types/rich-text';
import { toggleBlock } from '@/utilities/slate/SlateEditorUtil';

type BlockButtonProps = {
  format: CustomElement['type'];
} & React.ComponentPropsWithoutRef<'button'>;

export default function BlockButton({ format }: BlockButtonProps) {
  const editor = useSlate();
  return (
    <button
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {format === 'bulleted-list' && <AiOutlineUnorderedList />}
      {format === 'heading-one' && <LuHeading1 />}
    </button>
  );
}
