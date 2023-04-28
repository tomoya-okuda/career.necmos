import styles from 'src/components/styles/HeadingH3.module.scss';

type Props = {
  title?: string;
};

function HeadingH3(props: Props) {
  return (
    <div>
      <h3 className={styles.h3}>{props.title}</h3>
    </div>
  );
}

export default HeadingH3;
