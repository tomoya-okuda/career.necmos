import QuestionAccordion from '@/components/QuestionAccordion';
import styles from 'src/components/styles/QuestionList.module.scss';
import Link from 'next/link';

function QuestionList() {
  return (
    <div className={styles.list}>
      <div className={styles.group}>
        <p className={styles.title}>◼︎働き方やカルチャーについて</p>
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
          noBorder
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
      <div className={styles.group}>
        <p className={styles.title}>◼︎採用に関して</p>
        <QuestionAccordion
          question="カジュアル面談は実施していますか？"
          answer={
            <>
              <p>
                NOT A
                HOTELでは随時カジュアル面談を実施しています。キャリアサイトのカジュアル面談ページ（
                <Link
                  href="https://note.com/notahotel_inc/m/mcaf0abb4f131"
                  target="_blank"
                  className={styles.link}
                >
                  詳細
                </Link>
                ）や、Wantedly（
                <Link
                  href="https://note.com/notahotel_inc/m/mcaf0abb4f131"
                  target="_blank"
                  className={styles.link}
                >
                  詳細
                </Link>
                ）の気になるポジションからご応募ください。（メンバーの業務状況との兼ね合いですべての面談実施が難しかったり、直近でフィットするポジションをご用意できなかったりする場合には、カジュアル面談をご案内できないことがございます。あらかじめご了承ください。）
              </p>
            </>
          }
        />
        <QuestionAccordion
          question="選考プロセスと期間を教えてください"
          answer={
            <>
              <p>
                ご応募 → 書類選考 → 面接（3回程度）→ オファー面談
                というのが基本的な流れです。ポジションによってはプレゼンテーションを行っていただいたり、公開できるコードやポートフォリオを拝見させていただくこともあります。基本的には全行程オンラインで実施していますが、ご希望やこちらからの提案に応じて、オファー前後に対面でお話しさせていただくこともございます。選考期間に関しては、半月〜1ヶ月程度オファーをお出しできることが多いです。（スケジュールは相談可能のため、お気軽にお尋ねください。）
              </p>
            </>
          }
        />
        <QuestionAccordion
          question="エントリー時の提出書類について教えてください"
          answer={
            <>
              <p>
                履歴書と職務経歴書の提出をお願いしています。職務経歴書に関しては、これまでに取り組まれた主な内容が記載されていればキャリアSNSなどに記載されているプロフィールのスクリーンショットでも構いません。履歴書に関しては本人確認のため氏名・現在住所・生年月日・メールアドレス・電話番号・経歴（学歴と職歴）のご提出をお願いしています。必要事項が記載されていれば、フォーマットは自由となります。
              </p>
            </>
          }
        />
        <QuestionAccordion
          question="入社や選考前に業務委託として働くことは可能ですか？"
          answer={
            <>
              <p>
                ご応募いただくポジションによっては、お互いに一緒に働くイメージを深めるために業務委託のご案内が可能です。詳細は面接やカジュアル面談の際にご相談ください。
              </p>
            </>
          }
        />
        <QuestionAccordion
          question="自分の経験にピッタリ合う職種がない場合はどうしたら良いですか？"
          answer={
            <>
              <p>
                NOT A
                HOTELでは随時、新しい採用ポジションをオープンしています。キャリアサイトを定期的にご確認いただくか、ご経験に応じて職種を相談できる「ポジションサーチ（詳細）」などもございますので、お気軽にご相談ください。
              </p>
            </>
          }
        />
        <QuestionAccordion
          question="複数のポジションに応募することは可能ですか？"
          answer={
            <>
              <p>
                可能です。一番ご関心のあるポジションにご応募いただき、アンケートや添付書類に「他のポジションにも興味がある」という旨を添えてください（応募は一度で構いません）。書類選考のタイミングから、内容を加味して実施いたします。
              </p>
            </>
          }
        />
        <QuestionAccordion
          question="過去に選考を受けたのですが、再び応募することは可能でしょうか？"
          answer={
            <>
              <p>
                可能です。その時の会社の状況に応じて採用情報を随時アップデートしておりますので、募集内容をご確認ください。一方で短期間での同一ポジションへの再度のご応募に関しては、異なるお返事を差し上げることが難しい可能性が高いです。あらかじめご了承いただけますと幸いです。
              </p>
            </>
          }
        />
        <QuestionAccordion
          noBorder
          question="新卒採用や学生インターンシップはありますか？"
          answer={
            <>
              <p>
                一部職種に関しては随時、学生インターンシップを受け入れています。詳細はキャリアサイトをご確認ください。新卒採用に関しては、現在募集をしているインターンシップ（詳細）参加者でご希望される方にのみ選考をご案内しています。
              </p>
            </>
          }
        />
      </div>
    </div>
  );
}

export default QuestionList;
