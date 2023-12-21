import axios from "axios";
import { useState } from "react";

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

export let axiosRequest = axiosWithAuth();

export default function useAxios() {
  const [resData, setResData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const dataRequest = (reqType = "get", endPoint = "/roles", payLoad) => {
    setLoading(true);
    return axiosRequest[reqType](endPoint, payLoad)
      .then((res) => {
        console.log("RESDATA", res.data);

        return reqType === "get" ? setResData(res.data) : "";
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  };

  return [resData, dataRequest];
}
