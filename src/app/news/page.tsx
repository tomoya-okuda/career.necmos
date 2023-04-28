import HeadingH3 from '@/components/HeadingH3';
import styles from 'src/app/news/news.module.scss';

function page() {
  return (
    <div className={styles.news}>
      <HeadingH3 title="お知らせ" color="black" />
    </div>
  );
}

export default page;
