import React, { useEffect, useState } from "react";
import { Radio, Space, Tabs } from "antd";
import { getMovieTime } from "../../../api/api";
import { NavLink, useParams } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

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

  const ScrollableContainer = styled.div`
    overflow-y: auto;
    max-height: 400px;
  `;

  let handleHethongRap = () => {
    return danhSachHeThongRap.map((heThongRap, index) => {
      return {
        key: index,
        label: <img src={heThongRap.logo} className="w-20" />,
        children: (
          <div>
            {heThongRap.cumRapChieu.map((cumRap, index) => {
              return (
                <ScrollableContainer>
                  <p className="text-green-500 font-medium">
                    {cumRap.tenCumRap}
                  </p>
                  <p>{cumRap.diaChi}</p>
                  <div className="grid lg:grid-cols-8 md:grid-cols-8 text-center">
                    {cumRap.lichChieuPhim
                      .slice(0, 12)
                      .map((lichChieu, index) => (
                        <NavLink
                          to={`/checkout/${lichChieu?.maLichChieu}`}
                          className="bg-red-500 text-white rounded p-2 shadow mb-2 mr-2 lg:col-span-1 md:col-span-2"
                          key={index}
                        >
                          {moment(lichChieu.ngayChieuGioChieu).format(
                            "MM-DD-YYYY"
                          )}
                        </NavLink>
                      ))}
                  </div>
                </ScrollableContainer>
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
        className="bg-white py-5"
      />
    </div>
  );
}
