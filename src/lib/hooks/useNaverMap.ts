import { useEffect, useState } from "react";

const CLIENT_ID = 'm0vdg7v93s'

export default function useNaverMap() {
    const [naverMap, setNaverMap] = useState<unknown>(null);
    useEffect(()=>{
        const script = document.createElement("script");
        script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CLIENT_ID}`
        script.async = true;
        document.body.appendChild(script);
    
        script.onload = () => {
          initMap();
        };

        function initMap() {
            setNaverMap(window['naver'] as unknown);
        }
    }, [])

    return naverMap;
}