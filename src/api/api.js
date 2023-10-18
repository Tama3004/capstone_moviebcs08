import axios from "axios";
import { BASE_URL, TOKEN, configHeaders } from "./config";

export let getListMovie = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP14`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getDetailMovie = (id) => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getMovieTheater = () => {
  return axios({
    url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP05`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getBanner = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachBanner`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getMovieTime = (id) => {
  return axios({
    url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getPhongVe = (id) => {
  return axios({
    url: `${BASE_URL}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let postDatGhe = (ThongTinDatVe) => {
  return axios({
    url: `${BASE_URL}/QuanLyDatVe/DatVe`,
    method: "POST",
    headers: configHeaders(),
    data: ThongTinDatVe,
  });
};

export let postGheDaDat = () => {
  return axios({
    url: `${BASE_URL}/QuanLyNguoiDung/ThongTinTaiKhoan`,
    method: "POST",
    headers: configHeaders(),
  });
};

export let postDangKy = (values) => {
  return axios({
    url: `${BASE_URL}/QuanLyNguoiDung/DangKy`,
    method: "POST",
    headers: configHeaders(),
    data: values,
  });
};
