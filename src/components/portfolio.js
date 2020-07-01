import React from 'react';
import styled from 'styled-components';
import { theme, media } from '../styles';
import Modal from './modal';
const { colors, fonts, fontSizes, hrefs, imgSrcs } = theme;
// Coursework
// Skills
// Softwares and comfortability
// Currently exploring pet projects

// flexbox: calhacks.org/flexbox
// position: relative; --> to make B move relative to A and C divs
// material design, bootstrap, css tricks, mdn web docs

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 0;
`;
const H2Style = styled.h2`
  text-align: center;
  justify-content: center;
  font-size: ${fontSizes.med1};
  margin: 75px 0px;
  text-shadow: 2px 2px black;
  color: white;
  font-family: ${fonts.Lucida};
`;
const H3Style = styled.h3`
  color: white;
  font-family: ${fonts.Lucida};
`;
const TwoGrid = styled.div`
  display: grid;
  grid-template-columns: 610px 610px;
  grid-gap: 20px;
  overflow-x: auto;
  margin: 0px 60px;

  @media ${media.laptop} {
    max-width: 800px;
  }

  @media ${media.desktop} {
    max-width: 1400px;
  }
`;
const Box = styled.div`
  background-color: ${colors.halfTransparentGray};
  border-radius: 5px;
  overflow-x: auto;
  padding: 7.5px 20px 20px;
`;
const ULWrapper = styled.ul`
  color: white;
  font-family: ${fonts.Lucida};
`;
const LIWrapper = styled.li`
  color: white;
  font-family: ${fonts.Lucida};
  margin: 5px 0px;
`;
const PStyle = styled.p`
  color: white;
  font-family: ${fonts.Lucida};
  text-align: center;
`;
const Link = styled.a`
  color: white;
  font-family: ${fonts.Lucida};
  text-decoration: none;

  &:hover {
    color: ${colors.skyBlue};
  }

`;
const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

// export main component
export default function Portfolio() {
  return (
    <StyledWrapper>
      <a name="Portfolio"></a>
      <H2Style> Portfolio </H2Style>
      <TwoGrid>
        <Box>
          <H3Style> Class projects and extensions </H3Style>
          <ULWrapper>
            <LIWrapper> Voice-Activated Car -- Designing Information Devices/Systems Trained with PCA </LIWrapper>

              <Modal trigger="car" img={imgSrcs.car} pop="popCar" content="img01" />
            <LIWrapper> Mock GoogleMaps Berkeley-Localized -- Map Rastering, Autocomplete and Search, and Navigation </LIWrapper>
              <Modal trigger="map" img={imgSrcs.map} pop="popMap" content="img02" />

            <LIWrapper> Pixel Art Game -- Randomized Room Generation and Increasing Difficulty to Boss Level: </LIWrapper>
              <SpaceBetween>
                <Modal trigger="randRooms" img={imgSrcs.randRooms} pop="popRandRooms" content="img03" />

                <Modal trigger="boss" img={imgSrcs.boss} pop="popBoss" content="img04" />
              </SpaceBetween>
              <PStyle>
                <Link href={hrefs.gameVid} target="_blank"> Click here for DEMO </Link>
              </PStyle>
          </ULWrapper>
        </Box>
        <Box>
          <H3Style> Personal Projects </H3Style>
          <ULWrapper>
            <LIWrapper> Current projects:
              <ULWrapper>
                <LIWrapper> Personal website built with React and Next.js, allows playing with graphic design </LIWrapper>
                <LIWrapper> Safety app around Berkeley for students built using Swift </LIWrapper>
                <LIWrapper> Learning graphic design via Photoshop, Illustrator, and Maya </LIWrapper>
              </ULWrapper>
            </LIWrapper>
            <LIWrapper> Projected projects:
              <ULWrapper>
                <LIWrapper> Modifying voice-activated car built last semester to be hooked up to bluetooth and Wi-Fi </LIWrapper>
                <LIWrapper> Original pixel art Gameboy game built from scratch </LIWrapper>
                <LIWrapper> Image analysis to interpret and translate language with NLP using AI/ML </LIWrapper>
              </ULWrapper>
            </LIWrapper>
          </ULWrapper>
        </Box>
      </TwoGrid>
    </StyledWrapper>
  )
};
