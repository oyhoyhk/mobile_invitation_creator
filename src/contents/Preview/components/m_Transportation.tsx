import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { transportationState } from "../../../lib/atom";

const numberMapper = "①②③④⑤⑥⑦⑧⑨⑩";

export default function Transportation() {
  const transportationInfo = useRecoilValue(transportationState);
  return (
    <Container>
      {Object.values(transportationInfo)
        .filter((info) => info.active)
        .map((info) => (
          <TransportationInfo key={info.name}>
            <Title>
              <Icon img={info.icon} />
              {info.name}
            </Title>
            {typeof info.routes === "object" && info.routes.length > 0 ? (
              info.routes.map((route, index) => (
                <Route key={route}>
                  {numberMapper[index]} {route}
                </Route>
              ))
            ) : typeof info.routes === "object" && info.routes.length === 0 ? (
              <Route className="empty">{`${info.name} 교통 편`}</Route>
            ) : (
              ""
            )}
            {typeof info.route === "string" && info.route ? (
              <Route className="textarea">{info.route}</Route>
            ) : typeof info.route === "string" && !info.route ? (
              <Route className="empty">{`${info.name} 찾아오는 길`}</Route>
            ) : (
              ""
            )}
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
  margin-bottom: 15px;
  margin-top: 45px;
`;

const Icon = styled.div<{ img: string }>`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background: url(${(props) => props.img}) no-repeat center / contain;
`;

const Route = styled.div`
  padding-left: 35px;
  margin-bottom: 15px;
  white-space: pre-line;
  line-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &.textarea {
    white-space: pre-line;
  }

  &.empty {
    color: var(--gray-color);
  }
`;

const Container = styled.div`
  margin: 0 auto;
  margin-top: var(--margin-top);
  width: 90%;
  margin-bottom: var(--margin-top);
`;
