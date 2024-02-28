import { useRecoilState } from "recoil";
import { SetContainer } from "../../../components/common";
import { transportationState } from "../../../lib/atom";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { useCallback } from "react";

export default function SetTransportation() {
  const [transportation, setTransportation] =
    useRecoilState(transportationState);

  const handleAddTransportation = (element: HTMLElement, key: string) => {
    const input = (element.parentElement as HTMLElement).querySelector(
      `#${key}`
    ) as HTMLInputElement;

    if (!input.value) return;
    setTransportation((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        routes: [...(prev[key].routes as string[]), input.value],
      },
    }));
    input.value = "";
  };

  const handleDeleteTransportation = (key: string, index: number) => {
    setTransportation((prev) => {
      const newRoutes = [...(prev[key].routes as string[])];
      newRoutes.splice(index, 1);
      return {
        ...prev,
        [key]: {
          ...prev[key],
          routes: newRoutes,
        },
      };
    });
  };

  const handlePressEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    key: string
  ) => {
    if (e.key === "Enter") {
      handleAddTransportation(e.currentTarget, key);
    }
  };

  const handleTransportationChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTransportation((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          route: e.target.value,
        },
      }));
    },
    [setTransportation]
  );

  return (
    <SetContainer style={{ marginTop: "50px", border: "none" }}>
      <legend>교통수단 설정</legend>
      {Object.keys(transportation).map((key) => (
        <Contents key={key}>
          <h3>{transportation[key].name}</h3>
          {transportation[key].routes &&
            transportation[key].routes?.map((route, index) => (
              <Route key={index}>
                <span>{route}</span>
                <Button
                  variant="outlined"
                  sx={{ minWidth: "25px" }}
                  onClick={() => handleDeleteTransportation(key, index)}
                >
                  ×
                </Button>
              </Route>
            ))}
          {typeof transportation[key].routes === "object" && (
            <InputContainer>
              <input
                id={key}
                placeholder={`${transportation[key].name} 추가`}
                onKeyPress={(e) => handlePressEnter(e, key)}
              />
              <Button
                variant="contained"
                sx={{ minWidth: "25px" }}
                onClick={(e) =>
                  handleAddTransportation(e.target as HTMLElement, key)
                }
              >
                +
              </Button>
            </InputContainer>
          )}
          {typeof transportation[key].route === "string" && (
            <TextArea
              placeholder={`${transportation[key].name} 찾아오는 길`}
              style={{
                height:
                  ((transportation[key].route as string).split("\n").length ||
                    1) *
                    24 +
                  20 +
                  "px",
              }}
              name={key}
              value={transportation[key].route as string}
              onChange={handleTransportationChange}
            />
          )}
        </Contents>
      ))}
    </SetContainer>
  );
}

const TextArea = styled.textarea`
  resize: none;
  border: none;
  border-bottom: 1px solid var(--gray-color);
  width: 100%;
  outline: none;
  padding: 10px 15px;
  font-size: 1rem;
  line-height: 1.5rem;
  white-space: pre-line;
  &:focus {
    border-bottom: 1px solid #1976d2;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > input {
    flex: 1;
    padding: 5px;
    margin-right: 15px;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--gray-color);
    height: 32px;
    &:focus {
      border-bottom: 1px solid #1976d2;
    }
  }

  & > span {
    font-size: 1.25rem;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const Route = styled.div`
  width: 100%;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span:first-of-type {
    flex: 1;
    border-bottom: 1px solid var(--gray-color);
    margin-right: 15px;
    height: 32px;
    display: flex;
    align-items: center;
  }

  & > .close {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Contents = styled.div`
  margin-left: 50px;
  & > h3 {
    margin-top: 15px;
    margin-bottom: 5px;
  }
`;
