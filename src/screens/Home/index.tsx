import React from 'react';

import './home.scss'
import Bulletpoints from './bulletpoints/bulletpoints'
import Intro from './intro/intro'
import Profile from './profile/profile'

const Home: React.FC = (): JSX.Element => {
    return (
        <div className='home'>
            <div className="home-main route-container">
                <div className="main-container">
                    <Profile />
                </div>
                <div className="main-container">
                    <Intro />
                    <Bulletpoints />
                </div>
            </div>
        </div>
    )
}

export default Home;