import HeadingH3 from '@/components/HeadingH3';
import styles from 'src/app/welcome/welcome.module.scss';

function page() {
  return (
    <main className={styles.main}>
      <HeadingH3 title="ようこそ、Necmosへ。" color="white" />
      <h2>03 文化を知る</h2>
    </main>
  );
}

export default page;
