import axios from "axios";

axios.defaults.baseURL = "https://backend.buksir.in.ua/api/articles";

export const getTemplatesApi = async () => {
  return await axios.get("/get-templates");
};

export const getArticleApi = async (path) => {
  return await axios.get(path);
};
