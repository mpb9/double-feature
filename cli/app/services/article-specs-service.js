import { ALL_ARTICLES } from "../data/article-data";

export function getArticleSpecsById(id) {
  const data = ALL_ARTICLES.find((file) => file.id === id);
  if (!data) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return data;
}
