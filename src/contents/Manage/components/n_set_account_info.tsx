/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, TextField } from "@mui/material";
import { SetContainer } from "../../../components/common";
import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { accountInfoState } from "../../../lib/atom";

export default function SetAccountInfo() {
  const placeholder = `ex) 참석이 어려우신 분들을 위해
    계좌번호를 기재하였습니다.
    너그러운 마음으로 양해 부탁드립니다.`;
  const [height, setHeight] = useState(3);
  const [accountInfo, setAccountInfo] = useRecoilState(accountInfoState);

  const handleMessageChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAccountInfo((prev) => ({ ...prev, message: e.target.value }));
      if (e.target.value === "") {
        setHeight(() => 3);
      } else {
        setHeight(() => e.target.value.split("\n").length);
      }
    },
    [setAccountInfo]
  );

  const handleAddAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const type = ((e.target as HTMLFormElement).elements as any)
      .account as HTMLInputElement;
    const bank = ((e.target as HTMLFormElement).elements as any)
      .bank as HTMLInputElement;
    const name = ((e.target as HTMLFormElement).elements as any)
      .name as HTMLInputElement;
    const accountNumber = ((e.target as HTMLFormElement).elements as any)
      .accountNumber as HTMLInputElement;

    if (!type.value || !bank.value || !name.value || !accountNumber.value) {
      alert("모든 정보를 입력해주세요.");
      return;
    }

    setAccountInfo((prev) => ({
      ...prev,
      list: [
        ...prev.list,
        {
          type: type.value as "groom" | "bride",
          bank: bank.value,
          accountNumber: accountNumber.value,
          accountHolder: name.value,
        },
      ],
    }));

    type.value = "";
    bank.value = "";
    name.value = "";
    accountNumber.value = "";
  };

  const handleDeleteAccount = useCallback(
    (index: number) => {
      setAccountInfo((prev) => {
        const newList = [...prev.list];
        newList.splice(index, 1);
        return {
          ...prev,
          list: newList,
        };
      });
    },
    [setAccountInfo]
  );

  return (
    <SetContainer
      style={{
        border: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "25px",
      }}
    >
      <legend>계좌 정보 설정</legend>
      <TextArea
        placeholder={placeholder}
        style={{
          height: `${
            accountInfo.message ? height * 35 + 30 : height * 35 + 30
          }px`,
        }}
        value={accountInfo.message}
        onChange={handleMessageChange}
      />
      <AccountForm onSubmit={handleAddAccount}>
        <LabelContainer>
          <label htmlFor="account_groom">신랑</label>
          <input type="radio" name="account" id="account_groom" value="groom" />
        </LabelContainer>
        <LabelContainer>
          <label htmlFor="account_bride">신부</label>
          <input type="radio" name="account" id="account_bride" value="bride" />
        </LabelContainer>
        <TextField
          label="은행명"
          variant="standard"
          name="bank"
          sx={{ width: "90px" }}
        />
        <TextField
          label="받는 사람"
          variant="standard"
          name="name"
          sx={{ width: "120px" }}
        />
        <TextField
          label="계좌번호"
          variant="standard"
          name="accountNumber"
          sx={{ width: "200px" }}
        />
        <Button
          type="submit"
          sx={{
            marginTop: "10px",
            minWidth: "25px",
          }}
          variant="contained"
        >
          +
        </Button>
      </AccountForm>
      <AccountContainer>
        {accountInfo.list.map((account, index) => (
          <AccountData
            key={index}
            style={{
              background: account.type === "bride" ? "#feecf0" : "#cbf0ff",
            }}
          >
            <div>
              <div>
                <span>{account.bank}</span>
                <span className="accountHolder">{account.accountHolder}</span>
              </div>
              <div onClick={() => handleDeleteAccount(index)} className="close">
                ×
              </div>
            </div>
            <div>{account.accountNumber}</div>
          </AccountData>
        ))}
      </AccountContainer>
    </SetContainer>
  );
}

const AccountData = styled.div`
  width: 32%;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  flex-direction: column;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .accountHolder {
    margin-left: 10px;
    font-weight: bold;
  }

  & .close {
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

const AccountContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: auto;
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const AccountForm = styled.form`
  width: 100%;
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
  & input {
    text-align: center;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  & > label {
    margin-right: 10px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  resize: none;
  font-size: 1rem;
  line-height: 2.2rem;
  font-family: inherit;
  text-align: center;
  border: none;
  border-bottom: 1px solid var(--gray-color);

  &:focus {
    outline: none;
    border-bottom: 1px solid #1976d2;
  }
`;
