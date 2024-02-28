import styled from "@emotion/styled";
import { SetContainer } from "../../../components/common";
import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { familyState } from "../../../lib/atom";

export default function SetFamily() {
  const [info, setInfo] = useRecoilState(familyState);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) return;
    const [target, parent] = e.target.name.split("_") as [
      "groom" | "bride",
      "father" | "mother"
    ];
    setInfo((prev) => ({
      ...prev,
      [target]: {
        ...prev[target],
        [parent]: {
          ...prev[target][parent],
          name: e.target.value,
        },
      },
    }));
  };

  const handleAliveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [target, parent] = e.target.name.split("_") as [
      "groom" | "bride",
      "father" | "mother"
    ];
    setInfo((prev) => ({
      ...prev,
      [target]: {
        ...prev[target],
        [parent]: {
          ...prev[target][parent],
          alive: prev[target][parent].alive ? false : true,
        },
      },
    }));
  };

  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [target] = e.target.name.split("_") as ["groom" | "bride"];
    setInfo((prev) => ({
      ...prev,
      [target]: {
        ...prev[target],
        position: e.target.value,
      },
    }));
  };

  return (
    <SetContainer
      style={{ marginTop: "30px", paddingBottom: "25px", border: "none" }}
    >
      <legend>가족 정보 설정</legend>
      <InputContainer>
        <label style={{ fontWeight: "bold" }}>신랑</label>
        <CustomTextField
          label="부"
          variant="standard"
          id="groom_father_name"
          name="groom_father_name"
          style={{ marginLeft: "20px", width: "120px" }}
          onChange={handleNameChange}
          value={info.groom.father.name}
        />
        <label htmlFor="groom_father_alive">별세</label>
        <input
          type="checkbox"
          id="groom_father_alive"
          name="groom_father_alive"
          onChange={handleAliveChange}
          checked={!info.groom.father.alive}
        />
        <CustomTextField
          label="모"
          variant="standard"
          id="groom_mother_name"
          name="groom_mother_name"
          style={{ marginLeft: "20px", width: "120px" }}
          onChange={handleNameChange}
          value={info.groom.mother.name}
        />
        <label htmlFor="groom_mother_alive">별세</label>
        <input
          type="checkbox"
          id="groom_mother_alive"
          name="groom_mother_alive"
          onChange={handleAliveChange}
          checked={!info.groom.mother.alive}
        />
        <CustomTextField
          label="호칭"
          variant="standard"
          style={{ marginLeft: "20px", width: "120px" }}
          id="groom_position"
          name="groom_position"
          onChange={handlePositionChange}
          value={info.groom.position}
        />
      </InputContainer>
      <InputContainer>
        <label style={{ fontWeight: "bold" }}>신부</label>
        <CustomTextField
          label="부"
          variant="standard"
          style={{ marginLeft: "20px", width: "120px" }}
          id="bride_father_name"
          name="bride_father_name"
          onChange={handleNameChange}
          value={info.bride.father.name}
        />
        <label htmlFor="bride_father_alive">별세</label>
        <input
          type="checkbox"
          id="bride_father_alive"
          name="bride_father_alive"
          onChange={handleAliveChange}
          checked={!info.bride.father.alive}
        />
        <CustomTextField
          label="모"
          variant="standard"
          style={{ marginLeft: "20px", width: "120px" }}
          id="bride_mother_name"
          name="bride_mother_name"
          onChange={handleNameChange}
          value={info.bride.mother.name}
        />
        <label htmlFor="bride_mother_alive">별세</label>
        <input
          type="checkbox"
          id="bride_mother_alive"
          name="bride_mother_alive"
          onChange={handleAliveChange}
          checked={!info.bride.mother.alive}
        />
        <CustomTextField
          label="호칭"
          variant="standard"
          style={{ marginLeft: "20px", width: "120px" }}
          id="bride_position"
          name="bride_position"
          onChange={handlePositionChange}
          value={info.bride.position}
        />
      </InputContainer>
    </SetContainer>
  );
}

const CustomTextField = styled(TextField)`
  & input {
    text-align: center;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > label {
    padding-top: 20px;
    margin-left: 20px;
  }

  & > input[type="checkbox"] {
    margin-right: 30px;
    margin-top: 15px;
  }
`;
