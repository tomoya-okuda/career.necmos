import Link from 'next/link';
import styles from 'src/components/styles/Button.module.scss';

type ButtonProps = {
  text: string;
  link?: string;
  variant?: 'fill' | 'outline';
  color?: 'primary' | 'secondary' | 'tertiary';
  external?: boolean;
  width?: number | string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  link,
  variant = 'fill',
  color = 'primary',
  external = false,
  width = 200,
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
    <Link
      className={buttonClass}
      href={link || '#'}
      style={{ width: typeof width === 'number' ? `${width}px` : width }}
    >
      {text}
    </Link>
  );

  return content;
};

export default Button;
