import PropTypes from 'prop-types'
import React from 'react'
import SearchFrom from './SearchForm'
const Main = props => (
  <main id="main">
    <p>{props.mainText}</p>
    <SearchFrom />
  </main>
)

Main.propTypes = {
  mainText: PropTypes.string
}

export default Main
