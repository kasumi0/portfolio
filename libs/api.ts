"use server";

import { client } from "./client";

export const getAllWorks = async () => {
  const data = await client.get({ endpoint: "works", queries: { limit: 100 } });
  return { data };
};

export const getDetailWork = async (contentId: string) => {
  const data = await client.getListDetail({
    endpoint: "works",
    contentId: contentId,
  });
  return { data };
};
