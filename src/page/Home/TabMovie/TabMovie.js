import React, { useEffect, useState } from "react";
import { getMovieTheater } from "../../../api/api";
import { Tabs } from "antd";
import moment from "moment";

export default function TabMovie() {
  const [danhSachHeThongRap, setdanhSachHeThongRap] = useState([]);
  const onChange = (key) => {
    console.log(key);
  };
  useEffect(() => {
    getMovieTheater()
      .then((res) => {
        console.log(res.data.content);
        setdanhSachHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderDsPhim = (dsPhim) => {
    return dsPhim.map((phim, index) => {
      return (
        <div className="flex space-x-5 p-3 items-center" key={index}>
          <img className="w-20 h-32 object-cover" src={phim.hinhAnh} alt="" />
          <div>
            <p>{phim.tenPhim}</p>
            <div className="grid grid-cols-4 gap-5">
              {phim.lstLichChieuTheoPhim.slice(0, 8).map((lichChieu, index) => {
                return (
                  <span
                    className="bg-red-500 text-white rounded p-2 shadow"
                    key={index}
                  >
                    {moment(lichChieu.ngayChieuGioChieu).format("MM-DD-YYYY")}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  };
  let handleHeThongRap = () => {
    return danhSachHeThongRap.map((heThongRap, index) => {
      return {
        key: index,
        label: <img src={heThongRap.logo} className="w-20" />,
        children: (
          <Tabs
            style={{ height: 500 }}
            tabPosition="left"
            defaultActiveKey="1"
            items={heThongRap.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.maCumRap,
                label: (
                  <div className="text-left w-96 whitespace-normal">
                    <p className="text-green-500 font-medium">
                      {cumRap.tenCumRap}
                    </p>
                    <p>{cumRap.diaChi}</p>
                  </div>
                ),
                children: (
                  <div style={{ height: 500, overflow: "scroll" }}>
                    {renderDsPhim(cumRap.danhSachPhim)}
                  </div>
                ),
              };
            })}
            onChange={onChange}
          />
        ),
      };
    });
  };
  return (
    <div className="container shadow p-3 rounded border-2 flex border-black">
      <Tabs
        style={{ height: 500 }}
        tabPosition="left"
        defaultActiveKey="1"
        items={handleHeThongRap()}
        onChange={onChange}
      />
    </div>
  );
}
