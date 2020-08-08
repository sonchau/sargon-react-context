import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";

const ImageStyled = styled.img`
    width: 100%;
    height: auto;
    padding-bottom: 1rem;
    grid-row: 1 / 2;
`;
const ItemStyled = styled.li`
   padding: 1rem;
   background: #f9f7f6;
   border-radius: 1rem;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

`;

const ContentStyled = styled.p`
    font-size: 1.5rem;
    font-family: "Josefin Sans", sans-serif;
    margin: 1rem;
    color: #c69963;
`;

const TitleStyled = styled.p`
    z-index: 3;
    width: 80%;
    font-size: 1.6rem;
    text-align: center;
    padding: 1.25rem;
    background-color: #101d2c;
    color: #fff;
    font-weight: 400;
    margin: 0 auto;
    transform: translateY(-70%);
 
`;

// const ContentContainerStyled = styled.div`
//     transform: translateY(-70%);
// `;
const PhotoListItem = ({props}) => {
    //const { link, title, src } = image;
    return  (
    <ItemStyled>
        <a target="_blank" rel="noopener noreferrer" href={props.link} title={props.title}>
            <ImageStyled src={props.media.m} alt={props.title}/>
        </a>
        <TitleStyled>{props.title}</TitleStyled> 
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


