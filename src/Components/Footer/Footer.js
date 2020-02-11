import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Footer.scss';


const Footer = (props) => {
    return (
        <footer>
            <div>
                <ul>
                    <li><a href="https://github.com/Itamichan" rel='noreferrer noopener' target="_blank"> <FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                    <li><a href="mailto:garbuz@gmail.com"><FontAwesomeIcon icon='envelope' /></a></li>
                    <li><a href="https://www.facebook.com/cristina.garbuz" rel='noreferrer noopener' target="_blank"> <FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>

                </ul>
            </div>
        </footer>
    )
};

export default Footer;