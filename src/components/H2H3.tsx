import styles from 'src/components/styles/H2H3.module.scss'

type H2H3props = {
  h2: string;
  h3: string;
};

function H2H3(props: H2H3props) {
  return (
    <div>
      <h2 className={styles.h2}>{props.h2}</h2>
      <p className={styles.h3}>{props.h3}</p>
    </div>
  );
}

export default H2H3;
