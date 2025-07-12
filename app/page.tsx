import { getAllWorks } from "@/libs/api";
import { WorkArticle } from "@/types/types";
import { Top } from "./components/top/Top";
export default async function Home() {
  const { data } = await getAllWorks();
  const works: WorkArticle[] = data.contents;

  return <Top works={works} />;
}
