import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

import Grid from '@/components/Grid';

import ScrollSpeed from '../animation/ScrollSpeed';
import Button from '../Button';
import Cell from '../Cell';
import SreYellow from '../logo/SreYellow';
import YellowStar from '../logo/YellowStar';
import DoubleYellowSquare from '../ornament/DoubleYellowSquare';
import Typography from '../Typography';

const Description = () => {
  return (
    <Grid className='h-screen flex lg:items-center relative z-50'>
      <ScrollSpeed
        speed={1}
        toVars={{
          scrollTrigger: {
            start: 'top bottom',
            end: '50% bottom',
          },
        }}
      >
        <Cell
          cols='1_full'
          className='text-center flex flex-col items-center gap-y-12'
        >
          <div className='w-40 lg:w-48 h-auto'>
            <SreYellow className='w-full h-auto' />
          </div>
          <Typography
            font='epilogue'
            weight='semibold'
            variant='t'
            className='sm:text-h6 lg:text-h5'
            color='outline'
          >
            SRE ITS exist to develop innovation, exchange ideas, and facilitate
            students as active learners in the Renewable Energy field. SRE ITS
            <span className='w-fit h-fit inline-block px-2 md:px-4 align-bottom'>
              {' '}
              <YellowStar className='animate-spin-16 w-8 md:w-10 lg:w-12 h-auto' />
            </span>
            is committed to spreading its wings and becoming trusted by the
            Indonesian government as a representative for spreading knowledge
            about Renewable Energy at the international level.
            {/*  SRE ITS */}
            {/* believes that the world&apos;s energy future will depend more on */}
            {/* Renewable Energy. */}
          </Typography>
          <div className='w-full flex flex-col items-center relative mt-16 xl:mt-20'>
            <div className='absolute w-[110vw] h-16 xl:h-20 z-0 -top-16 xl:-top-20'>
              <div className='relative w-full h-full'>
                <Image
                  src='/images/landing/white-green-strips.png'
                  fill
                  className='object-cover object-top'
                  alt='white-green-strips'
                />
              </div>
            </div>
            <div className='w-screen h-full bg-secondary-70 absolute'></div>
            <div className='absolute w-[110vw] h-16 xl:h-20 z-0 -bottom-16 xl:-bottom-20'>
              <div className='relative w-full h-full'>
                <Image
                  src='/images/landing/white-green-strips.png'
                  fill
                  className='object-cover object-bottom'
                  alt='white-green-strips'
                />
              </div>
            </div>
            <Typography
              font='epilogue'
              weight='semibold'
              variant='p'
              color='white'
              className='relative z-30 lg:text-h6'
            >
              Visit our official website at
              <DoubleYellowSquare className='absolute -top-6 -right-8 w-8 h-auto' />
            </Typography>
            <Button
              rightIcon={FaArrowRightLong}
              rightIconClassName='w-4 mt-1'
              size='lg'
              className='mt-6 bg-primary-50 hover:bg-primary-60 z-20'
            >
              SRE Indonesia
            </Button>
          </div>
        </Cell>
      </ScrollSpeed>
    </Grid>
  );
};

export default Description;
