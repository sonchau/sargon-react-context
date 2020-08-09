import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";


const ItemStyled = styled.li`
   padding: 1rem;
   background: #f9f7f6;
   border-radius: 1rem;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   transition: transform .3s;
   overflow: hidden;
   &:hover {
    transform: translateY(-1rem) scale(1.03); 
    }
`;
const ImageStyled = styled.img`
    width: 100%;
    height: auto;
    padding-bottom: 1rem;
`;

// const TitleStyled = styled.p`
//     z-index: 3;
//     width: 80%;
//     font-size: 1.6rem;
//     text-align: center;
//     padding: 1.25rem;
//     background-color: #101d2c;
//     color: #fff;
//     font-weight: 400;
//     margin: 0 auto;
//     transform: translateY(-70%);
//     grid-area: title;
 
// `;

// const ContentContainerStyled = styled.div`
// grid-area: content;
// `;

const ContentStyled = styled.p`
    font-size: 1.5rem;
    font-family: "Josefin Sans", sans-serif;
    margin: 0 1rem 0.5rem;
    color: #c69963;
`;
const PhotoListItem = ({props}) => {
    //const { link, title, src } = image;
    return  (
    <ItemStyled>
        <a target="_blank" rel="noopener noreferrer" href={props.link} title={props.title}>
            <ImageStyled src={props.media.m} alt={props.title}/>
        </a>
        <ContentStyled><strong>Title:</strong> {props.title}</ContentStyled> 
        <ContentStyled><strong>Author:</strong> {props.author.split('"')[1]}</ContentStyled>
        <ContentStyled><strong>Tags:</strong> {props.tags}</ContentStyled>        
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


