import axios from "axios";

const API = axios.create({
  baseURL: "/posts.json"
});

export const fetchPosts = async () => {
  const res = await axios.get("/posts.json");
  return res.data;
};

export const fetchPostById = async (id) => {
  const res = await axios.get("/posts.json");
  return res.data.find(post => post.id === Number(id));
};