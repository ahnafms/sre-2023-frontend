import React from 'react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { withReact } from 'slate-react';

export default function useRichText() {
  const editor = React.useMemo(
    () => withHistory(withReact(createEditor())),
    [],
  );
  return editor;
}
