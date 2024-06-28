'use client';

import DashboardArticle from '@/components/dashboard-article/DashboardArticle';
import withAuth from '@/components/hoc/withAuth';

export default withAuth(DashboardEventPage, ['authed']);
function DashboardEventPage() {
  return <DashboardArticle articleType='our-event' />;
}
