import React from "react";
import styled from "styled-components";
import { GiStack, GiPickle } from "react-icons/gi";
// import { FsS } from "react-icons/fs";

import { FaTag, FaSearch, FaPenNib } from "react-icons/fa";

import { motion } from "framer-motion";
import { AiFillCodepenCircle } from "react-icons/ai";
const HomePage = () => {
  return (
    <Contaner>
      <Wrapper>
        <Toptexholder>
          <MiddileTextholder>
            <LeftSide>
              <Nm>
                Idris
                <br />
                Ajala
              </Nm>
              <Line />
              <Socialholder>
                <SHolder>
                  <Divs>instagram</Divs>
                  <Line1 />
                  <Divs>Linkedin</Divs>
                </SHolder>
                <SHolder>
                  <Divs>dribbble</Divs>
                  <Line1 />
                  <Divs>pinterest</Divs>
                </SHolder>
              </Socialholder>
              <FbuttonHolder>
                <Fbutton>Contact</Fbutton>
              </FbuttonHolder>
            </LeftSide>

            <MiddleImageHolder>
              <MiddlelImg src="/portimage.jpg" />
            </MiddleImageHolder>
            <Toptex>
              <motion.div
              // animate={{ rotate: 180 }}
              // transition={{
              //   repeat: 1,
              //   repeatType: "reverse",
              //   duration: 2,
              // }}
              >
                <SmallText>INTRODUCTION</SmallText>
              </motion.div>
              <motion.div
              // animate={{ x: 15, y: 15, opacity: 2 }}
              // transition={{
              //   delay: 1,
              //   x: { type: "spring", stiffness: 100 },
              //   default: { duration: 5 },
              // }}
              >
                <BigText>
                  {" "}
                  UI/UX Designer,
                  <br /> Full Stack Web <br /> Developers
                </BigText>
                <Smallexttext>
                  optio ante in curae dolorem enim? Cupiditate mus nisi
                  molestiae qui temporibus. Pretium ornare! Vel, ab sodales! Id!
                  Eaque, proin repellat molestias venenatis
                </Smallexttext>
              </motion.div>
            </Toptex>
          </MiddileTextholder>
        </Toptexholder>
        <Centerd>
          <Centerdw>
            <CsmallText>service</CsmallText>
            <Cbigtext>What I Am Great At</Cbigtext>
            <CSmallext>
              optio ante in curae dolorem enim? Cupiditate mus nisi molestiae
              qui temporibus. Pretium ornare! Vel, ab sodales! Id! Eaque, proin
              repellat molestias venenatis
            </CSmallext>
          </Centerdw>
        </Centerd>
        <Hold>
          <div>
            <Box>
              <Icon1 />
              <Type>UI/UX Design</Type>
              <SText>30 projects</SText>
            </Box>
            <Box1>
              <Experience>
                9 <span style={{ marginLeft: "5px" }}>+</span>
              </Experience>
              <div>Years of experience</div>
            </Box1>
          </div>

          {/* Second card */}

          <div>
            <Box>
              <IconTag />
              <Type>Web Development</Type>
              <SText>10 projects</SText>
            </Box>
            <Box1>
              <Experience>
                9 <span style={{ marginLeft: "5px" }}>+</span>
              </Experience>
              <div>Years of experience</div>
            </Box1>
          </div>

          {/* Third card */}

          <div>
            <Box>
              <IconSearch />
              <Type>Web Research</Type>
              <SText>30 projects</SText>
            </Box>
            <Box1>
              <Experience>
                9 <span style={{ marginLeft: "5px" }}>+</span>
              </Experience>
              <div>Years of experience</div>
            </Box1>
          </div>

          {/* fourth card */}
          <div>
            <Box>
              <Icon1 />
              <Type>UI/UX Design</Type>
              <SText>30 projects</SText>
            </Box>
            <Box1>
              <Experience>
                9 <span style={{ marginLeft: "5px" }}>+</span>
              </Experience>
              <div>Years of experience</div>
            </Box1>
          </div>
        </Hold>
      </Wrapper>
    </Contaner>
  );
};

export default HomePage;

// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``
const SText = styled.div`
  font-size: 14px;
`;
const Type = styled.div`
  font-size: 20px;
`;
const Icon3 = styled.div``;
const Icon2 = styled.div``;
const Icon1 = styled(FaPenNib)`
  font-size: 50px;
  color: #fff;
`;
const Centerdw = styled.div`
  width: 50%;
  text-align: center;
  justify-content: center;
`;
const CSmallext = styled.div`
  color: white;
`;
const Cbigtext = styled.div`
  font-size: 25px;
  color: white;
`;
const CsmallText = styled.div`
  color: orange;
`;
const Centerd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: #34353a;
`;

const Smallexttext = styled.div`
  color: white;
  font-size: 13px;
  width: 427px;
`;
const Fbutton = styled.button`
  padding: 8px 22px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid orange;
  color: white;
  :hover {
    cursor: pointer;
    transform: scale(1.04);
    transition: all 350ms;
  }
`;
const FbuttonHolder = styled.div``;
const Nm = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: white;
`;
const MiddileTextholder = styled.div`
  width: 87%;
  height: 500px;
  /* background-color: #040e27; */
  /* background-color: green; */

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;
const Divs = styled.div`
  font-size: 20px;
`;
const Line1 = styled.div`
  height: 12px;
  width: 1px;
  background-color: white;
  margin: 5px 10px;
`;
const SHolder = styled.div`
  display: flex;
  width: 250px;
  height: 30px;
  color: white;

  div {
    font-size: 15px;
  }
`;

const Socialholder = styled.div`
  font-size: 10px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const Line = styled.div`
  height: 2px;
  width: 30px;
  background-color: orange;
  margin-top: 15px;
`;

const MiddlelImg = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;
const MiddleImageHolder = styled.div`
  height: 350px;
  /* width: 520px; */
  flex: 1.5;
  object-fit: cover;
  /* background-color: blue; */
`;
const LeftSide = styled.div`
  height: 370px;
  /* width: 120px; */

  flex: 0.4;
  /* background-color: yellow; */
  div {
    /* font-size: 25px;
    color: white;
    font-weight: 700; */
  }
`;
const Toptexholder = styled.div`
  width: 100%;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.9);
  /* background-color: green; */

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

const Ttest = styled.div``;
const Testimoies = styled.div``;
const About = styled.div`
  height: 420px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Ap = styled.div`
  color: gray;
`;
const Atex = styled.div`
  font-size: 25px;
  font-weight: 600;
`;
const Icon = styled(GiStack)`
  height: 100px;
  width: 100px;
  color: silver;
`;
const Abox = styled.div`
  height: 350px;
  width: 350px;
`;
const Div = styled.div`
  font-size: 25px;
`;
const More = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #040e27;
  color: white;
  :hover {
    cursor: pointer;
    transform: scale(1);
    transition: all 350ms;
  }
`;
const Box2 = styled.div`
  /* background-image: url("/good.png"); */
  height: 350px;
  width: 450px;
  /* background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom; */
`;
const IconSearch = styled(FaSearch)`
  font-size: 50px;
`;
const IconTag = styled(FaTag)`
  font-size: 50px;
`;

const Box1 = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  /* div {
    font-size: 12px;
  } */
`;
const Hold = styled.div`
  padding: 0 20px;
  /* background-color: red; */
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

const Experience = styled.div`
  color: #e1a139;
  font-weight: 600;
`;
const Box = styled.div`
  background-color: #2e2f34;
  padding: 20px;
  color: #fff;
  margin-bottom: 30px;
  height: 150px;
  line-height: 2;
  width: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-repeat: no-repeat;
  background-size: contain;
  background-position: center; */
  /* background-image: url("/ost.jpg"); */
`;
const Seconbox = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.8);
`;
const BigText = styled.div`
  color: white;
  font-size: 30px;
  width: 300px;
  font-weight: 600;
`;
const SmallText = styled.div`
  font-size: 10px;
  color: orange;
  font-weight: 600;
  height: 25px;
`;
const Toptex = styled.div`
  /* width: 350px; */
  /* background-color: black; */
  flex: 1;
  height: 350px;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 85%;
  background-color: #34353a;
  min-height: 90vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Contaner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
