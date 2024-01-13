'use client';

import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Fragment, useState } from 'react';
import { FaBars, FaRegTimesCircle, FaRegUser } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';

import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import { landingNavigations } from '@/constant/navigations';
import clsxm from '@/lib/clsxm';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();

  const showNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className='top-0 z-[101] relative duration-300 
      shadow-xl ease-in-out my-6 mx-7 md:mx-10 
      lg:my-10 lg:max-w-none lg:mx-10 
      xl:mx-auto xl:max-w-[1240px] 
      bg-secondary-90 rounded-full'
    >
      {/* Desktop Navbar */}
      <ul className='flex justify-between px-4 h-[72px] md:py-1 md:px-4 lg:h-[91px] lg:px-8'>
        {landingNavigations.map(
          nav =>
            (nav.name === 'Home' && (
              <li
                className='relative self-center list-none overflow-hidden order-2'
                key={`desktop-${nav.name}`}
              >
                <UnstyledLink href='/'>
                  <NextImage
                    src='/navbar/sreLogo.png'
                    alt='logo'
                    width={227}
                    height={100}
                    sizes='100vw, 10vw'
                    className='hidden lg:inline-block'
                    priority
                  />
                  <NextImage
                    src='/navbar/sreLogo2.png'
                    alt='logo'
                    width={80}
                    height={70}
                    sizes='100vw, 30vw'
                    className='w-[80px] md:w-[110px] inline-block lg:hidden'
                    priority
                  />
                </UnstyledLink>
              </li>
            )) ||
            (nav.name === 'middleSections' && (
              <li
                className='lg:flex order-3 md:order-2 gap-24 self-center h-fit list-none relative'
                key={`desktop-${nav.name}`}
              >
                {/* Desktop Navbar */}
                {nav?.children?.map((_nav, _index) => (
                  <UnstyledLink
                    key={`desktop-${_nav.name}`}
                    href={_nav.href}
                    className='group hidden lg:block'
                  >
                    <Typography
                      color='white'
                      font='epilogue'
                      className={clsx(
                        `group-hover:text-white  
                        group-hover:border-b-[1px]  
                        focus:text-white  
                        focus:border-b-[1px]  
                        focus:outline-none  
                        transition-all  
                        ease-linear  
                        duration-300  
                        text-lg  
                        text-white  
                        hover:border-b-2
                        border-b-white
                        `,
                        currentPath == _nav.href && 'border-b-2 font-bold',
                      )}
                    >
                      {_nav.name}
                    </Typography>
                  </UnstyledLink>
                ))}

                {/* Mobile Navbar User Icon Right Side */}
                <div className='text-center group block lg:hidden'>
                  <div className='flex items-center cursor-pointer'>
                    <IconButton
                      icon={FaRegUser}
                      className='w-full h-full bg-transparent text-[26px] md:text-[30px] ring-0 text-white'
                    />
                  </div>
                </div>
              </li>
            )) ||
            (nav.name === 'More' && (
              <li
                className='self-center list-none order-1 lg:order-3'
                key={`desktop-${nav.name}`}
              >
                {/* Desktop Navbar Login Right Side */}
                <div className='lg:flex flex-row hidden items-center lg:gap-4'>
                  <UnstyledLink className='lg:block hidden' href='/login'>
                    <Button
                      variant='success'
                      className='border-2 w-28 bg-secondary-70'
                    >
                      <Typography
                        variant='p'
                        weight='medium'
                        className='text-white'
                      >
                        Login
                      </Typography>
                    </Button>
                  </UnstyledLink>
                  <Menu className='relative' as='div'>
                    <Menu.Button>
                      {({ open }) => (
                        <div className='text-w flex flex-row gap-1.5 items-center justify-center w-11 h-11 bg-[#D4F7E6] rounded-[50%]'>
                          {!open ? (
                            <FaBars
                              className={clsxm(
                                'text-base text-secondary-90 transition ease-in-out duration-200',
                              )}
                            />
                          ) : (
                            <FaRegTimesCircle
                              className={clsxm(
                                'text-base text-secondary-90 transition ease-in-out duration-200',
                                'rotate-180',
                              )}
                            />
                          )}
                        </div>
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
                        className={clsxm(
                          'absolute w-[200px] shadow-80 bg-secondary-80 mt-5 right-0',
                          'flex flex-col rounded-[20px] overflow-hidden',
                          'focus:outline-none',
                        )}
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

                {/* Mobile Navbar Side Navigation Button Left Side */}
                <div
                  role='button'
                  className='flex cursor-pointer flex-row gap-1.5 lg:hidden items-center justify-center w-9 h-9 bg-[#D4F7E6] rounded-[50%]'
                  onClick={showNav}
                >
                  <FaBars
                    className={clsxm(
                      'text-base text-secondary-90 transition ease-in-out duration-200',
                    )}
                  />
                </div>
              </li>
            )),
        )}
      </ul>

      {/* Mobile Side Navigations */}
      <div
        className={clsxm(
          'fixed left-0 top-0 flex flex-col items-center pt-20 z-[102]',
          'w-[80%] border-r-4 border-r-white min-h-screen px-4 pb-24 lg:hidden bg-secondary-50',
          'transition ease-in-out duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <UnstyledLink href='/'>
          <NextImage
            src='/navbar/sreLogo3.png'
            alt='logo'
            width={136}
            height={84}
            className='w-full pb-10 inline-block lg:hidden'
          />
        </UnstyledLink>
        <nav className='w-full'>
          <ul className='flex flex-col items-center gap-6'>
            {landingNavigations.map(
              (nav, idx) =>
                (nav.name === 'middleSections' &&
                  nav?.children?.map(_nav => (
                    <UnstyledLink key={`mobile-${_nav.name}`} href={_nav.href}>
                      <Typography
                        weight='bold'
                        font='epilogue'
                        className='text-white max-md:text-[18px]'
                      >
                        {_nav.name}
                      </Typography>
                    </UnstyledLink>
                  ))) ||
                (nav.name === 'More' && (
                  <Menu className='relative text-center' as='div' key={idx}>
                    <Menu.Button>
                      {({ open }) => (
                        <Typography
                          weight='bold'
                          font='epilogue'
                          className='text-white flex items-center text-center gap-2 max-md:text-[18px]'
                        >
                          {nav.name}
                          <HiChevronDown
                            className={clsxm(
                              'max-md:text-[24px] transition ease-in-out duration-200',
                              open && 'rotate-180',
                            )}
                          />
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
                        className={clsxm(
                          'shadow-80 w-full origin-top mt-1',
                          'flex flex-col ',
                          ' focus:outline-none',
                        )}
                      >
                        {nav?.children?.map(_nav => (
                          <Menu.Item
                            key={`mobile-${_nav.name}`}
                            as='button'
                            className='flex'
                          >
                            <UnstyledLink
                              href={_nav.href}
                              className={clsxm(
                                'px-[22px] py-2 text-start text-[16px] max-w-xs rounded-xl font-medium text-secondary-90',
                              )}
                            >
                              {_nav.name}
                            </UnstyledLink>
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )),
            )}
          </ul>
        </nav>
        <div className='flex mt-8'>
          <Button
            size='base'
            className='bg-primary-50 py-2 px-12 rounded-md flex items-center text-[18px] hover:bg-primary-60 z-50 text-white'
          >
            <UnstyledLink href='/login'>Login</UnstyledLink>
          </Button>
        </div>
        <div
          onClick={showNav}
          className='relative z-50 bottom-[0rem] left-0 transform cursor-pointer text-white text-[34px] top-10'
        >
          <FaRegTimesCircle />
        </div>
        <div className='absolute -bottom-10 md:-bottom-40 w-full'>
          <Image
            src={'/images/navbar/bg_navbar_mobile.png'}
            alt='background'
            width={500}
            height={500}
            sizes='100vw'
            className='w-full bg-cover'
          />
        </div>
      </div>
    </nav>
  );
}
