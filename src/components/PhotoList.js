import React, {useContext} from 'react'
import { Context as PhotoContext } from '../context/PhotoContext'
import PhotoListItem from './PhotoListItem'
import styled from "styled-components";

const PhotoListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 3rem;
  list-style: none;
`;

const PhotoList = () => {
    const {state} = useContext(PhotoContext)
    //console.log('state in photo list', state)
    return  (
        <PhotoListStyled>
            {state.map((item, index) => {
                return <PhotoListItem key={index} props={item}/>
            })}
        </PhotoListStyled>
    )
}

export default PhotoList


