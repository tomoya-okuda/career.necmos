import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getDetail, getList } from 'src/libs/microcms';
import styles from 'src/app/jobs/post.module.scss';
import Button from '@/components/Button';

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
    <main className={styles.main}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.id}>{post.id}</p>
      <div className={styles.post}>{parse(post.content)}</div>
      {/* <Button title="募集一覧に戻る" link="/jobs" /> */}
    </main>
  );
}
