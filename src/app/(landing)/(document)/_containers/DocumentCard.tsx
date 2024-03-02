import Image from 'next/image';
import Link from 'next/link';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import { Document, DocumentVariant } from '@/types/entities/document';

type DocumentCardProps = Document & {
  type: DocumentVariant;
  withRecentBadge?: boolean;
};

export default function DocumentCard({
  type,
  withRecentBadge = false,
  id,
  title,
  description,
  release_date,
  cover_file_path,
}: DocumentCardProps) {
  const releaseDate = new Date(release_date).toLocaleDateString('en-UK', {
    dateStyle: 'long',
  });

  return (
    <Link
      href={`/${type}/${id}`}
      target='_self'
      className={clsxm(
        'block w-full h-fit mt-auto p-6 space-y-2 md:space-y-8 rounded-xl md:rounded-3xl',
        'bg-typo-white hover:bg-typo-outline transition-colors cursor-pointer',
      )}
    >
      {withRecentBadge && (
        <div className='flex items-center gap-1.5'>
          <div className='bg-primary-50 w-3 h-6 md:h-8' />
          <Typography variant='t' weight='semibold' color='dark'>
            New Publication
          </Typography>
        </div>
      )}
      <figure className='w-full aspect-video rounded-xl overflow-hidden'>
        <Image
          src={cover_file_path}
          alt='Document Cover'
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
          className='md:text-[18px] h-12 md:h-24 overflow-hidden'
        >
          {description}
        </Typography>
      </div>
    </Link>
  );
}
