'use client';

import React from 'react';

import ImagePreview from '@/components/ImagePreview';

const Page = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>buka</button>
      <ImagePreview
        open={open}
        setOpen={setOpen}
        imgFileName='ini image'
        imgDetail='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
        imgPath='http://34.101.112.192/static/sponsor/c5bce946-9f53-431b-bed3-22911174a793.png'
        alt='test'
      />
    </div>
  );
};

export default Page;
