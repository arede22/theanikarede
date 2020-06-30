import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
const { colors, fonts } = theme;

// styles and wrappers
const StyledWrapper = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
  margin: 30px 15px 240px;
`;
const H2Style = styled.h2`
  font-size: 36px;
  padding: 150px 0px 35px;
  text-shadow: 2px 2px black;
`;
const PStyle = styled.p`
  text-align: center;
  background-color: ${colors.transparentBlue};
  width: 60%;
  fontSize: 18px;
  borderRadius: 15px;
  padding: 25px 10px;
  color: white;
  font-family: ${fonts.Lucida};
`;

// export main component
export default function ContactMe() {
  return (
    <StyledWrapper>
      <a name="Contact-Me"></a> <H2Style> Contact Me </H2Style>
      <PStyle> Super excited you browsed through my website!
      <br /> Please contact me by whatever method might be best though e-mail works best. </PStyle>
    </StyledWrapper>
  )
};
