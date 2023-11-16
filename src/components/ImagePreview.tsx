import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';

import NextImage from './NextImage';

type ImagePreviewProps = {
  imgPath: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imgFileName?: string;
  imgDetail?: string;
  imgName?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  alt: string;
} & React.ComponentPropsWithoutRef<'div'>;

function ImagePreview({
  open,
  setOpen,
  imgPath,
  imgFileName,
  imgDetail,
  imgClassName,
  width = 300,
  height = 160,
  alt,
  ...props
}: ImagePreviewProps) {
  return (
    <>
      <div {...props}>
        <Lightbox
          open={open}
          carousel={{ finite: true }}
          close={() => setOpen(false)}
          noScroll={{ disabled: true }}
          plugins={[Captions]}
          slides={[
            { src: imgPath, title: imgFileName, description: imgDetail },
          ]}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
            slide: () => (
              <NextImage
                serverStaticImg={true}
                src={imgPath}
                imgClassName={imgClassName}
                width={width}
                height={height}
                alt={alt}
              />
            ),
          }}
        />
      </div>
    </>
  );
}

export default ImagePreview;
