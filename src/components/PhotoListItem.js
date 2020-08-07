import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";

const ImageStyled = styled.img`
    width: 100%;
    height: auto;
    padding-bottom: 1rem;
`;
const ItemStyled = styled.li`
   padding: 1rem;
   background: #f9f7f6;
   border-radius: 1rem;
   text-align: center;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PhotoListItem = ({props}) => {
    //const { link, title, src } = image;
    return  (
    <ItemStyled>
        <a target="_blank" rel="noopener noreferrer" href={props.link} title={props.title}>
            <ImageStyled src={props.media.m} alt={props.title}/>
        </a>
        <p>{props.title}</p> 
    </ItemStyled>
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


