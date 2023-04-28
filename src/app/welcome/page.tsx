import HeadingH3 from '@/components/HeadingH3';
import styles from 'src/app/welcome/welcome.module.scss';

function page() {
  return (
    <div className={styles.welcome}>
      <HeadingH3 title="ようこそ、Necmosへ。" color="white" />
    </div>
  );
}

export default page;
