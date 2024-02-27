import styled from "@emotion/styled";
import { useRef, useState } from "react";

export default function Gallery() {
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

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
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Wrapper>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  width: 1860px;
  height: 95%;
  display: flex;

  & > div {
    width: 300px;
    height: 100%;
    background: gray;
    border-radius: 0.5rem;
    margin-right: 10px;
    display: inline-block;
    color: white;
    font-size: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 90%;
  height: 450px;
  overflow-x: hidden;
  margin: 0 auto;
  margin-top: 25px;
`;
