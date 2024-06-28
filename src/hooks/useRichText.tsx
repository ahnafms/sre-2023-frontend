import pipe from 'lodash/fp/pipe';
import React from 'react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { withReact } from 'slate-react';

import { withLinks } from '@/utilities/plugins/withLinks';

const createEditorWithPlugins = pipe(withReact, withHistory, withLinks);

export default function useRichText() {
  const editor = React.useMemo(
    () => createEditorWithPlugins(createEditor()),
    [],
  );
  return editor;
}
