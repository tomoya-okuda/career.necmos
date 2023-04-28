import styles from 'src/app/questions/questions.module.scss';
import HeadingH3 from '@/components/HeadingH3';
import QuestionList from '@/components/QuestionList';

function page() {
  return (
    <div className={styles.questions}>
      <HeadingH3 title="よくある質問" color="black" />
      <QuestionList title="働き方やカルチャーについて" />
    </div>
  );
}

export default page;
