import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Typography from '@/components/Typography';
import heroAboutItems from '@/constant/heroAboutItems';
import Navbar from '@/layouts/navbar/Navbar';
import clsxm from '@/lib/clsxm';

import HeroBackground from '../container/HeroBackground';
import HeroCard from '../container/HeroCard';

export default function Hero() {
  return (
    <section className='hero-section min-h-[600px] h-screen overflow-hidden relative'>
      <Navbar />
      <HeroBackground />
      <div className='flex flex-col justify-center items-center'>
        <Grid className='z-[5]'>
          <Cell cols='1_full' rows='1_1' className='flex flex-col mt-4'>
            <Typography
              as='h1'
              variant='h5'
              font='anton'
              className={clsxm(
                'text-primary-50 text-center',
                'drop-shadow-text sm:text-h4 lg:text-h3 max-w-5xl',
              )}
            >
              Our Commitment to Sustainable Development Goals
            </Typography>
          </Cell>
        </Grid>
        <div className='bg-primary-50 mx-auto w-[90%] rounded-md lg:w-[82%] h-[370px] lg:h-[40vh] flex justify-center items-center overflow-hidden z-[3] mt-9 lg:mt-[5vh] drop-shadow-2xl lg:rounded-2xl'>
          <div className='hero-container h-[80%] lg:w-[642px] w-[300px] max-w-[85%] lg:h-full relative'>
            {heroAboutItems.map(({ title, desc, icon }, idx) => {
              if (idx == 0) {
                return (
                  <HeroCard
                    key={idx}
                    title={title}
                    desc={desc}
                    Icon={icon}
                    className='hero-card hero-card-1 z-10 h-full w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  />
                );
              } else {
                return (
                  <HeroCard
                    key={idx}
                    title={title}
                    desc={desc}
                    Icon={icon}
                    className={
                      `hero-card-${idx + 1} ` +
                      'hero-card z-0 scale-90 opacity-50 h-full w-full absolute -translate-x-1/2 -translate-y-1/2 top-[115%] left-1/2'
                    }
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
