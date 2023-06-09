import Button from '@/components/Button';
import HeadingH3 from '@/components/HeadingH3';
import WelcomeCard from '@/components/WelcomeCard';
import styles from 'src/app/welcome/welcome.module.scss';

function page() {
  return (
    <main className={styles.main}>
      <HeadingH3 title="ようこそ、Necmosへ。" color="white" />
      <WelcomeCard
        variant="company"
        headerText="01"
        subheaderText="会社を知る"
        links={[
          {
            url: '/welcome/company/1-1',
            number: '1-1',
            text: 'はじめに知るNecmos',
          },
          { url: '/welcome/company/1-2', number: '1-2', text: '数字で知る' },
          { url: '/welcome/company/1-3', number: '1-3', text: '事業を知る' },
        ]}
      />
      <div className={styles.buttonContainer}>
        <Button
          text="←"
          link="/welcome/culture"
          variant="outline"
          color="tertiary"
          width={44}
        />
        <Button
          text="02 仲間を知る"
          link="/welcome/people"
          variant="fill"
          color="secondary"
        />
      </div>
    </main>
  );
}

export default page;
