import styles from 'src/components/styles/Button.module.scss';
import Link from 'next/link';

type Props = {
  title?: string;
  link?: any;
};

function Button(props: Props) {
  return (
    <div>
      <Link className={styles.button} href={props.link}>
        {props.title}
      </Link>
    </div>
  );
}

export default Button;
