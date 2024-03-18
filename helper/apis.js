import axios from "axios";

const getRepoData = async () => {
  const res = await axios.get("https://api.github.com/repos/appwrite/appwrite");
  return res.data;
};

export { getRepoData };
