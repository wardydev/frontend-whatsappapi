import axios from "axios";

const autoReply = axios.create({
  baseURL: "http://198.71.61.49:3333/autoreply",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default autoReply;
