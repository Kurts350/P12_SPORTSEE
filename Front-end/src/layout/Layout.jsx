import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { SideBar } from "./SideBar";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px 50px;
  overflow-y: auto;
`;

function Layout() {
  return (
    <div>
      <Navbar />
      <LayoutContainer>
        <SideBar />
        <MainContent>
          <Outlet />
        </MainContent>
      </LayoutContainer>
    </div>
  );
}

export { Layout };
