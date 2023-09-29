import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="space-y-10">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
