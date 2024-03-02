'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { SiShopee } from 'react-icons/si';

import Button from '@/components/Button';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import { Merchandise } from '@/constant/merchandise';
import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import { ApiReturn } from '@/types/api';

export default function ProductsMerch() {
  const [datas, setDatas] = useState<Merchandise[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<ApiReturn<Merchandise[]>>(
          '/merchandise/public',
        );
        const dataMerch = response.data?.data;
        setDatas(dataMerch);
        // console.log(dataMerch);
      } catch (error) {
        throw new Error();
        // console.error('erroooorrrr', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='px-4 sm:px-8 lg:px-20 relative min-[1700px]:px-[12%]'>
        <NextImage
          src='/merchandise/shadow.png'
          alt='logo'
          width={2000}
          height={1400}
          className='max-md:hidden absolute -left-48 sm:left-0 max-[1556px]:w-[1556px]'
          priority
        />
        <div className={clsxm('w-full h-full py-10 relative')}>
          {/* title */}
          <>
            <div className='relative flex items-center justify-center gap-2 sm:px-10'>
              <NextImage
                src='/merchandise/spiral.png'
                alt='logo'
                width={63}
                height={54}
                className='scale-x-[-1] pt-2 w-[36px] h-[31px] sm:w-[44px] sm:h-[40px] lg:w-[63px] lg:h-[54px]'
                priority
              />
              <Typography
                font='anton'
                weight='regular'
                color='white'
                className='text-[32px] uppercase sm:text-[40px] lg:text-[44px] xl:text-[64px]'
              >
                our products
              </Typography>
              <NextImage
                src='/merchandise/spiral.png'
                alt='logo'
                width={63}
                height={54}
                className='pt-2 w-[36px] h-[31px] sm:w-[44px] sm:h-[40px] lg:w-[63px] lg:h-[54px]'
                priority
              />
            </div>
            <Typography
              font='epilogue'
              weight='regular'
              color='dark'
              className='text-[14px] pt-3 text-center sm:text-[18px] lg:text-[20px]'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              quibusdam nobis error delectus blanditiis.
            </Typography>
          </>

          {/* PRODUCTS EXAMPLE */}
          {/* .sort((a, b) => (a.pin && !b.pin ? -1 : b.pin && !a.pin ? 1 : 0)) */}
          <div
            className={clsxm(
              'pt-12 w-full h-full flex flex-wrap justify-center gap-4 lg:gap-6 px-6 min-[500px]:px-16 sm:px-0',
            )}
          >
            {datas.map((items, index) =>
              (items.pin === false && items?.show === true) ||
              items?.show === true ? (
                <div
                  key={index}
                  className='bg-white shadow-lg w-[340px] sm:w-[350px] md:w-[320px] lg:w-[350px] 2xl:w-[380px] rounded-xl p-5 flex flex-col justify-between items-center'
                >
                  <Image
                    src={`${items.url + items?.cover_filepath}`}
                    alt={`${items?.cover_filename}`}
                    width={147}
                    height={167}
                    className='min-[425px]:w-[160px] xl:w-[70%] text-center'
                  />
                  <div className='w-full'>
                    <Typography
                      font='epilogue'
                      weight='bold'
                      className='text-[18px] pt-4'
                    >
                      {items?.name}
                    </Typography>
                    <Typography
                      font='epilogue'
                      weight='regular'
                      className='text-[16px] py-2'
                    >
                      {items?.description}
                    </Typography>
                    <Typography
                      font='epilogue'
                      weight='bold'
                      className='text-[20px] pt-2 pb-3'
                    >
                      Rp{items?.price?.toLocaleString('id-ID')}
                    </Typography>
                    <Button
                      className='w-full py-3 px-6 sm:px-4 sm:py-3 flex items-center z-10 bg-secondary-50 hover:bg-secondary-80'
                      rightIcon={FaShoppingCart}
                      rightIconClassName='text-[20px] md:text-[18px] text-[#fff]'
                    >
                      <Typography
                        font='epilogue'
                        weight='medium'
                        color='white'
                        className='text-[18px] md:text-[16px]'
                      >
                        Pesan Sekarang
                      </Typography>
                    </Button>
                  </div>
                </div>
              ) : (
                <></>
              ),
            )}
          </div>
        </div>

        {/* ================ GOM =============== */}
        <div
          className={clsxm(
            'my-12 w-full flex flex-col pt-8 sm:pt-12 relative overflow-hidden h-[350px] md:h-[300px] lg:h-[350px] xl:h-[360px] bg-secondary-80 rounded-xl shadow-xl',
          )}
        >
          <div className='md:flex md:mt-8 xl:mt-4'>
            {/* get our merchandise */}
            <div className='w-full flex justify-center'>
              <NextImage
                src='/merchandise/circle.png'
                alt='logo'
                width={131}
                height={63}
                className='w-[74px] h-[36px] top-[42px] sm:top-[58px] md:top-[90px] xl:top-[80px] mr-[185px] absolute lg:-ml-16 lg:w-[101px] lg:h-[63px] xl:w-[131px] xl:-ml-36'
                priority
              />
              <div className='relative pb-9'>
                <Typography
                  font='anton'
                  color='white'
                  weight='regular'
                  className='text-[36px] lg:text-[48px] xl:text-[64px] z-10'
                >
                  Get Our Official
                  <br />
                  Merchandise at
                </Typography>
                <NextImage
                  src='/merchandise/line.png'
                  alt='logo'
                  width={353}
                  height={16}
                  className='absolute bottom-0 pb-8 z-10 xl:w-[353px] xl:h-[16px] xl:bottom-4 w-[200px] h-[9px]'
                  priority
                />
              </div>
            </div>
            {/* Button */}
            <div className='w-full flex flex-col justify-center items-center md:justify-start md:mt-2 lg:mt-6 md:items-start gap-[20px]'>
              <UnstyledLink
                href='https://www.instagram.com/merch.sreits'
                className='z-10'
              >
                <Button
                  variant='label'
                  className='py-1 px-2 flex items-center'
                  leftIcon={AiFillInstagram}
                  leftIconClassName='text-[18px] lg:text-[24px] xl:text-[28px] text-secondary-50'
                >
                  <Typography
                    font='epilogue'
                    weight='medium'
                    color='dark'
                    className='text-[16px] lg:text-[20px] xl:text-[24px]'
                  >
                    @merch.sreits
                  </Typography>
                </Button>
              </UnstyledLink>
              <UnstyledLink
                href='https://shopee.co.id/merchsreits'
                className='z-10'
              >
                <Button
                  variant='label'
                  className='py-1 px-2 flex items-center z-10'
                  leftIcon={SiShopee}
                  leftIconClassName='text-[18px] lg:text-[24px] xl:text-[28px] text-secondary-50'
                >
                  <Typography
                    font='epilogue'
                    weight='medium'
                    color='dark'
                    className='text-[16px] lg:text-[20px] xl:text-[24px]'
                  >
                    shopee.co.id/merchsreits
                  </Typography>
                </Button>
              </UnstyledLink>
            </div>
          </div>
          <NextImage
            src='/merchandise/windmills.png'
            alt='logo'
            width={277}
            height={355}
            className='absolute -bottom-1 xl:-bottom-3 right-0 xl:w-[277px] xl:h-[305px] w-[206px] h-[224px]'
            priority
          />
        </div>
      </div>
    </>
  );
}
