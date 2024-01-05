import Image from 'next/image';
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import { Staff } from '@/types/entities/staff';

export default function Card({ data }: { data: Staff }) {
  return (
    <div className='w-[189px] h-[307px] lg:w-[296px] lg:h-[495px] bg-primary-50 flex flex-col rounded-lg'>
      <div className='w-[160px] h-[201px] lg:w-[253px] lg:h-[326px] relative bg-typo-white lg:mx-5 lg:mt-5 mx-[14px] mt-2.5 rounded-md'>
        <Image src={data.image_path} alt={data.image_file_name} fill />
      </div>
      <div className='flex flex-col lg:mt-5 mt-3'>
        <Typography
          as='h6'
          variant='h6'
          font='epilogue'
          weight='bold'
          className={clsxm(
            'text-typo-white text-center',
            'text-[16px] leading-[24px] md:text-[18px] md:leading-[24px] lg:text-[24px] lg:leading-[32px]',
          )}
        >
          {data.full_name}
        </Typography>
        <Typography
          as='p'
          variant='bt'
          font='epilogue'
          className={clsxm(
            'text-typo-white text-center',
            'text-[10px] leading-[24px] md:text-[14px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]',
          )}
        >
          {data.position}
        </Typography>
      </div>
      <div className='flex flex-row justify-center gap-2.5 lg:gap-4 mt-1.5 lg:mt-2'>
        <div className='flex justify-center items-center lg:w-8 lg:h-8 w-4 h-4 rounded-full bg-typo-white hover:bg-typo-outline text-xs lg:text-base hover:cursor-pointer'>
          <AiFillInstagram className='text-primary-50' />
        </div>
        <div className='flex justify-center items-center lg:w-8 lg:h-8 w-4 h-4 rounded-full bg-typo-white hover:bg-typo-outline text-xs lg:text-base hover:cursor-pointer'>
          <BiLogoLinkedin className='text-primary-50' />
        </div>
      </div>
    </div>
  );
}
