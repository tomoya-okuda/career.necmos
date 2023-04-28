import styles from 'src/components/styles/HeadingH3.module.scss';
interface HeadingH3Props {
  title: string;
  color: 'black' | 'white';
}

const HeadingH3: React.FC<HeadingH3Props> = ({ title, color }) => {
  return <h3 className={`${styles.heading} ${styles[color]}`}>{title}</h3>;
};

export default HeadingH3;
