export type Category =
  | "design"
  | "cording"
  | "wordpress"
  | "direction"
  | "react/Next.js"

export type WorkArticle = {
  id: string;
  title: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  url: string;
  github?: string;
  run: ("稼働" | "非公開")[];
  body: string;
  categories: Category[];
};
