import React, { useState } from "react";
import DatVe from "./DatVe";
import { Tabs } from "antd";
import KQDatVe from "./KQDatVe";
import Header from "../../component/Header";

export default function CheckOutPage() {
  const [currentTab, setCurrentTab] = useState(1);

  const onChange = (key) => {
    setCurrentTab(key);
  };

  const handleDatVe = () => {
    setCurrentTab(2);
  };

  const items = [
    {
      key: 1,
      label: <p className="text-xl font-medium">01. CHỌN GHẾ & THANH TOÁN</p>,
      children: <DatVe handleDatVe={handleDatVe} />,
    },
    {
      key: 2,
      label: <p className="text-xl font-medium">02. KẾT QUẢ ĐẶT VÉ</p>,
      children: <KQDatVe />,
    },
  ];

  return (
    <div>
      <Header />
      <Tabs
        className="tab-content container py-5 h-screen"
        defaultActiveKey={currentTab}
        items={items}
        onChange={onChange}
      />
    </div>
  );
}
