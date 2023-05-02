import Button from '@/components/Button';
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
          {
            url: '/welcome/culture/3-1',
            number: '3-1',
            text: 'Necmosのカルチャー',
          },
          {
            url: '/welcome/culture/3-2',
            number: '3-2',
            text: '求める人柄',
          },
          {
            url: '/welcome/culture/3-3',
            number: '3-3',
            text: 'コミュニケーション',
          },
        ]}
      />
      <div className={styles.buttonContainer}>
        <Button
          text="02"
          link="/welcome/people"
          variant="outline"
          color="secondary"
          width={44}
        />
        <Button
          text="01 会社を知る"
          link="/welcome/company"
          variant="fill"
          color="primary"
        />
      </div>
    </main>
  );
}

export default page;
