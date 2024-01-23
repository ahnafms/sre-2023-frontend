'use client';

import Document from '@/components/document';
import withAuth from '@/components/hoc/withAuth';

export default withAuth(OutlookPage, ['authed']);

function OutlookPage() {
  return <Document type='outlook' />;
}
