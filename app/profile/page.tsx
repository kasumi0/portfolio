import Image from "next/image";
import styles from "./profile.module.css";
import { others, skills } from "../data/skills";
import { SkillCard } from "./skill";
const { fv, policy, history, head, body, skillsArea, othersArea, cards } = styles;

export default function Profile() {

  return (
    <>
      <section className={fv}>
        <h1>profile</h1>
      </section>

      <section className={policy}>
        <h2>Work Policy</h2>
        <h3>Web制作で大切にしていること</h3>
        <p>
          Webサイト制作においては、常に「そのサイトの目的に合っているか」をコンセプト設計やデザインの判断基準としています。
          <br />
          サイトの目的は、集客・認知・ブランディングなどプロジェクトによってさまざまです。私は、その目的にしっかりとコミットする設計やデザイン、実装を心がけています。
          <br />
          また、ユーザー視点での情報整理や、目的と機能を持ったUI/UX設計にも重きを置いています。中でもCSSは進化が著しく、UI/UXを支える重要な技術であるため、常にキャッチアップを欠かさないようにしています。
        </p>
      </section>

      <section className={history}>
        <div>
          <div className={head}>
            <h2>
              Kasumi
              <br />
              Takabayashi
            </h2>
            <Image
              src={"/self.jpg"}
              alt="self portrait"
              width={200}
              height={200}
            />
          </div>

          <div className={body}>
            <h3>髙林 果純</h3>
            <p>
              愛知県生まれ。浜松学芸高校では音楽を専攻し、チャイコフスキーに感銘を受けて作曲の道へ。名古屋音楽大学に進学し、本格的に作曲を学びました。
              <br />
              前職は保育士として勤務。発表会では、自作のオペレッタを作曲するなど、創造的な仕事に最もやりがいを感じていました。
              <br />
              「社会的な需要があり、かつクリエイティブである仕事」としてWeb制作に魅力を感じ、スクールなどで学び、未経験からIT業界への転職を実現しました。現在はSES企業の内勤として、Webサイトのデザインからコーディング、WordPress連結までを一貫して担当しています。
              <br />
              React / Next.js /
              TypeScriptなどの技術を独学で学び、現在はフロントエンド開発の面白さに惹かれ、エンジニアとしてのスキルを日々磨いています。アートは自分を表現する手段、デザインは目的を達成する手段。どちらにも真摯に向き合ってきた経験があるからこそ、「アートよりもロジカルに、デザインよりも創造的に」そんな制作・開発を目指しています。
              <br />
              趣味は神社めぐり、日本神話、音楽、アニメ、旅行、ワインなど。美意識と好奇心を常に刺激しながら、ものづくりに取り組んでいます。
            </p>
          </div>
        </div>
      </section>

      <section className={skillsArea}>
        <h2>skills</h2>
        <ul className={cards}>
          {skills.map((skill) => (
            <SkillCard skill={skill} key={skill.caption} />
          ))}
        </ul>
      </section>

      <section className={othersArea}>
        <h2>
          <span>Next to Learn</span>
          <span>これからキャッチアップしたい注目の技術</span>
        </h2>
        <ul className={cards}>
          {others.map((skill) => (
            <SkillCard skill={skill} key={skill.caption} />
          ))}
        </ul>
      </section>
    </>
  );
}
