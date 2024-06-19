import { baseURL } from "@/lib/constants";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseURL}/sitemap`,
  };
}
