import Image from 'next/image';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidLogIn } from 'react-icons/bi';

import Button from '@/components/Button';
import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import Background from '~/images/coming-soon/bg.png';
import ClipArt from '~/images/coming-soon/clip-art.png';

// import Overlay from '~/images/coming-soon/overlay.png';
import {
  YellowThunderLeft,
  YellowThunderRight,
} from './ornament/YellowThunder';

const CommingSoon = ({
  homeButton = false,
  loginButton = false,
}: {
  homeButton?: boolean;
  loginButton?: boolean;
}) => {
  return (
    <section className='h-screen max-h-full min-w-fit overflow-hidden items-center relative flex flex-col w-full bg-secondary-50'>
      <YellowThunderLeft className='absolute w-20 -left-4 sm:-left-6 md:left-10 md:top-10 lg:left-20 xl:left-24 xl:top-14 2xl:left-32 top-2 sm:w-24 aspect-square' />
      <YellowThunderRight className='absolute w-20 -right-4 sm:-right-6 md:top-10 md:right-10 lg:right-20 xl:right-24 xl:top-14 2xl:right-32 top-2 sm:w-24 aspect-square' />
      <div className='absolute z-10 bottom-0 w-full h-[40vh]'>
        <div className='relative w-full h-full'>
          <Image
            src={Background}
            alt='Bottom Ornament'
            fill
            className='object-cover object-top'
            // placeholder='blur'
          />
        </div>
      </div>
      {/* <Image */}
      {/*   src={Overlay} */}
      {/*   alt='Paper Overlay' */}
      {/*   className='absolute z-0 bottom-56 md:bottom-0 lg:-bottom-16 xl:-bottom-32 2xl:-bottom-40 sm:w-full mix-blend-darken' */}
      {/*   width={600} */}
      {/*   height={40} */}
      {/* placeholder='blur' */}
      {/* /> */}
      <Grid className='h-screen'>
        <Cell
          cols='1_full'
          className='z-0 flex flex-col justify-center relative mt-32 md:mt-44'
        >
          <div className='relative h-full w-full mx-auto'>
            <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
              <div className='relative w-96 h-32 md:w-[500px] md:h-48'>
                <Image
                  src={ClipArt}
                  alt='Title Clip Art'
                  className={clsxm('object-contain')}
                  fill
                  sizes='(max-width: 768px) 400px, 600px'
                  // placeholder='blur'
                />
              </div>
            </div>
            <Typography
              as='h1'
              variant='h1'
              font='anton'
              className={clsxm(
                'text-secondary-50 text-center md:mx-auto z-20 relative mt-4',
                'text-[32px] leading-[48px] md:text-[48px] md:leading-[64px]',
              )}
            >
              COMING SOON
            </Typography>
          </div>
        </Cell>
        <Cell
          cols='1_full'
          colsMd='3_8'
          colsXl='4_6'
          className='z-50 flex flex-col justify-center relative'
        >
          <Typography
            as='p'
            variant='t'
            font='epilogue'
            className={clsxm(
              'text-typo-white text-center mt-8 md:mt-14 lg:mt-16 2xl:mt-20 lg:px-10 xl:px-2 px-5 sm:px-20 md:px-0',
              'text-[16px] leading-[24px]',
            )}
          >
            We are pleased to inform you that our website is currently under
            development to provide you with a better experience and the latest
            features. In a moment, you will be able to enjoy the new look. We
            thank you for your support and stay tuned for more information!
          </Typography>
          {homeButton && (
            <Link className='mx-auto' href={'/'}>
              <Button
                variant='outline-primary'
                size='lg'
                leftIcon={AiFillHome}
                leftIconClassName='w-5 h-5 text-secondary-50'
                className={clsxm('w-fit mx-auto mt-6 xl:mt-7 py-2 px-4')}
              >
                <Typography className={clsxm('text-secondary-50')}>
                  Home Page
                </Typography>
              </Button>
            </Link>
          )}
          {loginButton && (
            <Link className='mx-auto' href={'/login'}>
              <Button
                variant='outline-primary'
                size='lg'
                leftIcon={BiSolidLogIn}
                leftIconClassName='w-5 h-5 text-secondary-50'
                className={clsxm('w-fit mx-auto mt-6 xl:mt-7 py-2 px-4')}
              >
                <Typography className={clsxm('text-secondary-50')}>
                  Login
                </Typography>
              </Button>
            </Link>
          )}
          <div className='mt-80 p-3' />
        </Cell>
      </Grid>
    </section>
  );
};

export default CommingSoon;
