import React, { useEffect } from "react";
import Header from "../../component/Header";
import ListMovie from "./ListMovie/ListMovie";
import TabMovie from "./TabMovie/TabMovie";
import Slider from "./Slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <ListMovie  />
      <TabMovie />
    </div>
  );
}
