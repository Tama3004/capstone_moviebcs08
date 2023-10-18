import React, { useEffect, useState } from "react";
import { getMovieTheater } from "../../../api/api";
import { Tabs } from "antd";
import moment from "moment";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function TabMovie() {
  const [danhSachHeThongRap, setdanhSachHeThongRap] = useState([]);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isTablet = useMediaQuery({ maxWidth: 896 }); // Kiểm tra kích thước màn hình là tablet
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
            <button>
              <div className="grid grid-cols-4 gap-5">
                {phim.lstLichChieuTheoPhim
                  .slice(0, 8)
                  .map((lichChieu, index) => {
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
            </button>
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
            tabPosition={isTablet ? "top" : "left"}
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
                  <div
                    style={{ height: isTablet ? 330 : 500, overflow: "scroll" }}
                  >
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
  const tabPosition = isTablet ? "top" : "left"; // Xác định giá trị tabPosition dựa trên isTablet

  return (
    <div id="detail-mobile" className="detail py-28">
      <div className="bg-white container shadow p-3 border-l-black py-20  rounded-3xl">
        <Tabs
          style={{ height: 500 }}
          tabPosition={tabPosition}
          defaultActiveKey="1"
          items={handleHeThongRap()}
          onChange={onChange}
          className={isHome ? "hidden-mobile" : ""}
        />
      </div>
    </div>
  );
}
