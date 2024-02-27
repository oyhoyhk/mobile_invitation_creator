import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import Preview from "./contents/Preview/Preview";
import Manage from "./contents/Manage/Manage";
import { StyledContainer } from "./components/common";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <StyledContainer>
      <Preview />
      <Manage />
    </StyledContainer>
  </RecoilRoot>
);