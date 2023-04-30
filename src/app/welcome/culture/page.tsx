import HeadingH3 from '@/components/HeadingH3';
import WelcomeCard from '@/components/WelcomeCard';
import styles from 'src/app/welcome/welcome.module.scss';

function page() {
  return (
    <main className={styles.main}>
      <HeadingH3 title="ようこそ、Necmosへ。" color="white" />
      <WelcomeCard
        variant="culture"
        headerText="03"
        subheaderText="文化を知る"
        links={[
          { url: '/welcome/culture/3-1', text: '3-1  Necmosのカルチャー' },
          { url: '/welcome/culture/3-2', text: '3-2  求める人柄' },
          { url: '/welcome/culture/3-3', text: '3-3  コミュニケーション' },
        ]}
      />
    </main>
  );
}

export default page;
