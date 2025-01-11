import React, { useState, useEffect, useCallback } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const MapPage: React.FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getGeolocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          setError("User denied Geolocation");
        } else {
          setError(err.message);
        }
      }
    );
  }, []);

  const requestGeolocation = useCallback(() => {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "granted") {
        getGeolocation();
      } else if (result.state === "prompt") {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (err) => {
            if (err.code === err.PERMISSION_DENIED) {
              setError("User denied Geolocation");
            } else {
              setError(err.message);
            }
          }
        );
      } else if (result.state === "denied") {
        setError("Geolocation permission denied");
      }
    });
  }, [getGeolocation]);

  useEffect(() => {
    requestGeolocation();
  }, [requestGeolocation]);

  useEffect(() => {
    if (latitude && longitude) {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&autoload=false`;
      script.onload = () => {
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          if (container) {
            const options = {
              center: new window.kakao.maps.LatLng(latitude, longitude),
              level: 3,
            };
            const map = new window.kakao.maps.Map(container, options);
            const markerPosition = new window.kakao.maps.LatLng(
              latitude,
              longitude
            );
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
            });
            marker.setMap(map);
          } else {
            setError("Map container not found");
          }
        });
      };
      document.head.appendChild(script);
    }
  }, [latitude, longitude]);

  return (
    <div>
      <h1>GPS Test</h1>
      <button onClick={requestGeolocation}>Request Geolocation</button>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <div id="map" style={{ height: "400px", width: "100%" }}></div>
        </div>
      )}
    </div>
  );
};

export default MapPage;
