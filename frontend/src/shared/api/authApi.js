import axios from "axios";

axios.defaults.baseURL = "http://localhost:3933/api/auth";

const setToken = (token) =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

export const signinApi = async ({ formData }) => {
  const { data } = await axios.post("/signin", formData);
  setToken(data.token);
  return data;
};

export const getCurrentAdminApi = async (token) => {
  setToken(token);
  const { data } = await axios.get("/current");
  return data;
};

export const logoutApi = async () => {
  return await axios.get("/logout");

  //! NOT READY
};
