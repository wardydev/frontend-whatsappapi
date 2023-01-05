import axios from "axios";

const device = axios.create({
  baseURL: "http://198.71.61.49:3333/device/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default device;
