import ReactDOM from "react-dom/client";
import "./index.css";
import "./fonts/fonts.css";
import { RecoilRoot } from "recoil";
import Preview from "./contents/Preview/Preview";
import Manage from "./contents/Manage/Manage";
import { StyledContainer } from "./components/common";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <StyledContainer>
      <Preview />
      <Manage />
    </StyledContainer>
  </RecoilRoot>
);
