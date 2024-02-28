import styled from "@emotion/styled";

const numberMapper = "①②③④⑤⑥⑦⑧⑨⑩";

interface ITransportation {
  [key: string]: {
    name: string;
    icon: string;
    routes?: string[];
    route?: string;
  };
}

const data: ITransportation = {
  bus: {
    name: `버   스`,
    icon: "bus.png",
    routes: ["마을버스 용산03", "간선버스 110A, 110B, 421, 740, N72, N75"],
  },
  subway: {
    name: "지하철",
    icon: "subway.png",
    routes: [
      "6호선 : 삼각지역 12번 출구 (도보 3분)",
      "4호선 : 삼각지역 1번 출국 (도보 5분)",
      "1호선 : 남영역 1번 출구 (도보 7분)",
    ],
  },
  car: {
    name: "자가용",
    icon: "car.png",
    route: `전쟁기념관내 지상, 지하 주차 가능
            지상, 지하 주차 1000대 가능`,
  },
  tourBus: {
    name: "전세버스",
    icon: "bus.png",
    route: "6:00 대전역 출발",
  },
};

export default function Transportation() {
  return (
    <Container>
      {Object.values(data).map((info) => (
        <TransportationInfo key={info.name}>
          <Title>
            <Icon img={info.icon} />
            {info.name}
          </Title>
          {info.routes &&
            info.routes.map((route, index) => (
              <Route key={route}>
                {numberMapper[index]} {route}
              </Route>
            ))}
          {info.route && <Route>{info.route}</Route>}
        </TransportationInfo>
      ))}
    </Container>
  );
}

const TransportationInfo = styled.div`
  text-align: left;
  font-size: 0.9rem;
`;

const Title = styled.div`
  font-weight: bold;
  white-space: pre-line;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 20px;
`;

const Icon = styled.div<{ img: string }>`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background: url(${(props) => props.img}) no-repeat center / contain;
`;

const Route = styled.div`
  padding-left: 35px;
  margin-bottom: 5px;
  white-space: pre-line;
`;

const Container = styled.div`
  margin: 0 auto;
  margin-top: var(--margin-top);
  width: 90%;
  margin-bottom: var(--margin-top);
`;
