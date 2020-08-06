import React, {useState, useContext} from 'react'
import { Context as PhotoContext } from '../context/PhotoContext';
import styled from "styled-components";

const SearchFormStyled = styled.div`
    flex: 0 0 40%;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const SearchInputStyled = styled.input`
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: #f4f2f2;
    border: none;
    padding: .7rem 2rem;
    border-radius: 100px;
    width: 90%;
    transition: all .2s;
    height: 4rem;
    line-height: 4rem;
    &:focus {
        outline: none;
      width: 100%;
      background-color: #f0eeee;
    }
`;

const SearchHeadingStyled = styled.h2`
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    padding: 2rem;
`;


const SearchForm = () => {
    const {fetchPhotos} = useContext(PhotoContext)
    const [tags, setTags] = useState('')
    const onTagsChange = (e) => {
        setTags(e.target.value)
        fetchPhotos(e.target.value)
    }

    return  (
        <>
            <SearchHeadingStyled>Please enter tag to search</SearchHeadingStyled>
            <SearchFormStyled>
                <SearchInputStyled
                    type="text"
                    placeholder="Tags"
                    autoFocus
                    className="text-input"
                    value={tags}
                    onChange={onTagsChange}
                />
            </SearchFormStyled>
        </>
    )
}

export default SearchForm


