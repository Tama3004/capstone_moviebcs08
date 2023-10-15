import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLocalStorage } from "../api/localService";

export default function Header() {
  let { info } = useSelector((state) => {
    return state.userReducer;
  });
  let navigate = useNavigate();
  let handleLogin = () => {
    navigate("/login");
  };
  let handleLogOut = () => {
    userLocalStorage.remove();
    // navigate("/login");
    // load lai trang
    window.location.reload();
  };
  let renderUserNav = () => {
    let classBtn =
      "rounded rounded-full border-b-2 px-7 py-1 border-black border-2 ";
    if (info) {
      return (
        <div className="space-x-5 font-bold">
          <span><i className="text-base text-white">Acount: </i>{info.hoTen}</span>
          <button onClick={handleLogOut} className="rounded rounded-full border-b-2 px-7 py-1 border-black border-2 bg-red-400 ">
            SIGN OUT
          </button>
        </div>
      );
    } else {
      return (
        <>
          <button onClick={handleLogin} className={classBtn}>
            SIGN IN
          </button>
          <button className={classBtn}>Sign Up</button>
        </>
      );
    }
  };
  return (
    <header id="header" className="fixed font-sans text-2xl text-pink-100 z-50 h-24 w-screen shadow-lg top-0">
      <div className="container mx-auto h-full flex items-center justify-between">
        <a href="/">
          <i className="text-red-500 text-6xl font-bold">BackToMovie</i>
        </a>
        <div className="space-x-5">{renderUserNav()}</div>
      </div>
    </header>
  );
}
