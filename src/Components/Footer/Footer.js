import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Footer.scss';


const Footer = (props) => {
    return (
        <footer>
            <div>
                <ul
                    className={'text-default'}>
                    <li>
                        <a href="https://github.com/Itamichan/Blue-in-the-maze" rel='noreferrer noopener'
                           target="_blank">
                            <FontAwesomeIcon icon={['fab', 'github']}/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:cristinagarbuz@gmail.com" rel='noreferrer noopener' target="_blank">
                            <FontAwesomeIcon icon='envelope'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/cristina-garbuz-65aabb105/" rel='noreferrer noopener'
                           target="_blank">
                            <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                        </a>
                    </li>
                </ul>
            </div>
            <div> &copy; 2020</div>
        </footer>
    )
};

export default Footer;