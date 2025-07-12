import Link from "next/link";
import styles from "../top.module.css";
import { Category } from "@/types/types";
const { linkCover, categoriesArea } = styles;

type Props = {
  id: string;
  title: string;
  categories: Category[];
  i: number;
  isActive: (i: number) => void;
  isActiveStyle: (i: number) => void;
  switchCategory: (category: Category | null) => void;
};
export const Work = ({
  id,
  title,
  categories,
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
