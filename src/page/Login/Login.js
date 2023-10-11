import React from "react";
import Banner from "./Banner";
import FormLogin from "./Form";

export default function Login() {
  return (
    <div className="w-full flex h-screen  bg-orange-400 justify-center items-center">
      <div className="container flex bg-white rounded-xl p-10">
        <Banner />
        <FormLogin />
      </div>
    </div>
  );
}
