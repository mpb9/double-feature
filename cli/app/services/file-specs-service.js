import { ALL_FILES } from "../data/file-data";

export function getFileSpecsById(id) {
  const data = ALL_FILES.find((file) => file.id === id);
  if (!data) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return data;
}
