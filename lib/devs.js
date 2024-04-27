export async function getDevs() {
  const data = await fetch(`${process.env.PRODUCTION_URL}/api/user`).then(
    (res) => res.json()
  );
  return data;
}
