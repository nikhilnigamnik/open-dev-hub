export async function getDevs() {
  const data = await fetch(`${process.env.DEVELOPMENT_URL}/api/user`).then(
    (res) => res.json()
  );
  return data;
}

export async function getDev(id) {
  const data = await fetch(
    `${process.env.DEVELOPMENT_URL}/api/user/${id}`
  ).then((res) => res.json());
  return data;
}
