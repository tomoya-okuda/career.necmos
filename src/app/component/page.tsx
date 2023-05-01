import Button from '@/components/Button';
import styles from 'src/app/component/component.module.scss';

const Page: React.FC = () => {
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;

  if (environment === 'production') {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>This page is not accessible in the production environment.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Component List</h2>

      {/* Button [props: text, link?, variant?, color?] */}
      <div className={styles.button}>
        <Button text="Primary Fill" link="/" variant="fill" color="primary" />
        <Button
          text="Primary Outline"
          link="/"
          variant="outline"
          color="primary"
        />
        <Button
          text="Secondary Fill"
          link="/"
          variant="fill"
          color="secondary"
        />
        <Button
          text="Secondary Outline"
          link="/"
          variant="outline"
          color="secondary"
        />
        <Button text="Tertiary Fill" link="/" variant="fill" color="tertiary" />
        <Button
          text="Tertiary Outline"
          link="/"
          color="tertiary"
          variant="outline"
        />
      </div>
    </div>
  );
};

export default Page;
