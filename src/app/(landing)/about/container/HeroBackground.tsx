import NextImage from 'next/image';

export default function HeroBackground() {
  return (
    <>
      {/* <NextImage */}
      {/*   src='/images/about/paper4.png' */}
      {/*   alt='paper' */}
      {/*   // width={1441} */}
      {/*   // height={1031} */}
      {/*   fill */}
      {/*   sizes='(max-height: 768px) 100vh, 1200px' */}
      {/*   className='absolute z-[0] w-full top-0 bg-transparent' */}
      {/* /> */}
      <NextImage
        src='/images/about/newspaper1.png'
        alt='newspaper'
        width={233}
        height={635}
        className='absolute w-[8%] z-[2] right-[5%] hidden lg:block'
      />
      <NextImage
        src='/images/about/newspaper2.png'
        alt='newspaper'
        width={676}
        height={253}
        className='absolute w-[20%] z-[2] left-[6%] sm:bottom-[12%] bottom-[22.5%]'
      />
      <div className='w-full h-[50vh] absolute bottom-0 z-[1]'>
        <div className='relative w-full h-full'>
          <NextImage
            src='/images/about/solarpanel1.png'
            alt='solarpanel'
            fill
            className='object-cover object-top z-[1]'
          />
        </div>
      </div>
    </>
  );
}
