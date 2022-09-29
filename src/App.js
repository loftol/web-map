import './App.css';
import React, {useEffect} from 'react';
import data from './tmpdata/mock';

const {kakao} = window;

function App() {
  const windowHeight = window.innerHeight;
  const markerPosition = data.sogangUniv.lating;
  const marker = new kakao.maps.Marker({
    position: markerPosition,
    clickable: true,
  });
  const iwContent = `<div style = "padding:5px;">sogangUniv</div>`;
  const infoWindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: true,
  });

  useEffect(() => {
    const container = document.getElementById('map');
    const option = {
      center: data.sogangUniv.lating,
    };
    const map = new kakao.maps.Map(container, option);

    marker.setMap(map);

    kakao.maps.event.addListener(marker, 'click', function () {
      infoWindow.open(map, marker);
    });
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: windowHeight,
        display: 'inline-block',
      }}>
      <div id="map" style={{width: '100%', height: '100%'}} />
    </div>
  );
}

export default App;
