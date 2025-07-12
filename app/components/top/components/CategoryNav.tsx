import { Category } from "@/types/types";
import styles from "../top.module.css";
const { categoriesNav, current } = styles;

type Props = {
  switchCategory: (category: Category | null) => void;
  currentCategory: Category | null;
  categoryCountMap: Record<Category, number>;
  allCount: number;
};

export const CategoryNav = ({
  switchCategory,
  currentCategory,
  categoryCountMap,
  allCount,
}: Props) => {
  const categories: Category[] = [
    "design",
    "cording",
    "wordpress",
    "direction",
    "react/Next.js",
  ];
  return (
    <nav className={categoriesNav}>
      <button
        onClick={() => switchCategory(null)}
        className={!currentCategory ? current : ""}
      >
        all
        <span>{allCount}</span>
      </button>
      {categories.map((cat) => (
        <button
          onClick={() => switchCategory(cat)}
          key={cat}
          className={currentCategory === cat ? current : ""}
        >
          {cat}
          <span>{categoryCountMap[cat] ?? 0}</span>
        </button>
      ))}
    </nav>
  );
};
