import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_REST_API_BASE_URL;

const http = (method = null, url = null, data = null) => {
  const request = {};
  if (method) request["method"] = method;
  if (url) request["url"] = url;
  if (data) request["data"] = data;

  const result = axios(request);
  return result;
};

export default http;
