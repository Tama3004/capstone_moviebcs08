import axios from "axios";
import { BASE_URL, configHeaders } from "../../api/config";
import { SET_INFO } from "../../constant/user";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export let LoginAction = (values) => {
  let navigate = useNavigate();
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, values, {
        headers: configHeaders(),
      })
      .then((res) => {
        let action = {
          type: SET_INFO,
          payload: res.data.content,
        };
        dispatch(action);
        navigate("/");
        message.success("Dang Nhap Thanh cong");
      })
      .catch((err) => {
        console.log(err);
        message.error("ERRO");
      });
  };
};
