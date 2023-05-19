import Button from '@/components/Button';
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
          {
            url: '/welcome/people/2-1',
            number: '2-1',
            text: '代表あいさつ',
          },
          { url: '/welcome/people/2-2', number: '2-2', text: '役員紹介' },
          {
            url: '/welcome/people/2-3',
            number: '2-3',
            text: '社員インタビュー',
          },
        ]}
      />
      <div className={styles.buttonContainer}>
        <Button
          text="←"
          link="/welcome/company"
          variant="outline"
          color="primary"
          width={44}
        />
        <Button
          text="03 文化を知る"
          link="/welcome/culture"
          variant="fill"
          color="tertiary"
        />
      </div>
    </main>
  );
}

export default page;
