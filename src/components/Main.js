import PropTypes from 'prop-types'
import React from 'react'

const Main = props => (
  <main id="main">
    <p>{props.mainText}</p>
  </main>
)

Main.propTypes = {
  mainText: PropTypes.string
}

export default Main
