import { getDetailWork } from "@/libs/api";
import parse from "html-react-parser";
import styles from "./detailWork.module.css";
import Image from "next/image";
import { WorkArticle } from "@/types/types";
import Link from "next/link";
const { area, articleArea, isRun, privateArticle, bodyArea, urlP, backLink } =
  styles;

type Props = {
  params: Promise<{ contentId: string }>;
};

export default async function DetailWork({ params }: Props) {
  const { contentId } = await params;
  const { data } = await getDetailWork(contentId);
  const { title, thumbnail, url, github, body, run, categories }: WorkArticle =
    data;    
  const reactElement = parse(body);

  return (
    <section className={area}>
      <article className={articleArea}>
        <h1>
          <a href={url} target="_blank">
            {title}
          </a>
        </h1>
        <ul>
          {categories.map((cat) => (
            <li key={cat}>{cat}</li>
          ))}
        </ul>
        <Image
          src={thumbnail.url}
          alt={title}
          width={thumbnail.width}
          height={thumbnail.height}
        />
        <p className={urlP}>
          <span>URL :</span>
          <a href={url} target="_blank">
            {url}
          </a>
        </p>
        {github && (
          <p className={urlP}>
            <span>GitHub :</span>
            <a href={github} target="_blank">
              {github}
            </a>
          </p>
        )}
        <p className={`${isRun} ${run[0] === '非公開' ? privateArticle : ""}`}>
          {run[0]}
        </p>

        <div className={bodyArea}> {reactElement}</div>
      </article>

      <Link href={"/#works"} className={backLink}>
        back
      </Link>
    </section>
  );
}
