import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPhongVe, postDatGhe } from "../../api/api";
import "./CheckOut.css";
import { CheckCircleOutlined, CloseOutlined } from "@ant-design/icons";
import { userLocalStorage } from "../../api/localService";
import Spinner from "../../component/Spinner/Spinner";
import { message } from "antd";

export default function DatVe() {
  const userData = localStorage.getItem("User");
  let { info } = useSelector((state) => {
    return state.userReducer;
  });
  if (!userData) {
    window.location.href = "/login";
  }

  let params = useParams();
  const [ChiTietPhong, setChiTietPhong] = useState({});
  const [DanhSachGheDangDat, setDanhSachGheDangDat] = useState([]);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [ThongTinDatVe, setThongTinDatVe] = useState({});
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    getPhongVe(params.id)
      .then((res) => {
        setChiTietPhong(res.data.content);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);

  const handleDatVe = () => {
    const maLichChieu = params.id;
    const danhSachVe = DanhSachGheDangDat.map((ghe) => ({
      maGhe: ghe.maGhe,
      giaVe: ghe.giaVe,
    }));
    const thongTinDatVe = {
      maLichChieu: maLichChieu,
      danhSachVe: danhSachVe,
    };
    if (danhSachVe.length === 0) {
      message.error("Bạn chưa chọn vị trí");
      return;
    }
    setThongTinDatVe(thongTinDatVe);
    postDatGhe(thongTinDatVe)
      .then((res) => {
        console.log(res);
        message.success("Đặt vé thành công");
        setisLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        message.erro("Lỗi");
        setisLoading(false);
      });
  };
  console.log({ ThongTinDatVe });

  const gheAction = (ghe) => {
    let updatedGheAction = DanhSachGheDangDat;
    let index = updatedGheAction.findIndex(
      (datGhe) => datGhe.maGhe === ghe.maGhe
    );
    if (index !== -1) {
      updatedGheAction.splice(index, 1);
    } else {
      updatedGheAction.push(ghe);
    }
    setDanhSachGheDangDat(updatedGheAction);
    setUpdateFlag(!updateFlag);
  };

  console.log({ ChiTietPhong });

  let { thongTinPhim, danhSachGhe } = ChiTietPhong;

  let renderGhe = () => {
    return danhSachGhe?.map((ghe, index) => {
      let gheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let gheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classgheDangDat = "";
      let indexGheDangDat = DanhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      if (indexGheDangDat != -1) {
        classgheDangDat = "gheDangDat";
      }
      let classgheDaDuocDat = "";
      if (userLocalStorage.get().taiKhoan === ghe.taiKhoanNguoiDat) {
        classgheDaDuocDat = "gheDaDuocDat";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              gheAction(ghe);
            }}
            disabled={gheDaDat}
            className={`ghe ${gheVip} ${gheDaDat} ${classgheDangDat} ${classgheDaDuocDat} text-center`}
          >
            {gheDaDat ? (
              classgheDaDuocDat != "" ? (
                <CheckCircleOutlined style={{ marginBottom: 7.5 }} />
              ) : (
                <CloseOutlined style={{ marginBottom: 7.5 }} />
              )
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  console.log({ DanhSachGheDangDat });

  return (
    <div className="h-screen">
      {isLoading && <Spinner />}
      <div className="grid grid-cols-12">
        <div className="col-span-8">{renderGhe()}</div>
        <div className="col-span-4">
          <h3>NAME MOVIE: {thongTinPhim?.tenPhim} </h3>
          <p>LOCATION: {thongTinPhim?.diaChi} </p>
          <p>DATE: {thongTinPhim?.ngayChieu}</p>
          <p>TIME: {thongTinPhim?.gioChieu} </p>
          <hr />
          <div>
            <p>
              SEAT:
              {DanhSachGheDangDat.map((gdd, index) => {
                return (
                  <span className="text-green-500" key={index}>
                    {" "}
                    {gdd.stt}
                  </span>
                );
              })}
            </p>
            <p>
              Price:{" "}
              {DanhSachGheDangDat?.reduce((price, ghe, index) => {
                return (price += ghe.giaVe);
              }, 0).toLocaleString()}{" "}
              VND
            </p>
          </div>
          <hr />
          <p>Email: {info.email} </p>
          <hr />
          <p>Phone Number: {info.soDT} </p>
          <hr />
          <div>
            <button onClick={handleDatVe}>BUY TICKET</button>
          </div>
        </div>
      </div>
    </div>
  );
}
