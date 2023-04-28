import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getDetail, getList } from 'src/libs/microcms';
import styles from 'src/app/jobs/post.module.scss';

// キャッシュを利用しない
export const revalidate = 0;

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <div>{parse(post.content)}</div>
    </main>
  );
}
