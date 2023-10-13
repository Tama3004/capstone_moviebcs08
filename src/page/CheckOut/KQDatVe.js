import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { postGheDaDat } from "../../api/api";
import _ from "lodash";
import moment from "moment";
import { format } from "date-fns";
import Spinner from "../../component/Spinner/Spinner";

export default function KQDatVe() {
  const [VeDaDat, setVeDaDat] = useState({});
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    postGheDaDat()
      .then((res) => {
        console.log(res.data.content);
        setVeDaDat(res.data.content);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
    },
    {
      title: "Rạp",
      dataIndex: "danhSachGhe",
      key: "tenHeThongRap",
      render: (danhSachGhe) => _.first(danhSachGhe)?.tenHeThongRap,
    },
    {
      title: "Cụm Rạp",
      dataIndex: "danhSachGhe",
      key: "maCumRap",
      render: (danhSachGhe) => _.first(danhSachGhe)?.maCumRap,
    },
    {
      title: "Ngày Đặt",
      dataIndex: "ngayDat",
      key: "ngayDat",
      render: (ngayDat) => format(new Date(ngayDat), "dd/MM/yyyy"),
    },
    {
      title: "Ghế",
      dataIndex: "danhSachGhe",
      key: "danhSachGhe",
      render: (danhSachGhe) => danhSachGhe.map((ghe) => ghe.tenGhe).join(", "),
    },
  ];
  return (
    <div>
      {isLoading && <Spinner />}
      <Table columns={columns} dataSource={VeDaDat.thongTinDatVe} />;
    </div>
  );
}
