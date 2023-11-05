import { HiLightningBolt } from 'react-icons/hi';

import Typography from '@/components/Typography';

export default function HeroCard() {
  return (
    <div className='bg-typo-white rounded-3xl'>
      <div className='flex flex-col lg:flex-row items-center py-12 px-6 lg:py-9 lg:px-9 gap-5 lg:gap-12'>
        <div>
          <div className='relative flex justify-center items-center md:text-6xl text-[83px] w-[173px] h-[173px] md:w-32 md:h-32 bg-secondary-80 rounded-full text-typo-white'>
            <HiLightningBolt />
          </div>
        </div>
        <div>
          <Typography
            as='h4'
            variant='h4'
            font='epilogue'
            weight='bold'
            className='text-secondary-80 text-center lg:text-left'
          >
            Facilitate
          </Typography>
          <Typography
            as='p'
            variant='p'
            font='epilogue'
            weight='medium'
            className='text-typo-dark text-center lg:text-left'
          >
            Facilitate technology development, basic knowledge in RE
          </Typography>
        </div>
      </div>
    </div>
  );
}
