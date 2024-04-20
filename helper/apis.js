import axios from "axios";

// get product

export const getProjects = async () => {
  const res = await axios.get("/api/projects");
  return res.data;
};

// get user

export const getUsers = async () => {
  const res = await axios.get("/api/user");
  return res.data;
};
