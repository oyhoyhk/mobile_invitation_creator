/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

declare global {
  interface Window {
    naver: unknown;
  }
}

export default function useNaverMap() {
  const [naverMap, setNaverMap] = useState<unknown>(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${
      import.meta.env.VITE_CLIENT_ID
    }&submodules=geocoder`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      initMap();
    };

    function initMap() {
      setNaverMap(window.naver || null);
    }
  }, []);

  return naverMap;
}

export function searchAddressToCoordinate(address: string, map: any) {
  const naver = window.naver as any;
  if (!naver) return;
  console.log(naver);
  const infoWindow = new naver.maps.InfoWindow({
    anchorSkew: true,
  });
  naver.maps.Service.geocode(
    {
      query: address,
    },
    function (status: any, response: any) {
      if (status === naver.maps.Service.Status.ERROR) {
        return alert("Something Wrong!");
      }

      if (response.v2.meta.totalCount === 0) {
        return alert("totalCount" + response.v2.meta.totalCount);
      }

      console.log(status, response);

      const htmlAddresses = [],
        item = response.v2.addresses[0],
        point = new naver.maps.Point(item.x, item.y);

      if (item.roadAddress) {
        htmlAddresses.push("[도로명 주소] " + item.roadAddress);
      }

      if (item.jibunAddress) {
        htmlAddresses.push("[지번 주소] " + item.jibunAddress);
      }

      if (item.englishAddress) {
        htmlAddresses.push("[영문명 주소] " + item.englishAddress);
      }

      infoWindow.setContent(
        [
          '<div style="padding:10px;min-width:200px;line-height:150%;">',
          '<h4 style="margin-top:5px;">검색 주소 : ' + address + "</h4><br />",
          htmlAddresses.join("<br />"),
          "</div>",
        ].join("\n")
      );

      map.setCenter(point);
      infoWindow.open(map, point);
    }
  );
}
