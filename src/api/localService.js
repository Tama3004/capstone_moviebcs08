import { message } from "antd";

export let userLocalStorage = {
  get: () => {
    let dataJson = localStorage.getItem("User");
    return JSON.parse(dataJson);
  },
  set: (user) => {
    let dataJson = JSON.stringify(user);
    localStorage.setItem("User", dataJson);
    message.success("Sucess");
  },
  remove: () => {
    localStorage.removeItem('User')
  },
};
