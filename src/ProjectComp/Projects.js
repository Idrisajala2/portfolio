import React from "react";
import styled from "styled-components";
import { AiOutlineDribbble, AiOutlineSearch } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
   .back{
    opacity: ${({ theme }) => (theme.myTheme === "dark" ? "0.3" : "0.1")};
   }
   .front{
    color: ${({ theme }) => (theme.myTheme === "dark" ? "white" : "gray")};
   }
   `;

const Projects = () => {
  return (
    <Container>
      <GlobalStyled />
      <Header>
        <Back className="back">PROJECTS</Back>
        <Front className="front">
          My <span>Works</span>
        </Front>
      </Header>
      <Top>Projects Worked On</Top>
      <Grid>
        <Grid1>
          <Image src="/images/pro1.png" />
          <Cover className="cover">
            <Title>Project name</Title>
            <Tool>Tool</Tool>
            <Icon>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <AiOutlineDribbble />
              </a>
              <a href="#">
                <AiOutlineSearch />
              </a>
            </Icon>
          </Cover>
        </Grid1>
        <Grid2>
          <Image src="/images/pro2.png" />
          <Cover className="cover">
            <Title>Project name</Title>
            <Tool>Tool</Tool>
            <Icon>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <AiOutlineDribbble />
              </a>
              <a href="#">
                <AiOutlineSearch />
              </a>
            </Icon>
          </Cover>
        </Grid2>
        <Grid3>
          <Image src="/images/pro3.png" />
          <Cover className="cover">
            <Title>Project name</Title>
            <Tool>Tool</Tool>
            <Icon>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <AiOutlineDribbble />
              </a>
              <a href="#">
                <AiOutlineSearch />
              </a>
            </Icon>
          </Cover>
        </Grid3>
        <Grid4>
          <Image src="/images/pro4.png" />
          <Cover className="cover">
            <Title>Project name</Title>
            <Tool>Tool</Tool>
            <Icon>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <AiOutlineDribbble />
              </a>
              <a href="#">
                <AiOutlineSearch />
              </a>
            </Icon>
          </Cover>
        </Grid4>
        <Grid5>
          <Image src="/images/pro5.png" />
          <Cover className="cover">
            <Title>Project name</Title>
            <Tool>Tool</Tool>
            <Icon>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <AiOutlineDribbble />
              </a>
              <a href="#">
                <AiOutlineSearch />
              </a>
            </Icon>
          </Cover>
        </Grid5>
        <Grid6>
          <Image src="/images/pro6.png" />
          <Cover className="cover">
            <Title>Project name</Title>
            <Tool>Tool</Tool>
            <Icon>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <AiOutlineDribbble />
              </a>
              <a href="#">
                <AiOutlineSearch />
              </a>
            </Icon>
          </Cover>
        </Grid6>
        <Grid7>
          <Image src="/images/pro7.png" />
          <Cover className="cover">
            <Title>Project name</Title>
            <Tool>Tool</Tool>
            <Icon>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <AiOutlineDribbble />
              </a>
              <a href="#">
                <AiOutlineSearch />
              </a>
            </Icon>
          </Cover>
        </Grid7>
        <Grid8>
          <Image src="/images/pro8.png" />
          <Cover className="cover">
            <Title>Project name</Title>
            <Tool>Tool</Tool>
            <Icon>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <AiOutlineDribbble />
              </a>
              <a href="#">
                <AiOutlineSearch />
              </a>
            </Icon>
          </Cover>
        </Grid8>
      </Grid>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 120vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 70px;
  }
`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Back = styled.div`
  font-weight: 1000;
  font-size: 90px;
  opacity: 0.1;
  @media screen and (max-width: 425px) {
    font-size: 60px;
  }
  @media screen and (max-width: 368px) {
    font-size: 50px;
  }
`;

