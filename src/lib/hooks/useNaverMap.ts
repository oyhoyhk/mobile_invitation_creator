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
    }`;
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
