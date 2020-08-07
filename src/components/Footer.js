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

const Footer = (props) => (
    <HeaderStyled>
        <p className="copyright">&copy; {props.user}. <a href={props.link}>{props.linkText}</a></p>
    </HeaderStyled>
)

Footer.propTypes = {
    user: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string
}

export default Footer
