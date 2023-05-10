import Image from 'next/image';
import styles from './page.module.scss';
import FV from '@/components/FV';
import WelcomeCard from '@/components/WelcomeCard';
import Button from '@/components/Button';
import QuestionList from '@/components/QuestionList';

export default function Home() {
  return (
    <main className={styles.main}>
      <FV />
      <div className={styles.mission}>
        <div className={styles.textContainer}>
          <p className={styles.heading}>自分らしさが誰かのためになる世界を実現する</p>
          <p>
            NECMOSは、上記をミッションに掲げ「一人一人」のキャリアをもっと自由にしていく会社です。1人のワクワクが100人のワクワクになる。それを皆で楽しめる。そんな仲間を募集しています。
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="/images/mission.webp"
            alt="background image"
            width={2849}
            height={345}
          />
        </div>
        <div className={styles.blackLayer}></div>
      </div>
      <div className={styles.welcome}>
        <h2>ようこそ、Necmosへ。</h2>
        <div className={styles.WelcomeCardContainer}>
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
              {
                url: '/welcome/company/1-2',
                number: '1-2',
                text: '数字で知る',
              },
              {
                url: '/welcome/company/1-3',
                number: '1-3',
                text: '事業を知る',
              },
            ]}
          />
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
        </div>
        <Button
          text="Necmosを知る"
          link="/welcome/company"
          variant="fill"
          color="primary"
        />
      </div>
      <div className={styles.questions}>
        <h2>Questions</h2>
        <p>よくある質問</p>
        <QuestionList />
      </div>
    </main>
  );
}
