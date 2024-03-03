import styled from "@emotion/styled";
import { useRef, useState } from "react";
import React from "react";
import { useRecoilValue } from "recoil";
import { galleryListState } from "../../../lib/atom";

export default function Gallery() {
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const imageList = useRecoilValue(galleryListState);

  function handleMouseDown(event: React.MouseEvent<HTMLDivElement>) {
    setStartX(event.pageX - (galleryRef.current?.offsetLeft || 0));
    setScrollLeft(galleryRef.current?.scrollLeft || 0);
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!startX) return;
    const x = event.pageX - (galleryRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (galleryRef.current) galleryRef.current.scrollLeft = scrollLeft - walk;
  }

  function handleMouseUp() {
    setStartX(0);
  }

  return (
    <Container
      ref={galleryRef}
      onMouseDownCapture={handleMouseDown}
      onMouseMoveCapture={handleMouseMove}
      onMouseUpCapture={handleMouseUp}
    >
      {imageList.length > 0 ? (
        <Wrapper>
          {imageList.map((url, idx) => (
            <div>
              <img
                key={idx}
                src={url}
                alt="preview"
                width="150px"
                draggable={false}
              />
            </div>
          ))}
        </Wrapper>
      ) : (
        <Empty />
      )}
    </Container>
  );
}

const Empty = styled.div`
  width: 100%;
  height: 480px;
  border: 1px solid var(--gray-color);
  margin: 0;
  background: white;
  background-image: url("picture.png");
  border-radius: 0.5rem;
  background-repeat: no-repeat;
  background-size: 50px 50px;
  background-position: center center;
`;

const Wrapper = styled.div`
  height: 95%;
  width: 460px;
  transform: rotateZ(-90deg);
  text-align: right;
  user-select: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex-direction: row-reverse;

  & > div {
    width: 200px;
    height: 150px;
    margin: 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & img {
    border-radius: 0.6rem;
    transform: rotateZ(90deg);
    border-radius: 0.5rem;
  }
`;

const Container = styled.div`
  width: 90%;
  height: 500px;
  overflow-x: hidden;
  margin: 0 auto;
  margin-top: 25px;
`;
