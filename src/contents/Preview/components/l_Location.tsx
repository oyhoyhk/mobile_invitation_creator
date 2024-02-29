import styled from "@emotion/styled";
import { CustomDivider } from "../Preview";
import useNaverMap from "../../../lib/hooks/useNaverMap";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { locationState } from "../../../lib/atom";
import axios from "axios";

const buttons = [
  {
    img: "kakao.png",
    name: "카카오내비",
  },
  {
    img: "tmap.png",
    name: "티맵",
  },
  {
    img: "naver_map.png",
    name: "네이버맵",
  },
];

export default function Location() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const naver: any = useNaverMap();
  const locationInfo = useRecoilValue(locationState);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!naver || !ref.current) return;

    // const map = new naver.maps.Map(ref.current, {
    //   center: new naver.maps.LatLng(37.5665, 126.978),
    //   zoom: 10,
    // });

    // console.log(naver);

    // naver.maps?.Service?.geocode(
    //   {
    //     query: locationInfo.address,
    //   },
    //   function (status, response) {
    //     if (status === naver.maps.Service.Status.ERROR) {
    //       return alert("Something Wrong!");
    //     }
    //     if (response.v2.meta.totalCount === 0) {
    //       return alert("totalCount" + response.v2.meta.totalCount);
    //     }
    //     console.log(status, response);
    //   }
    // );
  }, [naver, locationInfo]);

  useEffect(() => {
    if (!naver || !ref.current || !locationInfo.address) return;
    axios
      .get(
        `/map-geocode/v2/geocode?query=${encodeURIComponent(
          locationInfo.address
        )}`,
        {
          headers: {
            "X-NCP-APIGW-API-KEY-ID": import.meta.env.VITE_CLIENT_ID,
            "X-NCP-APIGW-API-KEY": import.meta.env.VITE_CLIENT_SECRET,
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  }, [naver, locationInfo]);

  return (
    <Container>
      <CustomDivider />
      <Text className={locationInfo.detail ? "" : "empty"}>
        {locationInfo.detail || "ex) 로즈레터 호텔 10층 그랜드홀"}
      </Text>
      <CustomDivider style={{ marginTop: "25px" }} />
      <Text className={locationInfo.address ? "" : "empty"}>
        {locationInfo.address || "ex) 서울시 서초구 로즈로"}
      </Text>
      <Text
        className={locationInfo.phone ? "" : "empty"}
        style={{ marginTop: "10px" }}
      >
        {"Tel. " + locationInfo.phone || "ex) Tel. 02-000-000"}
      </Text>
      <MapContainer ref={ref} />
      <ButtonContainer>
        {buttons.map((info) => (
          <Button key={info.name}>
            <Icon img={info.img} />
            <span>{info.name}</span>
          </Button>
        ))}
      </ButtonContainer>
    </Container>
  );
}

const ButtonContainer = styled.div`
  width: 90%;
  height: 40px;
  border-radius: 0.8rem;
  border: 1px solid rgba(129, 122, 94, 0.3);
  background: #f5e3e2;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #817a5e;
  font-size: 0.9rem;
  position: relative;

  &:first-of-type,
  &:nth-of-type(2) {
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: -12px;
      width: 1px;
      height: 20px;
      border-right: 1px solid rgba(129, 122, 94, 0.3);
    }
  }
`;

const Icon = styled.div<{ img: string }>`
  width: 17px;
  height: 17px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: 17px 17px;
  background-position: center 0.5px;
  background-repeat: no-repeat;
  margin-right: 8px;
`;

const MapContainer = styled.div`
  width: 90%;
  height: 320px;
  margin: 0 auto;
  margin-top: 25px;
  background: lightgray;
  border-radius: 0.3rem;
  border: 1px solid lightgray;
`;
const Text = styled.div`
  text-align: center;
  margin-top: 25px;

  &.empty {
    color: var(--gray-color);
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 25px;
`;
