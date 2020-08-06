import PropTypes from 'prop-types'
import React from 'react'
import SearchFrom from './SearchForm'
import PhotoList from './PhotoList'

const Main = props => (
  <main id="main">
    <p>{props.mainText}</p>
    <SearchFrom />
    <PhotoList />
  </main>
)

Main.propTypes = {
  mainText: PropTypes.string
}

export default Main
