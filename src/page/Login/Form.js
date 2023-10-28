import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import { BASE_URL, configHeaders } from "../../api/config";
import { useDispatch } from "react-redux";
import { SET_INFO } from "../../constant/user";
import { useNavigate } from "react-router-dom";
import { userLocalStorage } from "../../api/localService";
import { LoginAction } from "../../redux/action/User";
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const FormLogin = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
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
        // đẩy data của user về localStorage
        userLocalStorage.set(res.data.content);
        navigate("/");
        message.success("Đăng nhập thành công")
      })
      .catch((err) => {
        message.error("Sai tài khoản hoặc mật khẩu");
        console.log(err);
      });
  };
  const onFinish2 = (values) => {
    dispatch(LoginAction(values));
  };
  return (
    <div className="w-3/4 p-4 border border-gray-300 rounded-lg bg-white">
      <Form
        className="flex-col align-center justify-center"
        layout="vertical"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 20,
          }}
        >
          <Button type="primary" className="bg-orange-600" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormLogin;
