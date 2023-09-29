import React, { useEffect } from "react";
import Header from "../../component/Header";
import ListMovie from "./ListMovie/ListMovie";
import TabMovie from "./TabMovie/TabMovie";

export default function Home() {
  return (
    <div className="space-y-10">
      <ListMovie />
      <TabMovie />
    </div>
  );
}
