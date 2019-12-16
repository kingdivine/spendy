import React, { useEffect, useRef } from "react";

const KEY = "API_KEY_HERE";

const mapStyle = {
  width: "100%",
  height: "400px"
};

const Map = () => {
  const ref = useRef();

  const createMap = () => {
    new window.google.maps.Map(ref.current, {
      zoom: 2,
      center: {
        lat: 43.642567,
        lng: -79.387054
      }
    });
  };

  // useEffect(() => {
  //   const mapScript = document.createElement("script");
  //   mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${KEY}`;
  //   window.document.body.appendChild(mapScript);
  //   mapScript.addEventListener("load", () => {
  //     createMap();
  //   });
  // }, []);

  return <div ref={ref} id="map" style={mapStyle} />;
};

export default Map;
