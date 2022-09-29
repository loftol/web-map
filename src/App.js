import "./App.css";
import { useEffect, useState } from "react";

const { kakao } = window;

function App() {
  useEffect(() => {
    const container = document.getElementById("map");
    const option = { center: new kakao.maps.LatLng(37.551629, 126.937933) };
    new kakao.maps.Map(container, option);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "inline-block",
        marginLeft: "5px",
        marginRight: "5px",
      }}
    >
      <div id="map" style={{ width: "99%", height: "500px" }} />
    </div>
  );
}

export default App;
