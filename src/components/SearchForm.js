import PropTypes from 'prop-types'
import React from 'react'

const SearchForm = () => (
  <div>
    <input
        type="text"
        placeholder="Tags"
        autoFocus
        className="text-input"
        value="a"
    />
    <input
        type="text"
        placeholder="author"
        className="text-input"
        value="b"
    />
  </div>
)


export default SearchForm


