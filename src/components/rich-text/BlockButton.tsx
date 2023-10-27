import { IconType } from 'react-icons';
import { useSlate } from 'slate-react';

import { CustomElement } from '@/types/rich-text';
import { toggleBlock } from '@/utilities/slate/SlateEditorUtil';

type BlockButtonProps = {
  format: CustomElement['type'];
  Icon: IconType;
} & React.ComponentPropsWithoutRef<'button'>;

export default function BlockButton({ format, Icon }: BlockButtonProps) {
  const editor = useSlate();
  return (
    <button
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon />
    </button>
  );
}
