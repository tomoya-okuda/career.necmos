import HeadingH3 from '@/components/HeadingH3';
import styles from 'src/app/contact/contact.module.scss';

function page() {
  return (
    <div className={styles.contact}>
      <HeadingH3 title="お問い合わせ" color="black" />
    </div>
  );
}

export default page;
