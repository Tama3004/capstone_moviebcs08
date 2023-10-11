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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 container">
      {movieArr.slice(0, 12).map((item, index) => {
        return (
          <Card
            key={index}
            hoverable
            cover={
              <img
                className="h-96 object-fill"
                alt="example"
                src={item.hinhAnh}
              />
            }
          >
            <Meta title={item.tenPhim} className="text-center" />
            <div className="flex justify-center">
              <NavLink
                to={`/movie/${item.maPhim}`}
                className="text-white mt-5 px-20 py-5 bg-red-500 rounded"
              >
                BUY
              </NavLink>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
