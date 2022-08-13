// import axios from "axios";
import { API_BASE_URL } from "../constants";
import { request } from "./constants";

export function verifyUserSession() {
  return request({
    url: API_BASE_URL + "/auth/verify",
    method: "GET",
    body: null,
  });
}

// export function getUser(userId) {
//   return request({
//     url: API_BASE_URL + "/auth/user/" + userId,
//     method: "GET",
//     body: null,
//   });
// }

//User signup API
export const signUp = (user) => {
  console.log(API_BASE_URL + "/auth/signup");
  return request({
    url: API_BASE_URL + "/auth/signup",
    method: "POST",
    body: user,
  });
};

//User Login API
// export function login(loginrequest) {
//   return request({
//     url: API_BASE_URL + "/auth/signin",
//     method: "POST",
//     body: loginrequest,
//   });
// }
