'use client';

import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';
import { footerLink, footerSocialMedia } from '@/constant/footer';
import { landingNavigations } from '@/constant/navigations';
import clsxm from '@/lib/clsxm';

export default function Footer() {
  const nav = landingNavigations[2];

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
          <Menu className='relative' as='div'>
            <Menu.Button className='w-full'>
              {({ open: _ }) => (
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
                  Others
                </Typography>
              )}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items
                className='-top-2 transform -translate-y-full absolute
                w-[200px] shadow-80 bg-secondary-80 
                origin-top-right divide-y divide-gray-100 shadow-lg
                ring-1 ring-black ring-opacity-5 focus:outline-none
                flex flex-col rounded-[20px] overflow-hidden
                '
              >
                <Menu.Item
                  as='button'
                  className='flex justify-center flex-col items-center'
                >
                  {nav?.children?.map(_nav => (
                    <UnstyledLink
                      key={`desktop-${_nav.name}`}
                      href={_nav.href}
                      className='flex items-center pl-7 w-full py-4 hover:bg-secondary-60'
                    >
                      <Typography
                        font='epilogue'
                        color='white'
                        variant='btn'
                        className='flex items-center gap-3'
                      >
                        <div className='mb-2 text-xl'>
                          {_nav.icon && <_nav.icon />}
                        </div>
                        {_nav.name}
                      </Typography>
                    </UnstyledLink>
                  ))}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
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
