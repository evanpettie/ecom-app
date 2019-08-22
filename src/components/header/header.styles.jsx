import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionsContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 80px;
  padding: 10px 0px;

  svg {
    height: 55px;
    width: 75px;
    opacity: 0.8;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const LogoTextContainer = styled(Link)`
  @font-face { 
    font-family: 'Rockness'; src: url('../../assets/Rockness.otf'); 
    font-family: 'Rockness'; src: url('../../assets/Rockness.ttf');
  }

  font-family: 'Rockness';
  font-size: 3em;
  width: 60%;
  padding: 10px;
`;

export const OptionLink = styled(Link)`
  ${OptionsContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionsContainerStyles}
`;