import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Colors, Logos } from '../../../constants/strings' // Constants
import { ReactComponent as LinkedInLogo } from '../../../images/linkedin-brands.svg';
import './linkedin.scss'

const LinkedIn: React.FC = (): JSX.Element => {
    const [hovered, setHovered] = useState(Colors.DarkBrown)

    return(
        <Link to='https://linkedin.com'>
            <LinkedInLogo onMouseEnter={() => setHovered(Colors.LightBrown)} 
                onMouseLeave={() => setHovered(Colors.DarkBrown)}
                fill={hovered}
                className={Logos.socialClassName} />
        </Link>
    )
}

export default LinkedIn;