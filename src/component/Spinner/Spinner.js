import React from "react";
import { ClipLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <ClipLoader size={150} color="#36d7b7" />
    </div>
  );
}
