import ArticleDetailPage from '@/components/article-detail';

export default function AchievementDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <ArticleDetailPage params={{ type: 'akademia' }} id={{ id: params.id }} />
  );
}
