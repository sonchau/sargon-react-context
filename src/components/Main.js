import PropTypes from 'prop-types'
import React from 'react'
import SearchFrom from './SearchForm'
import PhotoList from './PhotoList'
import styled from "styled-components";

const MainStyled = styled.main`
  padding: 2rem;
`;

const Main = props => (
  <MainStyled>
    <SearchFrom />
    <PhotoList />
  </MainStyled>
)

export default Main
