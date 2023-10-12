import { userLocalStorage } from "./localService";

export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOCIsIkhldEhhblN0cmluZyI6IjIxLzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMDk3OTIwMDAwMCIsIm5iZiI6MTY4NzE5NDAwMCwiZXhwIjoxNzExMTI2ODAwfQ.I9iDnvUJNQaG_RBPSODU3vvlNF0JJ7lRamr221wclIQ";
export const configHeaders = () => {
  return {
    TokenCybersoft: TOKEN,
    Authorization: "Bearer " + userLocalStorage.get()?.accessToken,
  };
};
export const BASE_URL = "https://movienew.cybersoft.edu.vn/api";
