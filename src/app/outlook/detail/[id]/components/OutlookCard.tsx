import Image from 'next/image';
import Link from 'next/link';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import { Outlook } from '@/types/entities/outlook';

export default function OutlookCard({
  id,
  title,
  description,
  release_date,
  cover_file_path,
}: Outlook) {
  const releaseDate = new Date(release_date).toLocaleDateString('en-UK', {
    dateStyle: 'long',
  });

  return (
    <Link
      href={`${id}`}
      target='_self'
      className={clsxm(
        'block w-full p-6 space-y-2 md:space-y-8 rounded-xl md:rounded-3xl',
        'bg-typo-white group-hover:bg-typo-outline transition-colors cursor-pointer',
      )}
    >
      <figure className='w-full aspect-video rounded-xl overflow-hidden'>
        <Image
          src={cover_file_path}
          alt='Outlook Cover'
          width={1280}
          height={720}
          className='w-full h-full object-cover bg-typo-inline'
        />
      </figure>
      <div className='space-y-2'>
        <Typography
          variant='bt'
          font='epilogue'
          color='dark'
          weight='bold'
          className='md:text-[20px] truncate'
        >
          {title}
        </Typography>
        <Typography
          variant='btn'
          font='epilogue'
          className='text-secondary-60 md:text-[18px]'
        >
          {releaseDate}
        </Typography>
        <Typography
          variant='c2'
          color='dark'
          className='md:text-[18px] max-h-24 overflow-hidden'
        >
          {description}
        </Typography>
      </div>
    </Link>
  );
}
