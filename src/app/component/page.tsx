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

      {/* Button [props: link, color, variant, text] */}
      <div className={styles.button}>
        <Button
          link="/"
          color="primary"
          variant="fill"
          text="Primary Fill"
        />
        <Button
          link="/"
          color="primary"
          variant="outline"
          text="Primary Outline"
        />
        <Button
          link="/"
          color="secondary"
          variant="fill"
          text="Secondary Fill"
        />
        <Button
          link="/"
          color="secondary"
          variant="outline"
          text="Secondary Outline"
        />
        <Button
          link="/"
          color="tertiary"
          variant="fill"
          text="Tertiary Fill"
        />
        <Button
          link="/"
          color="tertiary"
          variant="outline"
          text="Tertiary Outline"
        />
      </div>
    </div>
  );
};

export default Page;

// function page() {
//   return (
//     <div>
//       <h2>Component List</h2>

//       {/* Button [props: link, color, variant, text] */}
//       <div className={styles.button}>
//         <Button
//           link="/example"
//           color="primary"
//           variant="fill"
//           text="Primary Fill"
//         />
//         <Button
//           link="/example"
//           color="primary"
//           variant="outline"
//           text="Primary Outline"
//         />
//         <Button
//           link="/example"
//           color="secondary"
//           variant="fill"
//           text="Secondary Fill"
//         />
//         <Button
//           link="/example"
//           color="secondary"
//           variant="outline"
//           text="Secondary Outline"
//         />
//         <Button
//           link="/example"
//           color="tertiary"
//           variant="fill"
//           text="Tertiary Fill"
//         />
//         <Button
//           link="/example"
//           color="tertiary"
//           variant="outline"
//           text="Tertiary Outline"
//         />
//       </div>
//     </div>
//   );
// }

// export default page;
