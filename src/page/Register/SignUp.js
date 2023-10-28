import React from "react";
import { Form, Input, Button, message } from "antd";
import { postDangKy } from "../../api/api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Received values:", values);
    postDangKy(values)
      .then((res) => {
        console.log(res);
        message.success("Đăng ký thành công");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        message.erro("Tài khoản đã tồn tại");
      });
  };

  return (
    <div className="container lg:flex items-center justify-center pt-28 pb-28 ">
      <Form
        name="register-form"
        onFinish={onFinish}
        layout="vertical"
        className="lg:border-2 lg:rounded-xl lg:shadow-xl lg:w-2/6 lg:p-20 "
      >
        <Form.Item
          label="Tài khoản"
          name="taiKhoan"
          rules={[{ required: true, message: "Vui lòng nhập tài khoản" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="matKhau"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email" },
            { type: "email", message: "Email không hợp lệ" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="soDt"
          rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Họ tên"
          name="hoTen"
          rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-red-500 font-bold"
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
