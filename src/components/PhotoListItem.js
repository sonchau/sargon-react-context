import React from 'react'
import PropTypes from 'prop-types'

const PhotoListItem = ({props}) => {
    return  (
    <li>
        <img src={props.media.m} alt={props.title}/>
        <p>{props.title}</p> 
    </li>
    )
}

PhotoListItem.propTypes = {
    author: PropTypes.string,
    author_id: PropTypes.string,
    date_taken: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    media: PropTypes.object,
    published: PropTypes.string,
    tags: PropTypes.string,
    title: PropTypes.string
  }

export default PhotoListItem


