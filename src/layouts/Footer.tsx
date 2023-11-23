import Image from 'next/image';
import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';
import { footerLink, footerSocialMedia } from '@/constant/footer';
import clsxm from '@/lib/clsxm';

export default function Footer() {
  return (
    <footer className='w-full bg-[#0B7156] rounded-t-xl overflow-hidden'>
      <div
        className={clsxm(
          "bg-[url('/images/footer/bg-footer.png')] bg-cover",
          'h-[510px]',
          'md:h-[406px] md:w-full',
          'flex flex-col items-center justify-center',
        )}
      >
        <Image
          src='/images/footer/logo-footer.png'
          alt='logo SRE ITS'
          width={620}
          height={322}
          className={clsxm('w-[230px]', 'lg:w-[310px]')}
        />
        <div
          className={clsxm(
            'flex flex-col md:flex-row ',
            'gap-6 mt-6 md:mt-0 lg:gap-16',
          )}
        >
          {footerLink.map(link => (
            <UnstyledLink href={link.href} key={link.name}>
              <Typography
                as='p'
                variant='btn'
                weight='bold'
                font='epilogue'
                className={clsxm(
                  'text-primary-40 drop-shadow-[3px 4px 4px 0px rgba(0, 0, 0, 0.4)]',
                  'text-center',
                  'md:text-2xl',
                )}
              >
                {link.name}
              </Typography>
            </UnstyledLink>
          ))}
        </div>
        <div
          className={clsxm(
            'flex flex-row',
            'gap-7 mt-16',
            'lg:mt-16 lg:gap-12',
          )}
        >
          {footerSocialMedia.map(socialMedia => (
            <UnstyledLink
              href={socialMedia.href}
              key={socialMedia.name}
              openNewTab={true}
              className='text-white'
            >
              <socialMedia.icon size={40} />
            </UnstyledLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
