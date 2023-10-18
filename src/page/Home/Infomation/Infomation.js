import React from "react";
import "./InfoStyle.css";

export default function Infomation() {
  return (
    <div id="infomation">
      <div className="container grid grid-cols-12 py-20">
        <div className="col-span-12 sm:col-span-8 p-10 container space-y-6 text-white">
          <div className="text-2xl sm:text-3xl font-bold space-y-6">
            <p>Ứng dụng tiện lợi dành cho</p>
            <p>người yêu điện ảnh</p>
          </div>
          <p className="text-base sm:text-xl">
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </p>
          <div>
            <button className="rounded border-1 px-6 py-3 sm:px-10 sm:py-5 border-white bg-red-600 text-base sm:text-xl font-bold">
              App Miễn Phí - Tải Về Ngay
            </button>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-4 flex justify-center">
          <div className="iphone-case case-1">
            <div className="gradient-1"></div>
            <div className="gradient-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}