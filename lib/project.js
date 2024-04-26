export async function getProjects() {
  const data = await fetch(`${process.env.DEVELOPMENT_URL}/api/projects`).then(
    (res) => res.json()
  );
  return data;
}

export async function getProject(id) {
  const data = await fetch(
    `${process.env.DEVELOPMENT_URL}/api/projects/${id}`
  ).then((res) => res.json());
  return data;
}

export async function getNewProject() {
  const data = await fetch(`${process.env.DEVELOPMENT_URL}/api/project`).then(
    (res) => res.json()
  );
  return data;
}
