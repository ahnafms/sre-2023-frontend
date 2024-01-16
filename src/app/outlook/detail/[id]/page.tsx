import { Suspense } from 'react';

import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Loading from '@/components/Loading';
import PdfViewer from '@/components/pdf-viewer/PdfViewer';
import Typography from '@/components/Typography';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/navbar/Navbar';
import api from '@/lib/api';
import { ApiResponse } from '@/types/api';
import { Outlook } from '@/types/entities/outlook';

import MoreOutlooks from './container/MoreOutlooks';
import OutlookBackground from './container/OutlookBackground';

const getOutlookById = async (id: string) => {
  const response = await api.get<ApiResponse<Outlook>>(`/outlook/${id}`);
  const outlook = response.data.data;
  return outlook;
};

export default async function OutlookDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const outlook = await getOutlookById(params.id);

  const { id, title, description, document_file_path, release_date } = outlook;

  const releaseDate = new Date(release_date).toLocaleDateString('en-UK', {
    dateStyle: 'long',
  });

  return (
    <Suspense fallback={<Loading />}>
      <main className='min-h-screen overflow-hidden space-y-0 bg-secondary-50'>
        <div className='relative top-0 space-y-0 pb-12 overflow-auto'>
          <OutlookBackground />

          <section className='w-full'>
            <Navbar />
          </section>

          <Grid className='gap-y-6 md:gap-y-8'>
            <Cell cols='1_full' className='space-y-4 md:space-y-6'>
              <Typography
                as='h1'
                variant='h5'
                font='anton'
                color='white'
                className='md:text-[48px] md:leading-[64px]'
              >
                {title}
              </Typography>
              <Typography
                variant='bt'
                font='epilogue'
                color='white'
                className='md:text-[18px]'
              >
                {releaseDate}
              </Typography>
              <Typography
                variant='bt'
                font='epilogue'
                color='white'
                className='md:text-[18px]'
              >
                {description}
              </Typography>
            </Cell>
            <Cell cols='1_full'>
              <PdfViewer file={document_file_path} />
            </Cell>
            <Cell cols='1_full'>
              <MoreOutlooks id={id} />
            </Cell>
          </Grid>
        </div>

        <Footer />
      </main>
    </Suspense>
  );
}
