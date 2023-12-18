import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

import VisionImage from '~/images/landing/landing-vision.png';

import Button from '../Button';
import Cell from '../Cell';
import Grid from '../Grid';
import Typography from '../Typography';

const Vision = () => {
  return (
    <Grid className='h-screen'>
      <Cell cols='6_full' className='flex flex-col items-center'>
        <Typography
          font='anton'
          variant='h3'
          weight='regular'
          className='text-primary-50 drop-shadow-text'
        >
          Our Vision
        </Typography>
        <div className='relative w-[500px] h-[400px]'>
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
          className='text-center w-[500px]'
        >
          SRE ITS SC serves as an international-based renewable energy community
          that unites implementation, professional management competencies,
          contributes significantly to developing, and implementing sustainable
          renewable energy.
        </Typography>
        <Button
          className='bg-secondary-50 hover:bg-secondary-60 text-c1 text-typo-white font-medium mt-7'
          rightIcon={arrowIcon}
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
