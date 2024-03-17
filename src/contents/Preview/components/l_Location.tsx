/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "@emotion/styled";
import { CustomDivider } from "../Preview";
import useNaverMap from "../../../lib/hooks/useNaverMap";
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  buttonColorState,
  latlngState,
  locationState,
} from "../../../lib/atom";
import React from "react";

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
  const setLatLng = useSetRecoilState(latlngState);
  const ref = useRef<HTMLDivElement>(null);
  const [roadAddress, setRoadAddress] = React.useState("");
  const buttonColor = useRecoilValue(buttonColorState);

  useEffect(() => {
    if (!naver || !ref.current || !locationInfo.address) return;
    naver.maps.Service.geocode(
      {
        query: locationInfo.address,
      },
      function (status: any, response: any) {
        if (status === naver.maps.Service.Status.ERROR) {
          return alert("Something Wrong!");
        }
        if (response.v2.meta.totalCount === 0) {
          return alert("totalCount" + response.v2.meta.totalCount);
        }

        const [address] = response.v2.addresses;
        const [x, y] = [address.x, address.y];
        setRoadAddress(address.roadAddress);
        setLatLng(() => ({ x, y }));

        const map = new naver.maps.Map(ref.current, {
          center: new naver.maps.LatLng(y, x),
          zoom: 17,
        });

        new naver.maps.Marker({
          position: new naver.maps.LatLng(y, x),
          map: map,
        });
      }
    );
  }, [naver, locationInfo]);

  return (
    <Container>
      <CustomDivider />
      <Text className={locationInfo.detail ? "" : "empty"}>
        {locationInfo.detail || "ex) 로즈레터 호텔 10층 그랜드홀"}
      </Text>
      <CustomDivider style={{ marginTop: "25px" }} />
      <Text className={locationInfo.address ? "" : "empty"}>
        {roadAddress || "ex) 서울시 서초구 로즈로"}
      </Text>
      <Text
        className={locationInfo.phone ? "" : "empty"}
        style={{ marginTop: "10px" }}
      >
        {"Tel. " + (locationInfo.phone || "ex) 02-000-000")}
      </Text>
      <MapContainer ref={ref} />
      <ButtonContainer color={buttonColor}>
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

const ButtonContainer = styled.div<{ color: string }>`
  width: 90%;
  height: 40px;
  border-radius: 0.8rem;
  border: 1px solid rgba(129, 122, 94, 0.3);
  background: ${({ color }) => color};
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
  margin: 0 auto;
  margin-top: 25px;
  width: 80%;
  word-break: keep-all;

  &.empty {
    color: var(--gray-color);
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 25px;
`;
