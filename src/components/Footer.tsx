import Link from 'next/link';
import styles from 'src/components/styles/Footer.module.scss';
import Button2 from './Button2';
import Button from './Button';
import Breadcrumb from './Breadcrumb';

function Footer() {
  return (
    <div className={styles.footer}>
      <Breadcrumb />
      <div className={styles.upper}>
        <p>キャリア採用</p>
        <h2>Join Us!</h2>
        <Button
          text="募集一覧 / 応募"
          link="/jobs"
          color="tertiary"
          variant="outline"
        />
      </div>
      <div className={styles.middle}>
        <Button2
          icon="/icons/logo-normal.svg"
          title="Necmos公式HP"
          link="https://www.necmos.jp/"
          target="_blank"
        />
        <Button2
          icon="/icons/logo-wantedly.svg"
          title="Wantedly"
          link="https://www.wantedly.com/companies/necmos"
          target="_blank"
        />
        <Button2
          icon="/icons/icon-mail.svg"
          title="お問い合わせ"
          link="/contact"
        />
      </div>
      <div className={styles.bottom}>
        <Button
          text="Necmos トップへ"
          link="/"
          variant="outline"
          color="primary"
        />
        <div className={styles.links}>
          <p>Necmos Inc. ©︎ 2023</p>
          <div className={styles.group}>
            <Link href="/welcome/company" className={styles.textLink}>
              会社を知る
            </Link>
            <div className={styles.line}></div>
            <Link href="/welcome/people" className={styles.textLink}>
              仲間を知る
            </Link>
            <div className={styles.line}></div>
            <Link href="/welcome/culture" className={styles.textLink}>
              文化を知る
            </Link>
          </div>
          <div className={styles.group}>
            <Link href="/jobs" className={styles.textLink}>
              募集一覧
            </Link>
            <div className={styles.line}></div>
            <Link href="/questions" className={styles.textLink}>
              よくある質問
            </Link>
            <div className={styles.line}></div>
            <Link href="/news" className={styles.textLink}>
              お知らせ
            </Link>
          </div>
          <div className={styles.group}>
            <Link href="/contact" className={styles.textLink}>
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
