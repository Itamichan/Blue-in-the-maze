import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Footer.scss';


const Footer = (props) => {
    return (
        <footer>
            <ul>
                <li><a href="https://github.com/Itamichan" rel='noreferrer noopener' target="_blank"> <FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                <li><a href="mailto:garbuz@gmail.com"><FontAwesomeIcon icon='envelope' /></a></li>
                <li><a href="https://facebook.com" rel='noreferrer noopener' target="_blank"> <FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>

            </ul>
        </footer>
    )
};

export default Footer;