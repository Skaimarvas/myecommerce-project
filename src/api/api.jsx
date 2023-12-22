import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return token
    ? axios.create({
        baseURL: "https://workintech-fe-ecommerce.onrender.com",
        headers: {
          Authorization: token,
        },
      })
    : axios.create({
        baseURL: "https://workintech-fe-ecommerce.onrender.com",
      });
};

export let axiosInstance = axiosWithAuth();
