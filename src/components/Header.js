import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header">
    <p>{props.headerText}</p>
  </header>
)

Header.propTypes = {
  headerText: PropTypes.string
}

export default Header
