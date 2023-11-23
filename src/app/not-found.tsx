import NextImage from 'next/image';

import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export default function NotFound() {
  return (
    <main id='404' className='bg-black'>
      <section
        className={clsxm(
          'min-h-screen flex bg-404 bg-contain lg:bg-cover justify-center items-center',
        )}
      >
        <Grid className=''>
          <Cell cols='1_full' colsLg='4_6'>
            <div className='flex justify-center items-center'>
              <NextImage
                src='/images/404/paper.png'
                alt='paper'
                width={1294}
                height={1372}
              />
              <div className='flex flex-col absolute justify-center items-center mt-6 lg:mt-20 '>
                <NextImage
                  src='/images/404/404.png'
                  alt='404 text'
                  width={546}
                  height={237}
                  className={clsxm(
                    'relative w-[35%] right-2 ',
                    'sm:w-[40%]',
                    'md:w-[40%] md:right-4',
                    'lg:w-[45%] lg:right-4 ',
                  )}
                />
                <div
                  className={clsxm(
                    'bg-[#E8BA00] px-2 mt-3 relative right-2 drop-shadow-xl sm:mt-5',
                    'md:mt-6 md:right-1',
                    'lg:mt-8 lg:right-2 ',
                  )}
                >
                  <Typography
                    as='h5'
                    variant='h5'
                    font='epilogue'
                    weight='semibold'
                    color='white'
                    className={clsxm(
                      'text-center text-[14px] leading-[24px]',
                      'sm:text-[20px] sm:leading-[32px]',
                      'md:text-[32px] md:leading-[48px]',
                    )}
                  >
                    Page Not Found
                  </Typography>
                  <NextImage
                    src='/images/404/tape.png'
                    alt='tape'
                    width={113}
                    height={124}
                    className={clsxm(
                      'absolute w-[28px] -top-3 -left-2',
                      'md:w-[42px] md:-top-4 md:-left-4',
                      'lg:w-[58px] lg:-top-6 lg:-left-5',
                    )}
                  />
                  <NextImage
                    src='/images/404/tape.png'
                    alt='tape'
                    width={113}
                    height={124}
                    className={clsxm(
                      'absolute w-[28px] -bottom-3 -right-2',
                      'md:w-[42px] md:-bottom-4 md:-right-4',
                      'lg:w-[58px] lg:-bottom-6 lg:-right-5',
                    )}
                  />
                </div>
                <Typography
                  as='p'
                  variant='c2'
                  font='epilogue'
                  weight='medium'
                  color='white'
                  className={clsxm(
                    'text-center relative text-[8px] leading-[24px] mt-3',
                    'sm:text-[14px] sm:leading-[24px] sm:mt-5',
                    'md:text-[15px] md:leading-[24px] md:mt-6',
                    'lg:text-[16px] lg:leading-[24px] lg:mt-9 lg:right-1',
                  )}
                >
                  Sorry! you weren&apos;t supposed to see this
                </Typography>
              </div>
            </div>
          </Cell>
        </Grid>
      </section>
    </main>
  );
}
