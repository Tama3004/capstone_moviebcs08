import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPhongVe } from "../../api/api";

export default function CheckOut() {
  const userData = localStorage.getItem("User");
  let { info } = useSelector((state) => {
    return state.userReducer;
  });
  if (!userData) {
    window.location.href = "/login";
  }

  const [ChiTietPhong, setChiTietPhong] = useState({});
  const [heThongRap, setheThongRap] = useState([]);
  let params = useParams();
  useEffect(() => {
    getPhongVe(params.id)
      .then((res) => {
        setChiTietPhong(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log({ ChiTietPhong });
  let { thongTinPhim, danhSachGhe } = ChiTietPhong;
  let renderGhe = () => {
    return danhSachGhe?.map((ghe, index) => {
      return <button>{ghe.stt}</button>;
    });
  };
  return (
    <div className="container min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-8">{renderGhe()}</div>
        <div className="col-span-4">
          <h3>0D</h3>
          <hr />
          <h3>NAME MOVIE: {thongTinPhim?.tenPhim} </h3>
          <p>LOCATION: {thongTinPhim?.diaChi} </p>
          <p>DATE: {thongTinPhim?.ngayChieu}</p>
          <p>TIME: {thongTinPhim?.gioChieu} </p>
          <hr />
          <div className="flex justify-between">
            <p>SEAT: </p>
            <p>Price: </p>
          </div>
          <hr />
          <p>Email: {info.email} </p>
          <hr />
          <p>Phone Number: {info.soDT} </p>
          <hr />
          <div>
            <button>BUY TICKET</button>
          </div>
        </div>
      </div>
    </div>
  );
}
