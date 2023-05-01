import Link from 'next/link';
import styles from 'src/components/styles/Button.module.scss';

type ButtonProps = {
  text: string;
  link?: string;
  variant?: 'fill' | 'outline';
  color?: 'primary' | 'secondary' | 'tertiary';
  external?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  link,
  variant = 'fill',
  color = 'primary',
  external = false,
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[color]}`;

  const content = external ? (
    <Link
      className={buttonClass}
      href={link || '#'}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </Link>
  ) : (
    <Link className={buttonClass} href={link || '#'}>
      {text}
    </Link>
  );

  return content;
};

export default Button;
