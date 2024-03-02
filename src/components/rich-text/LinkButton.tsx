import { IoIosLink } from 'react-icons/io';
import { useSlate } from 'slate-react';

import { insertLink } from '@/utilities/slate/link';

export default function LinkButton() {
  const editor = useSlate();
  const handleInsertLink = () => {
    const url = prompt('Enter a URL');
    if (url) {
      insertLink(editor, url);
    }
  };
  return (
    <button
      onClick={handleInsertLink}
      aria-label='Insert Link'
      title='Link'
      type='button'
    >
      <IoIosLink />
    </button>
  );
}
