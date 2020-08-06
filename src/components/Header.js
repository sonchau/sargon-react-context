import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components";

const HeaderStyled = styled.header`
  font-size: 3.5em;
  padding: 3rem;
  text-align: center;
  background: #101d2c;
  color: #fff;
`;

const Header = props => (
  <HeaderStyled>
    <p>{props.headerText}</p>
  </HeaderStyled>
)

Header.propTypes = {
  headerText: PropTypes.string
}

export default Header
