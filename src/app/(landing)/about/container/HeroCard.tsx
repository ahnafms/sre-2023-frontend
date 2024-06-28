import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IconType } from 'react-icons';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

interface HeroCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  desc: string;
  Icon: IconType;
}

export default function HeroCard({
  className,
  title,
  desc,
  Icon,
  ...props
}: HeroCardProps) {
  return (
    <div
      className={clsxm(
        'bg-typo-white rounded-3xl m-auto shadow-xl h-full lg:h-fit',
        className,
      )}
      {...props}
    >
      <div className='flex flex-col lg:flex-row justify-center items-center h-full py-6 px-6 lg:py-9 lg:px-9 gap-5 lg:gap-12'>
        <div className='relative flex justify-center items-center text-5xl md:text-6xl h-28 aspect-square bg-secondary-80 rounded-full text-typo-white'>
          <Icon />
        </div>
        <div>
          <Typography
            variant='h5'
            font='epilogue'
            weight='bold'
            className='text-secondary-80 text-center lg:text-left lg:text-h4'
          >
            {title}
          </Typography>
          <Typography
            variant='c1'
            font='epilogue'
            weight='medium'
            className='text-typo-dark text-center lg:text-left md:text-p'
          >
            {desc}
          </Typography>
        </div>
      </div>
    </div>
  );
}
