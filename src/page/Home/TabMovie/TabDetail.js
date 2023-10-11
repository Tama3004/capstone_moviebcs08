import React, { useEffect, useState } from "react";
import { Radio, Space, Tabs } from "antd";
import { getMovieTime } from "../../../api/api";
import { NavLink, useParams } from "react-router-dom";
import moment from "moment";

export default function TabDetail() {
  const [danhSachHeThongRap, setdanhSachHeThongRap] = useState([]);
  let params = useParams();
  useEffect(() => {
    getMovieTime(params.id)
      .then((res) => {
        console.log(res.data.content);
        setdanhSachHeThongRap(res.data.content.heThongRapChieu);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handleHethongRap = () => {
    return danhSachHeThongRap.map((heThongRap, index) => {
      return {
        key: index,
        label: <img src={heThongRap.logo} className="w-20" />,
        children: (
          <div>
            {heThongRap.cumRapChieu.map((cumRap, index) => {
              return (
                <div>
                  <p className="text-green-500 font-medium">
                    {cumRap.tenCumRap}
                  </p>
                  <p>{cumRap.diaChi}</p>
                  <div className="flex space-x-5" key={index}>
                    {cumRap.lichChieuPhim.map((lichChieu) => {
                      return (
                        <NavLink
                          to={`/checkout/${lichChieu?.maLichChieu}`}
                          className="bg-red-500 text-white rounded p-2 shadow"
                          key={index}
                        >
                          {moment(lichChieu.ngayChieuGioChieu).format(
                            "MM-DD-YYYY"
                          )}
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ),
      };
    });
  };
  return (
    <div>
      <Tabs
        style={{ height: 500 }}
        tabPosition="left"
        defaultActiveKey="1"
        items={handleHethongRap()}
      />
    </div>
  );
}
