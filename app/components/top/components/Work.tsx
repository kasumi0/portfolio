import Link from "next/link";
import styles from "../top.module.css";
import { Category } from "@/types/types";
import Image from "next/image";
const { linkCover, categoriesArea, sp } = styles;

type Props = {
  id: string;
  title: string;
  categories: Category[];
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  i: number;
  isActive: (i: number) => void;
  isActiveStyle: (i: number) => void;
  switchCategory: (category: Category | null) => void;
};
export const Work = ({
  id,
  title,
  categories,
  thumbnail,
  i,
  isActive,
  isActiveStyle,
  switchCategory,
}: Props) => {
  const switchWork = (i: number) => {
    isActive(i);
    isActiveStyle(i);
  };

  return (
    <li onMouseOver={() => switchWork(i)}>
      <article>
        <Link href={`/works/${id}`} className={linkCover}></Link>
        <Image src={thumbnail.url} alt={title} width={thumbnail.width} height={thumbnail.height} className={sp}/>
        <h3>{title}</h3>
        <div className={categoriesArea}>
          {categories.map((cat) => (
            <button type="button" key={cat} onClick={() => switchCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </article>
    </li>
  );
};
