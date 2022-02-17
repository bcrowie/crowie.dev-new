import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


import './header.scss'
import { Colors } from '../../constants/strings'
import Github from "../social/github/github"
import LinkedIn from '../social/linkedin/linkedin'

interface Header {
    handleScroll: EventListener
}

const collapseHeader = ():void => {
    console.log("void")
}

const Header: React.FC = (props): JSX.Element => {
    const [logoHovered, setLogoHovered] = useState(Colors.DarkBrown)
    const [isScrolled, setScrolled] = useState();

    return (
        <div className="header">
            <div className="header-main route-container">
                <div className="logo">
                    <p className='first-name'>Brenden</p>
                    <Link style={{ color: logoHovered }} className='last-name' to='/'
                            onMouseEnter={() => setLogoHovered(Colors.LightBrown)}
                            onMouseLeave={() => setLogoHovered(Colors.DarkBrown)}>
                            Crowie.dev
                        </Link>
                </div>
                <div className="social-container">
                    <Github />
                    <LinkedIn />
                </div>
            </div>
        </div>
    )
}

export default Header;