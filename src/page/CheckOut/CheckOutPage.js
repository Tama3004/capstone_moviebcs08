import React from "react";
import DatVe from "./DatVe";
import { Tabs } from "antd";

export default function CheckOutPage() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: <p className="text-xl font-medium">01. CHỌN GHẾ & THANH TOÁN</p>,
      children: <DatVe />,
    },
    {
      key: "2",
      label: <p className="text-xl font-medium">02. KẾT QUẢ ĐẶT VÉ</p>,
      children: "Content of Tab Pane 2",
    },
  ];
  return (
    <Tabs
      className="container py-5"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  );
}
