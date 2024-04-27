export async function getProjects({ slug }) {
  const project = await fetch(
    `${process.env.PRODUCTION_URL}/api/project/${slug}`
  ).then((res) => res.json());

  return project;
}
