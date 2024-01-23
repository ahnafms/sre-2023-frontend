'use client';

import Document from '@/components/document';
import withAuth from '@/components/hoc/withAuth';

export default withAuth(JournalPage, ['authed']);

function JournalPage() {
  return <Document type='jurnal' />;
}
