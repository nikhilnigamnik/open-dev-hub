import { baseURL } from "@/lib/constants";

export default async function sitemap() {
  const routes = ["", "/project/*"].map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
