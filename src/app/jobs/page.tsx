import Link from 'next/link';
import { getList } from 'src/libs/microcms';
import styles from 'src/app/jobs/jobs.module.scss';
import HeadingH3 from '@/components/HeadingH3';

export default async function StaticPage() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div className={styles.jobs}>
      <HeadingH3 title="募集一覧" color="black" />
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`jobs/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
