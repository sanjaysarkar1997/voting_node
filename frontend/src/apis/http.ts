import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: "https://elegant-jade-gopher.cyclic.app/api/", // url = base url + request url
});

export default service;
