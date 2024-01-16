'use client';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { LuChevronLeft, LuChevronRight, LuLoader2 } from 'react-icons/lu';
import { Document, Page, pdfjs } from 'react-pdf';

import useComponentResize from '@/hooks/useComponentResize';
import useWindowResize from '@/hooks/useWindowdResize';
import clsxm from '@/lib/clsxm';

import IconButton from '../IconButton';
import Typography from '../Typography';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const PdfViewer = React.forwardRef<
  React.ElementRef<typeof Document>,
  React.ComponentPropsWithoutRef<typeof Document>
>(({ className, ...props }, ref) => {
  const [pageNumber, setPageNumber] = React.useState(1);
  const [numPages, setNumPages] = React.useState(0);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const { width: containerWidth } = useComponentResize(containerRef);

  const { windowWidth } = useWindowResize();
  const isDesktop = () => windowWidth && windowWidth > 768;
  const getPageWidth = () => {
    if (!isDesktop()) return Number(containerWidth) - 20;
    return Number(containerWidth) / 2 - 72;
  };

  const pageNumberForm = useForm<{ pageNumber: number }>({
    defaultValues: { pageNumber: 1 },
  });

  const { handleSubmit, register, setValue } = pageNumberForm;

  const offset = isDesktop() ? 2 : 1;
  const canNextPage = pageNumber + offset <= numPages;
  const canPrevPage = pageNumber - offset > 0;

  const handleDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleNextPage = () => {
    if (!canNextPage) return;
    setValue('pageNumber', pageNumber + offset);
    setPageNumber(prev => prev + offset);
  };

  const handlePrevPage = () => {
    if (!canPrevPage) return;
    setValue('pageNumber', pageNumber - offset);
    setPageNumber(prev => prev - offset);
  };

  const onPageNumberSubmit = (data: { pageNumber: number }) => {
    const value = data.pageNumber;
    if (value === pageNumber) return;

    if (value > numPages) setPageNumber(numPages);
    else if (value < 1) setPageNumber(1);
    else if (!isDesktop()) setPageNumber(value);
    else setPageNumber(value & 1 ? value : value - 1);
  };

  return (
    <div
      ref={containerRef}
      className={clsxm(
        'w-full px-2.5 py-4 md:p-8 space-y-2 md:space-y-8 rounded-lg md:rounded-3xl bg-secondary-80',
        className,
      )}
    >
      <div className='px-2.5 md:p-0 flex justify-between items-start'>
        <div className='flex flex-wrap gap-2 items-center'>
          <Typography
            variant='bt'
            font='epilogue'
            color='white'
            className='md:text-[20px] md:leading-[24px]'
          >
            Halaman
          </Typography>
          <FormProvider {...pageNumberForm}>
            <form onSubmit={handleSubmit(onPageNumberSubmit)}>
              <input
                {...register('pageNumber', { valueAsNumber: true })}
                className='w-8 h-8 md:w-10 md:h-10 px-1 font-epliogue text-center flex justify-center focus:outline-none'
              />
            </form>
          </FormProvider>
          <Typography
            variant='bt'
            font='epilogue'
            color='white'
            className='md:text-[20px] md:leading-[24px]'
          >
            dari {numPages}
          </Typography>
        </div>
        <div className='flex gap-2'>
          <IconButton
            type='button'
            icon={LuChevronLeft}
            variant='none'
            className='p-0 bg-typo-white rounded-none disabled:bg-typo-outline disabled:text-typo-icon'
            iconClassName='w-8 h-8'
            disabled={!canPrevPage}
            onClick={handlePrevPage}
          />
          <IconButton
            type='button'
            icon={LuChevronRight}
            variant='none'
            className='p-0 bg-typo-white rounded-none disabled:bg-typo-outline disabled:text-typo-icon'
            iconClassName='w-8 h-8'
            disabled={!canNextPage}
            onClick={handleNextPage}
          />
        </div>
      </div>

      <Document
        ref={ref}
        options={options}
        loading={
          <Typography
            font='epilogue'
            color='white'
            className='flex items-center gap-2'
          >
            Loading document <LuLoader2 className='animate-spin w-4 h-4' />
          </Typography>
        }
        {...props}
        onLoadSuccess={handleDocumentLoadSuccess}
        className='w-full flex gap-2'
      >
        <Page
          pageNumber={pageNumber}
          className='flex-1'
          width={getPageWidth()}
        />
        {pageNumber + 1 <= numPages && isDesktop() && (
          <Page
            pageNumber={pageNumber + 1}
            className='flex-1'
            width={getPageWidth()}
          />
        )}
      </Document>
    </div>
  );
});

export default PdfViewer;
