import { Carousel, ConfigProvider, message } from "antd";
import React, { useEffect, useState } from "react";
import { getBanner } from "../../../api/api";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function Slider() {
  const [Banner, setBanner] = useState([]);
  let fetchData = async () => {
    try {
      let response = await getBanner();
      console.log(response.data.content);
      setBanner(response.data.content);
    } catch {
      message.error("ERRO");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onChange = (currentSlide) => {};
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotWidth: 10,
            dotActiveWidth: 20,
            dotHeight: 10,
          },
        },
      }}
      style={{ position: "relative", marginTop: "100px" }}
    >
      <Carousel afterChange={onChange} autoplay>
        {Banner.map((item, index) => {
          return (
            <img
              className="h-60 sm:h-72 md:h-96 lg:h-200 w-full object-fill"
              key={index}
              src={item.hinhAnh}
              alt=""
            />
          );
        })}
      </Carousel>
    </ConfigProvider>
  );
}
