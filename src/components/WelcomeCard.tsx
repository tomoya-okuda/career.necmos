import Link from 'next/link';
import styles from '/src/components/styles/WelcomeCard.module.scss';

type CardVariant = 'company' | 'people' | 'culture';
interface Link {
  url: string;
  text: string;
  number: string;
}

interface WelcomeCardProps {
  children?: React.ReactNode;
  variant?: CardVariant;
  links: Link[];
  headerText: string;
  subheaderText: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({
  children,
  variant = 'company',
  links,
  headerText,
  subheaderText,
}) => {
  const cardClass = `${styles.welcomeCard} ${styles[variant]}`;

  return (
    <div className={cardClass}>
      <h2 className={styles.header}>{headerText}</h2>
      <h5 className={styles.subheader}>{subheaderText}</h5>
      {children}
      <div className={styles.linkContainer}>
        {links.map((link, index) => (
          <Link key={index} className={styles.link} href={link.url}>
            <p className={styles.number}>{link.number}</p>
            {link.text}
            <p className={styles.arrow}>&rarr;</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WelcomeCard;
