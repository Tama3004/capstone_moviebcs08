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
    let classBtn = "border-2 border-black rounded-xl px-7 py-3";
    if (info) {
      return (
        <>
          <span>{info.hoTen}</span>
          <button onClick={handleLogOut} className={classBtn}>
            Log Out
          </button>
        </>
      );
    } else {
      return (
        <>
          <button onClick={handleLogin} className={classBtn}>
            Log In
          </button>
          <button className={classBtn}>Sign Up</button>
        </>
      );
    }
  };
  return (
    <header className="fixed z-50 bg-white h-20 w-screen shadow-lg top-0">
      <div className="container mx-auto h-full flex items-center justify-between">
        <a href="/">
          <span className="text-red-500 animate-pulse text-xl">CyperFlix</span>
        </a>
        <div className="space-x-5">{renderUserNav()}</div>
      </div>
    </header>
  );
}
