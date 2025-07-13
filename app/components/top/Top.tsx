import { WorkArticle } from "@/types/types";
import { InfiniteText } from "./components/InfiniteText";
import styles from "./top.module.css";
import { Portfolio } from "./components/Portfolio";
const { hero, about } = styles;

type Props = {
  works: WorkArticle[];
};

export const Top = ({ works }: Props) => (
  <>
    <section className={hero}>
      <h1>kasumi takabayashi</h1>
      <span>
        Creative
        <br />
        Portfolio
      </span>
      <InfiniteText
        text={"Frontend Engineer, Web Creator, Web Designer"}
        count={3}
      />
    </section>

    <section className={about}>
      <hgroup>
        <h2>About me</h2>
        <h3>感性と責任のバランス感覚と、誠実さ</h3>
      </hgroup>
      <p>
        「作曲家は、無駄な音符を一つも書かない」
        <br />
        大学時代、師から学んだこの言葉を今も大切にしています。デザインや実装も同じで、意図や目的のない装飾やアニメーションには価値を感じません。なぜこのデザインなのか、この実装はなぜ必要なのか、常に説明できる仕事を心がけています。
        <br />
        また、前職である保育士の経験からは、マルチタスク、責任感、発案力、そして相手の状況を汲み取るコミュニケーション力を養いました。「一人で自走できそうにないことを無責任に引き受けない」「自分の責務の範囲を明確にし、確実に果たす」という姿勢は、今の制作にも通じています。
        <br />
        状況やタイミングを見極めたコミュニケーション力、問題や物事の本質を捉え具体的な課題に分解し改善案や解決策を模索する力、それらは保育の現場と日々の制作の中で培ってきた、私の大きな強みです。
      </p>
    </section>
    <Portfolio works={works} />
  </>
);
