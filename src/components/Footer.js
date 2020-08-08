import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";




const HeaderStyled = styled.footer`
    font-size: 1.5em;
    padding: 2rem;
    text-align: center;
    background: #101d2c;
    color: #fff;
`;
const NavStyled = styled.nav`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
    align-items: center; 
    a {
        font-size: 1.4rem;
        color: #fff;
        text-decoration: none;
        font-family: "Josefin Sans", sans-serif;
        text-transform: uppercase;
        text-align: center;
        padding: 1.5rem;
        display: block;
        transition: all .2s;
        &:hover,
        &:active {
            background-color: rgba(255, 255, 255, 0.05);
            transform: translateY(-3px); 
        }
    }
`;

const Footer = (props) => (
    <HeaderStyled>
        <NavStyled>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sonchau/sargon-react-context">Repos</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sonnchau/">Linkedin</a></li>
        </NavStyled>
        <p className="copyright">&copy; {props.user}.</p>
    </HeaderStyled>
)

Footer.propTypes = {
    user: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string
}

export default Footer
