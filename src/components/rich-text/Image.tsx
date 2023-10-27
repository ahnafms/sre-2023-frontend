/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image';

export const RichTextImage = ({ attributes, children, element }: any) => {
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <Image
          alt='image'
          src={element.url}
          width={200}
          height={200}
          className='max-h-[400] max-w-full block ml-auto mr-auto'
        />
      </div>
      {children}
    </div>
  );
};

export default RichTextImage;
