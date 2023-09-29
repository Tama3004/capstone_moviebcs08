import React, { useEffect, useState } from "react";
import { getDetailMovie, getListMovie } from "../../api/api";
import { useParams } from "react-router-dom";
import { Progress } from "antd";

export default function DetailMovie() {
  let params = useParams();
  console.log(params);
  const [Detail, setDetail] = useState({});
  useEffect(() => {
    getDetailMovie(params.id)
      .then((res) => {
        console.log(res);
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container flex justify-between">
      <img className="w-1/3 aspect-square" src={Detail.hinhAnh} alt="" />
      <Progress
        size={400}
        format={(percent) => (
          <span className="text-red-700 font-medium block">
            {percent / 10} điểm
          </span>
        )}
        type="circle"
        percent={Detail.danhGia * 10}
        strokeWidth={10}
        strokeColor={"pink"}
      />
    </div>
  );
}