import './App.css';
import React, {useEffect} from 'react';
import datas from './tmpdata/mock';

const {kakao} = window;

function App() {
  const windowHeight = window.innerHeight;

  useEffect(() => {
    const container = document.getElementById('map');

    const option = {
      center: datas[0].lating,
    };

    const map = new kakao.maps.Map(container, option);

    datas.forEach(function (data) {
      const markerPosition = data.lating;

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        clickable: true,
      });

      marker.setMap(map);

      const iwContent = `<div style = "padding:5px;">${data.name}</div>`;
      const infoWindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: true,
      });
      kakao.maps.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker);
        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(JSON.stringify({id: data.id}));
        }
      });
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
