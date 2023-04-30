import HeadingH3 from '@/components/HeadingH3';
import WelcomeCard from '@/components/WelcomeCard';
import styles from 'src/app/welcome/welcome.module.scss';

function page() {
  return (
    <main className={styles.main}>
      <HeadingH3 title="ようこそ、Necmosへ。" color="white" />
      <WelcomeCard
        variant="people"
        headerText="02"
        subheaderText="仲間を知る"
        links={[
          { url: '/welcome/people/2-1', text: '2-1  代表あいさつ' },
          { url: '/welcome/people/2-2', text: '2-2  役員紹介' },
          { url: '/welcome/people/2-3', text: '2-3  社員インタビュー' },
        ]}
      />
    </main>
  );
}

export default page;
