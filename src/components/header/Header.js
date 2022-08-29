import styled from "styled-components";
import React from "react";

const Header = () => {
  return (
    <Contaner>
      <Wrapper>
        <LogoHolder>
          <Logo>ID</Logo>
          <Dot />
        </LogoHolder>
        <Navigator>
          <Navs>Home</Navs>
          <Navs>About</Navs>
          <Navs>Portfolio</Navs>
          <Navs>Contact</Navs>
        </Navigator>
      </Wrapper>
    </Contaner>
  );
};

export default Header;

const LogoHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40px;
`;
const Dot = styled.div`
  height: 5px;
  width: 5px;
  background-color: orange;
`;
const Navs = styled.div`
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 350ms;
  }
`;
const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
`;
const Navigator = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  width: 85%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Contaner = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  /* background-color: #040e27; */
  color: white;
`;
