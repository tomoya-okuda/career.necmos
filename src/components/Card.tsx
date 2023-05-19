import Link from 'next/link';
import styles from 'src/components/styles/Card.module.scss';
import ArrowIcon from './ArrowIcon';

type CardProps = {
  variant: 'engineer' | 'designer' | 'career-adviser';
  link: any;
  title: string;
  text: string;
};

const Card: React.FC<CardProps> = ({ variant, link, title, text }) => {
  const cardStyles = `${styles.card} ${styles[variant]}`;
  return (
    <>
      <Link href={link} className={cardStyles}>
        <div className={styles.textContainer}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <p className={styles.arrowCircle}>&rarr;</p>
      </Link>
    </>
  );
};

export default Card;
