export function constructMetadata({
  title = "Open Dev Hub",
  description = "Open Dev Hub is a platform for developers to showcase their projects and connect with other developers.",
  image = "",
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(image && {
        images: [
          {
            url: image,
          },
        ],
      }),
    },
    twitter: {
      title,
      description,
      ...(image && {
        card: "summary_large_image",
        images: [image],
      }),
      creator: "@nikhilnigamnik",
    },
    metadataBase: new URL("https://opendevhub.vercel.app/"),
  };
}
