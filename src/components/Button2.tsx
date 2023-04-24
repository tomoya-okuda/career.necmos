import Image from 'next/image';
import Link from 'next/link';
import styles from 'src/components/styles/Button2.module.scss';

type Props = {
  icon?: any;
  title?: string;
  link?: any;
  target?: any;
};

function Button2(props: Props) {
  return (
    <div>
      <Link href={props.link} className={styles.button2} target={props.target}>
        <div className={styles.icon}>
          <Image src={props.icon} alt="icon" width={32} height={32} />
        </div>
        <div className={styles.text}>{props.title}</div>
        <div className={styles.arrow}>
          <Image
            src="icons/icon-arrow-rightup.svg"
            alt="arrow"
            width={32}
            height={32}
          />
        </div>
      </Link>
    </div>
  );
}

export default Button2;
