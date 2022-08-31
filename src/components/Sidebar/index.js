import { Link, NavLink } from 'react-router-dom';
import './index.scss';

import LogoJ from '../../assets/images/logo-j.png';
import LogoSubtitle from '../../assets/images/logo-subtitle.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoJ} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    onClick={() => setShowNav(false)}
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    onClick={() => setShowNav(false)}
                    exact="true"
                    activeclassname="active"
                    className="portfolio-link"
                    to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    onClick={() => setShowNav(false)}
                    exact="true"
                    activeclassname="active"
                    className="contact-link"
                    to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink >
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color='#ffd700'
                    size="3x"
                    className='close-icon'
                />
            </nav>
            <ul>
                <li>
                    <a
                    target="_blank"
                    rel='noreferrer'
                    href="https://drive.google.com/drive/folders/1L-kx5ta9Ip3YQdirJMhrQanEUPJJz8Im?usp=sharing">
                        <FontAwesomeIcon icon={faFilePdf} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    rel='noreferrer'
                    href="https://www.linkedin.com/in/justindavinlee/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    rel='noreferrer'
                    href="https://github.com/justindavin">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color='#ffd700'
                size="3x"
                className='hamburger-icon'
            />
        </div>
    )
}
export default Sidebar