import styles from 'src/app/questions/questions.module.scss';
import HeadingH2 from '@/components/HeadingH3';

function page() {
  return (
    <div className={styles.questions}>
      <HeadingH2 title="よくある質問" />
    </div>
  );
}

export default page;
