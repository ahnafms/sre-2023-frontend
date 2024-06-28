'use client';

import DashboardArticle from '@/components/dashboard-article/DashboardArticle';
import withAuth from '@/components/hoc/withAuth';

export default withAuth(DashboardAchievementPage, ['authed']);
function DashboardAchievementPage() {
  return <DashboardArticle articleType='achievements' />;
}
