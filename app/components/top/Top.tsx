"use client";

import Image from "next/image";
import Link from "next/link";
import { Category, WorkArticle } from "@/types/types";
import { useState } from "react";
import { CategoryNav } from "./components/CategoryNav";
import styles from "./top.module.css";
import { Work } from "./components/Work";
import { InfiniteText } from "./components/InfiniteText";
const { hero, portfolio, titleList, thumbArea, active } = styles;

type Props = {
  works: WorkArticle[];
};
export const Top = ({ works }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexStyle, setActiveIndexStyle] = useState(0);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  const filteredWorks = currentCategory
    ? works.filter((work) => work.categories.includes(currentCategory))
    : works;
  const { id, title, thumbnail } = filteredWorks[activeIndex];

  const isActive = (i: number) => {
    setActiveIndex(i);
  };

  const isActiveStyle = (i: number) => {
    setTimeout(() => setActiveIndexStyle(i), 50);
  };

  const switchCategory = (category: Category | null) => {
    setCurrentCategory(category);
    setActiveIndex(0);
    setActiveIndexStyle(0);
  };

  //accの初期値は{}, 全てのworkのcategoriesを1つの配列にする,
  //配列の要素がaccのkeyになかったら(undefinedなら)keyにセットしvalueに0 + 1, 既出ならvalue + 1
  const categoryCountMap = works
    .flatMap((work) => work.categories)
    .reduce((acc, category) => {
      acc[category] = (acc[category] ?? 0) + 1;
      return acc;
    }, {} as Record<Category, number>);
  const allCount = works.length;

  return (
    <>
      <section className={hero}>
        <h1>kasumi takabayashi</h1>
        <span>
          creative
          <br />
          portfolio
        </span>
        <InfiniteText
          text={"Frontend Engineer, Web Creator, Web Designer"}
          count={3}
        />
      </section>

      <section className={portfolio} id="works">
        <CategoryNav
          switchCategory={switchCategory}
          currentCategory={currentCategory}
          categoryCountMap={categoryCountMap}
          allCount={allCount}
        />
        <ul className={titleList}>
          {filteredWorks.map((work, i) => (
            <Work
              {...work}
              i={i}
              isActive={isActive}
              isActiveStyle={isActiveStyle}
              switchCategory={switchCategory}
              key={work.id}
            />
          ))}
        </ul>

        <Link
          href={`/works/${id}`}
          className={`${thumbArea} ${
            activeIndex === activeIndexStyle ? active : ""
          }`}
        >
          <Image
            src={thumbnail.url}
            width={thumbnail.width}
            height={thumbnail.height}
            alt={title}
          />
        </Link>
      </section>
    </>
  );
};
