import axios from "axios";

const auth = axios.create({
  baseURL: "http://198.71.61.49:3333/auth/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default auth;
