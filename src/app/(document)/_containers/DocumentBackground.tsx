import Image from 'next/image';

export default function DocumentBackground() {
  return (
    <div className='absolute z-0 top-0 left-0 w-full h-full'>
      <Image
        src='/images/outlook/earth.png'
        alt='Earth Background'
        width={1159}
        height={1159}
        priority
        className='absolute top-[20%] w-full h-screen object-cover md:object-contain'
      />
      <Image
        src='/images/outlook/pattern.png'
        alt='Patter Background'
        width={1439}
        height={2460}
        className='absolute top-0 left-0 w-full h-full object-cover'
      />
    </div>
  );
}
