import axios from "axios";

axios.defaults.baseURL = "http://localhost:3933/api/auth";

// const setToken = (token) => (axios.defaults.headers.common["Bearer"] = token);

console.log(axios.defaults.headers.common);

export const signinApi = async (formData) => {
  const { data } = await axios.post("/signin", formData);
  return data;
};

export const logoutApi = async () => {
  await axios.get("/logout");
  return;
  //! NOT READY
};

export const currentAdminApi = async (token) => {
  // setToken(token)
  await axios.get("current");
  return;
  //! NOT READY
};
