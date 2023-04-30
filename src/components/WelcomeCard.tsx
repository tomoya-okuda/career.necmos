import Link from 'next/link';
import styles from '/src/components/styles/WelcomeCard.module.scss';

type CardVariant = 'company' | 'people' | 'culture';
interface Link {
  url: string;
  text: string;
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
      <h2>{headerText}</h2>
      <h5>{subheaderText}</h5>
      {children}
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link className={styles.link} href={link.url}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WelcomeCard;
