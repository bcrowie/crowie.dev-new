import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Colors, Logos } from '../../../constants/strings' // Constants
import { ReactComponent as GithubLogo } from '../../../images/github-square-brands.svg';
import './github.scss'

const Github: React.FC = () => {
    const [hovered, setHovered] = useState(Colors.DarkBrown)

    return(
        <Link to='https://github.com' >
            <GithubLogo onMouseEnter={() => setHovered(Colors.LightBrown)} 
                onMouseLeave={() => setHovered(Colors.DarkBrown)}
                fill={hovered} 
                className={Logos.socialClassName} />
        </Link>
    )
}

export default Github;