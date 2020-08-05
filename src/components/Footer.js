import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer">
        <p className="copyright">&copy; {props.user}. <a href={props.link}>{props.linkText}</a>.</p>
    </footer>
)

Footer.propTypes = {
    user: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string
}

export default Footer
