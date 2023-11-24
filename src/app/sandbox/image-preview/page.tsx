'use client';

import React from 'react';

import ImagePreview from '@/components/ImagePreview';

const Page = () => {
  return (
    <div>
      <ImagePreview
        imgFileName='ini image'
        imgDetail='Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
        imgPath='https://api.sre-its.com/static/sponsor/c5bce946-9f53-431b-bed3-22911174a793.png'
        alt='test'
      />
    </div>
  );
};

export default Page;