const Front = styled.div`
  position: absolute;
  color: black;
  font-weight: bold;
  font-size: 30px;
  top: 45px;
  text-transform: uppercase;
  span {
    color: #36c157;
  }
  @media screen and (max-width: 425px) {
    font-size: 25px;
    top: 25px;
  }
  @media screen and (max-width: 368px) {
    font-size: 25px;
    top: 20px;
  }
`;

const Top = styled.div`
  color: #fdbd05;
  font-size: 20px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: visible;
    height: auto;
  }
`;

const Grid1 = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  cursor: pointer;
  position: relative;
  transition: 350ms;
  :hover > .cover {
    top: 10px;
    left: 10px;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    grid-area: 1 / 1 / 3 / 3;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
    height: 250px;
    border-radius: 5px;
    margin-top: 10px;
  }
`;

const Grid2 = styled.div`
  grid-area: 1 / 2 / 4 / 3;
  cursor: pointer;
  position: relative;
  transition: 350ms;
  :hover > .cover {
    top: 10px;
    left: 10px;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    grid-area: 1 / 3 / 4 / 5;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
    height: 250px;
    border-radius: 5px;
    margin-top: 10px;
  }
`;

const Grid3 = styled.div`
  grid-area: 1 / 3 / 3 / 4;
  cursor: pointer;
  position: relative;
  transition: 350ms;
  :hover > .cover {
    top: 10px;
    left: 10px;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    grid-area: 3 / 1 / 5 / 3;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
    height: 250px;
    border-radius: 5px;
    margin-top: 10px;
  }
`;

const Grid4 = styled.div`
  grid-area: 1 / 4 / 4 / 5;
  cursor: pointer;
  position: relative;
  transition: 350ms;
  :hover > .cover {
    top: 10px;
    left: 10px;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    grid-area: 4 / 3 / 6 / 5;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
    height: 250px;
    border-radius: 5px;
    margin-top: 10px;
  }
`;

const Grid5 = styled.div`
  grid-area: 3 / 1 / 6 / 2;
  cursor: pointer;
  position: relative;
  transition: 350ms;
  :hover > .cover {
    top: 10px;
    left: 10px;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    grid-area: 5 / 2 / 9 / 3;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
    height: 250px;
    border-radius: 5px;
    margin-top: 10px;
  }
`;

const Grid6 = styled.div`
  grid-area: 4 / 2 / 6 / 3;
  cursor: pointer;
  position: relative;
  transition: 350ms;
  :hover > .cover {
    top: 10px;
    left: 10px;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    grid-area: 6 / 3 / 10 / 4;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
    height: 250px;
    border-radius: 5px;
    margin-top: 10px;
  }
`;

const Grid7 = styled.div`
  grid-area: 3 / 3 / 6 / 4;
  cursor: pointer;
  position: relative;
  transition: 350ms;
  :hover > .cover {
    top: 10px;
    left: 10px;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    grid-area: 6 / 4 / 9 / 5;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
    height: 250px;
    border-radius: 5px;
    margin-top: 10px;
  }
`;

const Grid8 = styled.div`
  grid-area: 4 / 4 / 6 / 5;
  cursor: pointer;
  position: relative;
  transition: 350ms;
  :hover > .cover {
    top: 10px;
    left: 10px;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    grid-area: 5 / 1 / 9 / 2;
  }

  @media screen and (max-width: 425px) {
    width: 90%;
    height: 250px;
    border-radius: 5px;
    margin-top: 10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 425px) {
    border-radius: 5px;
  }
`;

const Cover = styled.div`
  background: rgba(54, 193, 87, 0.8);
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 350ms;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;
  z-index: 1;
`;

const Title = styled.div`
  font-weight: bold;
  font-family: "Pacifico", cursive;
  font-size: 20px;
  /* text-shadow: 1px 1px black; */
`;

const Tool = styled.div`
  margin-top: 5px;
  font-size: 17px;
  font-weight: 500;
  font-style: italic;
`;

const Icon = styled.div`
  margin-top: 10px;
  /* font-size: 25px; */
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #fdbd05;
  }
`;
