import Link from 'next/link';
import styles from 'src/components/styles/Button.module.scss';
import { motion } from 'framer-motion';

type ButtonProps = {
  text: string;
  link?: string;
  variant?: 'fill' | 'outline';
  color?: 'primary' | 'secondary' | 'tertiary';
};

const Button: React.FC<ButtonProps> = ({
  text,
  link,
  variant = 'fill',
  color = 'primary',
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[color]}`;

  const content = (
    <Link className={buttonClass} href={link || '#'}>
      {text}
    </Link>
  );

  return content;
};

export default Button;
