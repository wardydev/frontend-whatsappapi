import axios from "axios";

const other = axios.create({
  baseURL: "http://198.71.61.49:3333/myPackage/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default other;
