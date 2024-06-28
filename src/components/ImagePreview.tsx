import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import React from 'react';
import { IconType } from 'react-icons';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';

import Button from '@/components/Button';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

type ImagePreviewProps = {
  imgPath: string;
  imgFileName?: string;
  imgDetail?: string;
  imgName?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  leftIcon?: IconType;
  alt: string;
} & React.ComponentPropsWithoutRef<'button'>;

function ImagePreview({
  imgPath,
  imgFileName,
  imgDetail,
  imgClassName,
  leftIcon,
  width = 300,
  height = 160,
  alt,
  ...props
}: ImagePreviewProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button
        leftIcon={leftIcon}
        leftIconClassName='text-secondary-50'
        className='relative max-w-full justify-start overflow-hidden'
        variant='outline-primary'
        onClick={() => setOpen(true)}
        {...props}
      >
        <Typography font='epilogue' variant='c2'>
          {imgFileName}
        </Typography>
      </Button>
      <Lightbox
        open={open}
        carousel={{ finite: true }}
        close={() => setOpen(false)}
        noScroll={{ disabled: true }}
        plugins={[Captions]}
        slides={[{ src: imgPath, title: imgFileName, description: imgDetail }]}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
          slide: () => (
            <NextImage
              serverStaticImg={true}
              onClick={() => setOpen(true)}
              src={imgPath}
              imgClassName={imgClassName}
              width={width}
              height={height}
              alt={alt}
            />
          ),
        }}
      />
    </>
  );
}

export default ImagePreview;
