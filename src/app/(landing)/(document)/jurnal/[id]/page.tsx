import DocumentDetailPage from '@/app/(landing)/(document)/_components/DocumentDetailPage';

export default function JurnalDetail({ params }: { params: { id: string } }) {
  return <DocumentDetailPage params={{ type: 'jurnal', id: params.id }} />;
}
