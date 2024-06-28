'use client';

import DashboardArticle from '@/components/dashboard-article/DashboardArticle';
import withAuth from '@/components/hoc/withAuth';

export default withAuth(DashboardAkademiaPage, ['authed']);
function DashboardAkademiaPage() {
  return <DashboardArticle articleType='akademia' />;
}
