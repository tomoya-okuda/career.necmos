import Button from '@/components/Button';
import QuestionAccordion from '@/components/QuestionAccordion';
import WelcomeCard from '@/components/WelcomeCard';
import styles from 'src/app/component/component.module.scss';

const Page: React.FC = () => {
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;

  if (environment === 'production') {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>This page is not accessible in the production environment.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Component List</h2>

      {/* Button [props: text, link?, variant?, color?, external?] */}
      <div className={styles.Button}>
        <h3># Button</h3>
        <Button
          text="Primary Fill"
          link="/"
          variant="fill"
          color="primary"
          external
        />
        <Button
          text="Primary Outline"
          link="/"
          variant="outline"
          color="primary"
        />
        <Button
          text="Secondary Fill"
          link="/"
          variant="fill"
          color="secondary"
        />
        <Button
          text="Secondary Outline"
          link="/"
          variant="outline"
          color="secondary"
        />
        <Button text="Tertiary Fill" link="/" variant="fill" color="tertiary" />
        <Button
          text="Tertiary Outline"
          link="/"
          color="tertiary"
          variant="outline"
        />
      </div>

      {/* WelcomeCard [props: variant?, headerText, subheaderText, links{ url, number, text }] */}
      <div className={styles.WelcomeCard}>
        <h3 className={styles.h3}># WelcomeCard</h3>
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

      <div className={styles.QuestionAccordion}>
        {/* QuestionAccordion [props: question, answer, noBorder?] */}
        <h3># QuestionAccordion</h3>
        <QuestionAccordion
          question="オフィスはどこですか？"
          answer={
            <>
              <p>以下がNecmosのオフィス住所です。</p>
              <p>
                〒151-0053 東京都渋谷区代々木1-30-14 天翔オフィス代々木ANNEX
                206号室
              </p>
              <p>
                【最寄り駅】
                <br />: 代々木駅から徒歩2分 / 南新宿駅から徒歩5分 /
                新宿駅から徒歩8分
              </p>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Page;
