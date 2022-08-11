import axios from "axios";

export const request = (options) => {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (localStorage.getItem("accesstoken")) {
    headers = {
      ...headers,
      Authorization: localStorage.getItem("accesstoken"),
    };
  }

  const defaults = { headers: headers };
  //const defaults = { headers };

  options = Object.assign({}, defaults, options);

  if (options.method === "POST") {
    return axios
      .post(options.url, options.body, { headers: headers })
        //.post(options.url, options.body, { headers })
      .then((response) => response)
      .catch((error) => {});
  }

  if (options.method === "GET") {
    return axios({
      method: "get",
      url: options.url,
      data: options.body,
      headers: headers,
    });
  }
};
