import { notFound } from 'next/navigation';

import MoreDocuments from '@/app/(document)/_components/MoreDocuments';
import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import PdfViewer from '@/components/pdf-viewer/PdfViewer';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import { ApiResponse } from '@/types/api';
import { Document, DocumentVariant } from '@/types/entities/document';

const getDocumentById = async (type: DocumentVariant, id: string) => {
  try {
    const response = await api.get<ApiResponse<Document>>(`/${type}/${id}`);
    const document = response.data.data;
    return document;
  } catch {
    return notFound();
  }
};

export default async function DocumentDetailPage({
  params,
}: {
  params: { type: DocumentVariant; id: string };
}) {
  // if (!documentVariants.includes(params.type)) notFound();

  const document = await getDocumentById(params.type, params.id);
  const { id, title, description, document_file_path, release_date } = document;

  const releaseDate = new Date(release_date).toLocaleDateString('en-UK', {
    dateStyle: 'long',
  });

  return (
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
        <MoreDocuments id={id} type={params.type} />
      </Cell>
    </Grid>
  );
}
