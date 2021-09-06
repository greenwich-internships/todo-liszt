import axios from "axios";
import * as auth from "@services/auth";

const todoLisztAPI = axios.create({
  baseURL: "http://api-todo-liszt.sestud.io/api/v1.0/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

todoLisztAPI.interceptors.request.use(
  (config) => {
    const accessToken = auth.getAccessToken();

    if (accessToken) {
      config.headers["Authorization"] = accessToken;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

todoLisztAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    const refreshToken = auth.getRefreshToken();
    if (error.response.status === 401) {
      todoLisztAPI
        .post("/sessions/refresh", { refreshToken })
        .then((res) => {
          const { accessToken, refreshToken } = res.data;
          auth.setAccessToken(accessToken);
          auth.setRefreshToken(refreshToken);
          todoLisztAPI.defaults.headers.common["Authorization"] = accessToken;
          return todoLisztAPI(originalRequest);
        })
        .catch((error) => Promise.reject(error));
    }
    return Promise.reject(error);
  }
);

export default todoLisztAPI;