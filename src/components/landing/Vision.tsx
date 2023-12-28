import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

import clsxm from '@/lib/clsxm';
import VisionImage from '~/images/landing/landing-vision.png';

import Button from '../Button';
import Cell from '../Cell';
import Grid from '../Grid';
import DoubleYellowSquare from '../ornament/DoubleYellowSquare';
import Typography from '../Typography';

const Vision = () => {
  return (
    <Grid className='h-screen relative z-10'>
      <Cell
        cols='1_full'
        colsLg='6_full'
        className='flex flex-col items-center'
      >
        <Typography
          font='anton'
          variant='h4'
          weight='regular'
          className='text-primary-50 drop-shadow-text md:text-h3 relative'
        >
          Our Vision
          <DoubleYellowSquare className='absolute scale-x-flip -top-8 -left-10 w-10 h-auto' />
        </Typography>
        <div className='relative w-full my-10 min-h-[300px] h-[40vh] md:h-[50vh] md:my-6'>
          <Image
            src={VisionImage}
            alt='image vision'
            fill
            sizes='600px'
            className='object-contain'
          />
        </div>
        <Typography
          font='epilogue'
          variant='c2'
          weight='medium'
          color='white'
          className='text-center w-full md:w-[500px]'
        >
          SRE ITS SC serves as an international-based renewable energy community
          that unites implementation, professional management competencies,
          contributes significantly to developing, and implementing sustainable
          renewable energy.
        </Typography>
        <Button
          className={clsxm(
            'bg-secondary-50 hover:bg-secondary-60 text-c1 text-typo-white font-medium mt-7',
            'px-4 py-2',
          )}
          rightIcon={arrowIcon}
          size='base'
        >
          More About Us
        </Button>
      </Cell>
    </Grid>
  );
};

const arrowIcon = () => {
  return (
    <div>
      <FaArrowRightLong />
    </div>
  );
};

export default Vision;
