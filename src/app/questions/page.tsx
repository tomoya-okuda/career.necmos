import styles from 'src/app/questions/questions.module.scss';
import HeadingH3 from '@/components/HeadingH3';

function page() {
  return (
    <div className={styles.questions}>
      <HeadingH3 title="よくある質問" color="black" />
    </div>
  );
}

export default page;
