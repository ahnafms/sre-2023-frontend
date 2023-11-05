import NextImage from 'next/image';

export default function HeroBackground() {
  return (
    <>
      <NextImage
        src='/images/about/paper4.png'
        alt='paper'
        width={1441}
        height={1031}
        className='absolute z-[0] w-full top-0 bg-transparent'
      />
      <NextImage
        src='/images/about/newspaper1.png'
        alt='newspaper'
        width={233}
        height={635}
        className='absolute w-[8%] z-[2] right-[5%]'
      />
      <NextImage
        src='/images/about/newspaper2.png'
        alt='newspaper'
        width={676}
        height={253}
        className='absolute w-[20%] z-[2] left-[6%] bottom-[12%]'
      />
      <NextImage
        src='/images/about/solarpanel1.png'
        alt='solarpanel'
        width={2881}
        height={1006}
        className='absolute bottom-0 w-full z-[1]'
      />
    </>
  );
}
