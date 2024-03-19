import axios from "axios";

const getRepoData = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};

export { getRepoData };
