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
    <div id="ListMovie">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 container">
        {movieArr.slice(0, 12).map((item, index) => {
          return (
            <Card key={index}>
              <div className="relative">
                <img
                  className="h-movie object-fill w-full rounded rounded-t-lg"
                  alt="example"
                  src={item.hinhAnh}
                ></img>
                <div
                  id="itemMovie"
                  className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100"
                >
                  <NavLink
                    to={`/movie/${item.maPhim}`}
                    className="text-white font-bold text-xl px-20 py-3 border-red-400 border-4 rounded rounded-full"
                  >
                    <i>MUA VÉ</i>
                  </NavLink>
                </div>
              </div>
              <Meta
                title={item.tenPhim}
                className="text-center font-sans text-3xl"
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
