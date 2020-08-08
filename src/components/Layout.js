import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";


const LayoutStyled = styled.div`
  display: grid;
  //grid-template-rows: 10rem minmax(min-content, 80vh) 6rem;
  grid-template-rows: auto minmax(70vh, 1fr) auto;
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
    {children}
  </LayoutStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
