import React, {useState, useContext} from 'react'
import { Context as PhotoContext } from '../context/PhotoContext';
import styled from "styled-components";
//import { ReactComponent as Logo } from '../../public/SVG/search.svg';
import { debounce } from "throttle-debounce";

const SearchFormStyled = styled.div`
    flex: 0 0 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
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
    margin-right: -3.25rem;
    &:focus {
        outline: none;
      width: 100%;
      background-color: #f0eeee;
    }
    &::-webkit-input-placeholder {
        font-weight: 100;
        color: #ccc; 
    }
`;

const SearchHeadingStyled = styled.h2`
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    padding: 2rem;
`;

const SearchIcon = styled.img`
    height: 2rem;
    width: 2rem;
    fill: #999; 
`;

const SearchButton = styled.button`
    border: none;
    background-color: #f4f2f2;
    .&:focus {
        outline: none; 
    }
    &:active {
        transform: translateY(2px); 
    }
`;
const SearchForm = () => {
    const {fetchPhotos} = useContext(PhotoContext)
    const [tags, setTags] = useState('')
    const onTagsChange = (e) => {
        setTags(e.target.value)
        debounce(500,fetchPhotos(e.target.value))
    }

    return  (
        <>
            <SearchHeadingStyled>Please enter tag to search</SearchHeadingStyled>
            <SearchFormStyled>
                <SearchInputStyled
                    type="text"
                    placeholder="Tags"
                    className="text-input"
                    value={tags}
                    onChange={onTagsChange}
                />
                <SearchButton>
                    <SearchIcon src={process.env.PUBLIC_URL + '/search.png'} />
                </SearchButton>
                
            </SearchFormStyled>
        </>
    )
}

export default SearchForm


