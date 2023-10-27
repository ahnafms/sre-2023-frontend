import { GoBold } from 'react-icons/go';
import { useSlate } from 'slate-react';

import { CustomText } from '@/types/rich-text';
import { toggleMark } from '@/utilities/slate/SlateEditorUtil';

type MarkButtonProps = {
  format: keyof CustomText;
} & React.ComponentPropsWithoutRef<'button'>;

export default function MarkButton({ format }: MarkButtonProps) {
  const editor = useSlate();
  return (
    <button
      value={format}
      onClick={() => {
        toggleMark(editor, format);
      }}
    >
      {format === 'bold' && <GoBold />}
    </button>
  );
}
