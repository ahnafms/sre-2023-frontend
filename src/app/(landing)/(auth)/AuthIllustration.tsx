import Image from 'next/image';

export default function AuthIllustration() {
  return (
    <div className='relative w-full h-full bg-secondary-50'>
      <Image
        src='/images/auth/background.png'
        alt='Auth Background'
        width={1768}
        height={1404}
        className='absolute bottom-0 w-full'
      />
      <Image
        src='/images/auth/logo.png'
        alt='SRE ITS'
        width={580}
        height={438}
        className='absolute left-10 top-16 w-72'
      />
    </div>
  );
}
