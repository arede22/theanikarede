import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
import WorkExperience from './workExperience';
import Clubs from './clubs';
import Courses from './courses';
import Softwares from './softwares';
const { colors, fontSizes } = theme;

// styles and wrappers
const AnchorPoint = styled.a`
  margin: 0 auto;
`;
const StyledWrapper = styled.div`
  margin: 0;

  @media (max-width: 600px) {
    display: inline-block;
  }
`;
const H2Style = styled.h2`
  text-align: center;
  justify-content: center;
  margin: 75px 0px;
`;
const H3Style = styled.h3`
  font-size: ${fontSizes.sm3};
`;
const Box = styled.div`
  background-color: ${colors.halfTransparentGray};
  overflow-x: auto;
  padding: 7.5px 20px 20px;
  width: 70%;
  margin: auto;
  margin-bottom: 30px;
`;
const Rows = styled.ul`
  display: flex;
`;
const Cols = styled(StyledWrapper)`
  flex: 50%;
`;
const ULWrapper = styled.ul`
  color: ${colors.transparentSeaBlue};
`;
const LIWrapper = styled.li`
  color: ${colors.lightGray};
  line-height: 1.5;
`;
const PStyle = styled.p`
  text-align: center;
`;

// export main component
export default function Intro() {
  return (
    <React.Fragment>
      <AnchorPoint name="Intro" id="intro-anchor"></AnchorPoint>
      <StyledWrapper>
        <H2Style>About Me</H2Style>
        <StyledWrapper>
          <Box>
            <H3Style> Major Coursework </H3Style>
            <ULWrapper>
              <LIWrapper> Intro to Computer Science </LIWrapper>
              <LIWrapper> Data Structures & Algorithms </LIWrapper>
              <LIWrapper> Discrete Mathematics and Probability Theory </LIWrapper>
              <LIWrapper> Probability and Random Processes </LIWrapper>
              <LIWrapper> Optimization Models in Engineering </LIWrapper>
              <LIWrapper> (Audited) Natural Language Processing </LIWrapper>
              <LIWrapper> Computer Architecture </LIWrapper>
              <LIWrapper> Designing Information Devices and Systems </LIWrapper>
            </ULWrapper>
            <H3Style> Minor Coursework </H3Style>
            <ULWrapper>
              <LIWrapper> Intro to Linguistics </LIWrapper>
              <LIWrapper> Intro to Syntax and Semantics </LIWrapper>
            </ULWrapper>
          </Box>
          <Box>
            <H3Style> Languages/Software Skills </H3Style>
            <Rows>
              <Cols>
                <LIWrapper> Kotlin </LIWrapper>
                <LIWrapper> JavaScript </LIWrapper>
                <LIWrapper> Python </LIWrapper>
                <LIWrapper> PyTorch </LIWrapper>
                <LIWrapper> C/C++ </LIWrapper>
                <LIWrapper> AutoCAD </LIWrapper>
                <LIWrapper> COMSOL </LIWrapper>
                <LIWrapper> Photoshop </LIWrapper>
              </Cols>
              <Cols>
                <LIWrapper> Swift </LIWrapper>
                <LIWrapper> HTML/CSS </LIWrapper>
                <LIWrapper> Java </LIWrapper>
                <LIWrapper> Tensorflow </LIWrapper>
                <LIWrapper> React </LIWrapper>
                <LIWrapper> MATLAB </LIWrapper>
                <LIWrapper> SolidWorks </LIWrapper>
              </Cols>
            </Rows>
            <H3Style> Skills </H3Style>
            <ULWrapper>
              <LIWrapper> Data visualization and simulation softwares used practically for research </LIWrapper>
              <LIWrapper> Building software tools for use around offices and within academia </LIWrapper>
              <LIWrapper> Planning and designing engineering systems for real-world use in Engineers Without Borders </LIWrapper>
              <LIWrapper> EE and CS hands-on experience and extending course projects beyond the classroom </LIWrapper>
              <LIWrapper> Mathematical skills to understand in-depth background on Machine Learning processes </LIWrapper>
              <LIWrapper> People skills, smooth communication, & true personality </LIWrapper>
            </ULWrapper>
          </Box>
          <Box>
            <H3Style> Clubs </H3Style>
            <ULWrapper>
              <LIWrapper> Engineers Without Borders
                <PStyle>
                  Panama Team for two semesters where we just finished building a water distribution system for a poorly-funded Panamanian community,
                  Starting new project next semester: hoping for a local project toward helping provide for the homeless in Berkeley/SF areas
                </PStyle>
              </LIWrapper>
              <LIWrapper> Computer Science Kickstart
                <PStyle>
                  Intro to computer science week for female pre-freshmen,
                  Participated in the program myself when I entered Berkeley and gave back as a committee member on Industrial Relations
                </PStyle>
              </LIWrapper>
              <LIWrapper> Association of Women in EECS
                <PStyle>
                  Networking events with industry professionals and professors coming in to talk woman-to-woman how to succeed in the tech world
                </PStyle>
              </LIWrapper>
            </ULWrapper>
          </Box>
          <Box>
            <WorkExperience />
          </Box>
        </StyledWrapper>
      </StyledWrapper>
    </React.Fragment>
  )
};
