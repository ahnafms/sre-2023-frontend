import imageExtensions from 'image-extensions';
import { Editor, Transforms } from 'slate';

import { ImageElement } from '@/types/rich-text';

export const withImages = (editor: Editor) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = element => {
    return element.type === 'image' ? true : isVoid(element);
  };

  editor.insertData = (data: DataTransfer) => {
    const text = data.getData('text/plain');
    const { files }: { files: FileList } = data;

    if (files && files.length > 0) {
      const filesArray: File[] = Array.from(files);

      for (const file of filesArray) {
        const reader = new FileReader();
        const [mime] = file.type.split('/');

        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result as string;
            insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

export const insertImage = (editor: Editor, url: ImageElement['url']) => {
  const text = { text: '' };
  const image: ImageElement = { type: 'image', url, children: [text] };
  Transforms.insertNodes(editor, image);
};

export const isImageUrl = (url: ImageElement['url']) => {
  if (!url) return false;
  const ext = new URL(url).pathname.split('.').pop();
  return imageExtensions.includes(ext as string);
};
