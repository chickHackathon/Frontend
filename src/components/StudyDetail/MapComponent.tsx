import React, { useEffect } from 'react';
import { middlePoint, locations } from '../../data/locationsData';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapComponent: React.FC<{ setCafes: (cafes: any[]) => void }> = ({ setCafes }) => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&autoload=false&libraries=services`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        if (container) {
          const options = {
            center: new window.kakao.maps.LatLng(middlePoint.lat, middlePoint.lng),
            level: 6,
          };

          const map = new window.kakao.maps.Map(container, options);

          const zoomControl = new window.kakao.maps.ZoomControl();
          map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

          const bounds = new window.kakao.maps.LatLngBounds();

          const createCustomMarker = (
              position: any,
              title: string,
              iconUrl: string,
              toggleInfoWindow: () => void
          ) => {
            const imageSize = new window.kakao.maps.Size(40, 40); // 마커 이미지 크기
            const markerImage = new window.kakao.maps.MarkerImage(iconUrl, imageSize);

            const marker = new window.kakao.maps.Marker({
              position: position,
              image: markerImage,
            });

            window.kakao.maps.event.addListener(marker, 'click', () => {
              toggleInfoWindow();
            });

            return marker;
          };

          const middlePosition = new window.kakao.maps.LatLng(middlePoint.lat, middlePoint.lng);
          const middleInfoWindow = new window.kakao.maps.InfoWindow({
            content: `<div style="padding:5px; font-weight: bold;">${middlePoint.title}</div>`,
          });
          let middleInfoWindowVisible = false;

          const middleMarker = createCustomMarker(
              middlePosition,
              middlePoint.title,
              'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
              () => {
                if (middleInfoWindowVisible) {
                  middleInfoWindow.close();
                } else {
                  middleInfoWindow.open(map, middleMarker);
                }
                middleInfoWindowVisible = !middleInfoWindowVisible;
              }
          );
          middleMarker.setMap(map);
          bounds.extend(middlePosition);

          locations.forEach((location) => {
            const position = new window.kakao.maps.LatLng(location.lat, location.lng);
            const infoWindow = new window.kakao.maps.InfoWindow({
              content: `<div style="padding:5px;">${location.title}</div>`,
            });
            let infoWindowVisible = false;

            const marker = createCustomMarker(
                position,
                location.title,
                'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
                () => {
                  if (infoWindowVisible) {
                    infoWindow.close();
                  } else {
                    infoWindow.open(map, marker);
                  }
                  infoWindowVisible = !infoWindowVisible;
                }
            );
            marker.setMap(map);
            bounds.extend(position);

            const linePath = [middlePosition, position];
            const polyline = new window.kakao.maps.Polyline({
              path: linePath,
              strokeWeight: 3,
              strokeColor: '#1E90FF',
              strokeOpacity: 0.7,
              strokeStyle: 'solid',
            });
            polyline.setMap(map);
          });

          map.setBounds(bounds);

          const circle = new window.kakao.maps.Circle({
            center: middlePosition,
            radius: 1000,
            strokeWeight: 2,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeStyle: 'solid',
            fillColor: '#FFCCCC',
            fillOpacity: 0.4,
          });
          circle.setMap(map);

          const ps = new window.kakao.maps.services.Places();
          ps.keywordSearch(
              '카페',
              (data: any[], status: string) => {
                if (status === window.kakao.maps.services.Status.OK) {
                  setCafes(data);
                } else {
                  console.error('검색 실패:', status);
                }
              },
              {
                location: new window.kakao.maps.LatLng(middlePoint.lat, middlePoint.lng),
                radius: 1000,
              }
          );
        }
      });
    };
    document.head.appendChild(script);
  }, [setCafes]);

  return (
      <div>
        <h1>중간 지점 기준 카페 목록</h1>
        <div id="map" style={{ width: '100%', height: '500px' }}></div>
      </div>
  );
};

export default MapComponent;