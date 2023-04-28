import QuestionAccordion from '@/components/QuestionAccordion';
import styles from 'src/components/styles/QuestionList.module.scss';
import Link from 'next/link';

type Props = {
  title?: string;
};

function QuestionList(props: Props) {
  return (
    <div className={styles.list}>
      <p className={styles.title}>{props.title}</p>
      <QuestionAccordion
        question="オフィスはどこですか？"
        answer={
          <>
            <p>以下がNecmosのオフィス住所です。</p>
            <p>
              〒151-0053 東京都渋谷区代々木1-30-14 天翔オフィス代々木ANNEX
              206号室
            </p>
            <p>
              【最寄り駅】
              <br />: 代々木駅から徒歩2分 / 南新宿駅から徒歩5分 /
              新宿駅から徒歩8分
            </p>
          </>
        }
      />
      <QuestionAccordion
        question="リモートはありますか？"
        answer={
          <>
            <p>
              チーム・プロジェクトに応じて適宜集まって業務をすることや、半年に一度以上の頻度でNOT
              A
              HOTELの全メンバーが集まるオフサイトミーティング・交流会を実施しています。これまでにNOT
              A HOTEL AOSHIMAやNOT A HOTEL EXCLUSIVE ASAKUSAなど、NOT A
              HOTELの拠点を利用して開催しています。入社前の内定者の方もご参加いただけます。
            </p>
          </>
        }
      />
      <QuestionAccordion
        question="普段のコミュニケーションはどのように行なっていますか？"
        answer={
          <>
            <p>
              チャットやオンライン会議などを用いたコミュニケーションが活発です。主にSlack、Google
              Meet、Notion
              などを活用して、フルリモート環境でもメンバー同士が効果的に連携しています。
            </p>
          </>
        }
      />
      <QuestionAccordion
        question="どんなメンバーが活躍していますか？"
        answer={
          <>
            <p>
              NOT A
              HOTELには建築、ソフトウェア、ビジネス、ホテル・レストランサービス、コーポレートなどさまざまな領域に関わるプロフェッショナルが在籍しています。異なる専門領域を持ったメンバーが「超自律」して取り組み、さらにコラボレーションすることで新しい価値を生み出しています。メンバーの詳細なプロフィールはキャリアサイト上部のメンバー紹介や、社員インタビュー（
              <Link
                href="https://note.com/notahotel_inc/m/mcaf0abb4f131"
                target="_blank"
                className={styles.link}
              >
                詳細
              </Link>
              ）からご確認いただけます。
            </p>
          </>
        }
      />
      <QuestionAccordion
        question="Necmosでの働き方を教えてください"
        answer={
          <>
            <p>
              NOT A
              HOTELはコアタイムのないフルフレックス制度を採用しています。VALUEのひとつにも「超自律」を掲げており、メンバーそれぞれが裁量を持って仕事をしています。週次で全体定例を開催し、領域横断的な目線合わせや相談の場を設けています。SlackやNotionなどオンラインでの情報共有をなるべくオープンにすることで、フルリモート環境であっても誰もが等しく必要な情報にアクセスできる環境を目指しています。
            </p>
          </>
        }
      />
      <QuestionAccordion
        question="Necmosのカルチャーを教えてください"
        answer={
          <>
            <p>
              NOT A
              HOTELではワンチームの考え方を大切にしています。建築、ソフトウェア、ホテルサービスといった専門性の異なる領域を組み合わせるNOT
              A HOTELではチームを超えたコラボレーションが欠かせません。NOT A
              HOTEL・NOT A HOTEL
              MANAGEMENTの両メンバーが互いを尊重し、協働することで価値を生み出しています。
              <br />
              <br />
              また、VALUEの「超ワクワク」「超クリエイティブ」「超自律」というキーワードが、そのままカルチャーにもなっています。ハードルの高いチャレンジに対しても、常にポジティブに取り組み「すべての常識を超えていく」ことにトライしています。
            </p>
          </>
        }
      />
    </div>
  );
}

export default QuestionList;
