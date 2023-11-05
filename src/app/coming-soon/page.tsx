import Image from 'next/image';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';

import Button from '@/components/Button';
import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import BgDesktop from '~/images/coming-soon/bg-desktop.png';
import BgMobile from '~/images/coming-soon/bg-mobile.png';
import ClipArt from '~/images/coming-soon/clip-art.png';
import Overlay from '~/images/coming-soon/overlay.png';
import ThunderOrnamentLeft from '~/images/coming-soon/thunder-ornament-left.png';
import ThunderOrnamentRight from '~/images/coming-soon/thunder-ornament-right.png';

export default function ComingSoon() {
  return (
    <main id='coming-soon'>
      <section className='h-screen max-h-full min-w-fit overflow-hidden items-center relative flex flex-col w-full bg-secondary-50'>
        <Image
          src={ThunderOrnamentLeft}
          alt='Thunder Ornament'
          className='absolute -left-4 sm:-left-6 md:left-16 md:top-10 lg:left-20 xl:left-24 xl:top-14 2xl:left-32 top-2 sm:w-24'
          width={70}
          height={40}
          placeholder='blur'
        />
        <Image
          src={ThunderOrnamentRight}
          alt='Thunder Ornament'
          className='absolute -right-3 sm:-right-5 md:top-10 md:right-16 lg:right-20 xl:right-24 xl:top-14 2xl:right-32 top-2 sm:w-20'
          width={60}
          height={40}
          placeholder='blur'
        />
        <Image
          src={BgMobile}
          alt='Bottom Ornament'
          className='absolute z-10 sm:w-full sm:-bottom-40 bottom-0 block md:hidden'
          width={620}
          height={312}
          placeholder='blur'
        />
        <Image
          src={BgDesktop}
          alt='Bottom Ornament'
          className='absolute z-10 bottom-0 hidden md:block xl:w-full'
          width={1480}
          height={709}
          placeholder='blur'
        />
        <Image
          src={Overlay}
          alt='Paper Overlay'
          className='absolute z-0 bottom-72 md:bottom-0 lg:-bottom-16 xl:-bottom-32 2xl:-bottom-40 sm:w-full mix-blend-darken	'
          width={600}
          height={40}
          placeholder='blur'
        />
        <Grid>
          <Cell
            cols='1_full'
            colsMd='3_8'
            colsXl='4_6'
            className='z-0 flex flex-col justify-center relative mt-32 md:mt-44'
          >
            <div className='relative h-full w-full mx-auto'>
              <Image
                src={ClipArt}
                alt='Title Clip Art'
                className={clsxm(
                  'absolute transform -translate-x-1/2 left-1/2 z-10',
                  '-top-14 md:-top-[4.7rem] lg:-top-[5.3rem] xl:-top-[5.7rem] 2xl:-top-24',
                  'md:w-[450px] lg:w-[500px] xl:w-[530px] 2xl:w-[550px]',
                )}
                width={327}
                height={135}
                placeholder='blur'
              />
              <Typography
                as='h1'
                variant='h1'
                font='anton'
                className={clsxm(
                  'text-secondary-50 text-center md:mx-auto z-20 relative',
                  'text-[32px] leading-[48px] md:text-[48px] md:leading-[64px]',
                )}
              >
                COMING SOON
              </Typography>
            </div>
            <Typography
              as='p'
              variant='t'
              font='epilogue'
              className={clsxm(
                'text-typo-white text-center mt-8 md:mt-14 lg:mt-16 2xl:mt-20 lg:px-10 xl:px-2 px-5 sm:px-20 md:px-0',
                'text-[16px] leading-[24px]',
              )}
            >
              Kami dengan senang hati ingin memberitahu bahwa situs web kami
              saat ini sedang dalam tahap pengembangan untuk memberikan
              pengalaman yang lebih baik dan fitur terbaru kepada Anda. Sebentar
              lagi, Anda akan dapat menikmati tampilan baru. Kami mengucapkan
              terima kasih atas dukungan Anda dan nantikan informasi
              selanjutnya!
            </Typography>
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
            <div className='mt-80 p-3' />
          </Cell>
        </Grid>
      </section>
    </main>
  );
}
