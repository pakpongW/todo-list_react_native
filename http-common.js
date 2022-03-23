import axios from "axios";

export default axios.create({
  baseURL: "http://26.174.28.42:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});