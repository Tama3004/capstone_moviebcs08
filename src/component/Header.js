import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLocalStorage } from "../api/localService";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

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
    window.location.reload();
  };
  let handleSignUp = () => {
    navigate("/signup");
  };

  const handleMenuClick = (e) => {
    if (e.key === "signout") {
      handleLogOut();
    }
  };

  const renderMobileMenu = () => {
    const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="signout">Sign Out</Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <span>
            <i className="text-base text-white">Account: </i>
            {info.hoTen}
            <DownOutlined />
          </span>
        </a>
      </Dropdown>
    );
  };

  let renderUserNav = () => {
    let classBtn =
      "rounded rounded-full border-b-2 px-7 py-1 border-black border-2 bg-red-400 ";
    if (info) {
      return (
        <div className="space-x-5 font-bold flex flex-col items-center lg:flex-row lg:items-center">
          <span className="text-center lg:text-left">
            <i className="text-base text-white">Account: </i>
            {info.hoTen}
          </span>
          <button onClick={handleLogOut} className={`${classBtn} mt-2 lg:mt-0`}>
            SIGN OUT
          </button>
        </div>
      );
    } else {
      return (
        <div className="space-x-5 flex justify-cent lg:flex-row lg:items-center">
          <button onClick={handleLogin} className={classBtn}>
            SIGN IN
          </button>
          <button onClick={handleSignUp} className={classBtn}>
            SIGN UP
          </button>
        </div>
      );
    }
  };

  return (
    <header
      id="header"
      className="fixed font-sans lg:text-2xl text-pink-100 z-50 h-24 w-screen shadow-lg top-0"
    >
      <div className="container h-full flex items-center justify-between">
        <a href="/">
          <i className="text-red-500 text-3xl lg:text-6xl font-bold">
            BackToMovie
          </i>
        </a>
        <div className="space-x-5">
          {info && (
            <div className="text-center lg:text-left">{renderMobileMenu()}</div>
          )}
          {!info && renderUserNav()}
        </div>
      </div>
    </header>
  );
}
