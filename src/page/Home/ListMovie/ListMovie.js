import React, { useEffect, useState } from "react";
import { getListMovie } from "../../../api/api";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import { NavLink } from "react-router-dom";

export default function ListMovie() {
  const [movieArr, setmovieArr] = useState([]);
  useEffect(() => {
    getListMovie()
      .then((res) => {
        console.log(res);
        setmovieArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-10 container">
      {movieArr.slice(0,12).map((item, index) => {
        return (
          <Card key={index}
            hoverable
            // style={{ width: 240 }}
            cover={
              <img
                className="h-48 object-cover"
                alt="example"
                src={item.hinhAnh}
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            <button className="px-20 py-5 bg-red-500 center rounded">
              <NavLink to={`/movie/${item.maPhim}`} className="text-white">
                BUY
              </NavLink>
            </button>
          </Card>
        );
      })}
    </div>
  );
}
