import DocumentDetailPage from '@/app/(landing)/(document)/_components/DocumentDetailPage';

export default function OutlookDetail({ params }: { params: { id: string } }) {
  return <DocumentDetailPage params={{ type: 'outlook', id: params.id }} />;
}
