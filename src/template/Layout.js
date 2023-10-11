import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="mt-20">{children}</div>
      <Footer />
    </div>
  );
}
