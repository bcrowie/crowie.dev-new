import * as React from 'react';

import './intro.scss'

const Intro: React.FC = () => {
    return (
        <div className="intro">
            <div className="bullets">
                <p>Bulletpoints go here</p>
            </div>
            <div className="description">
                <p>This is the intro</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio dolores praesentium tempore doloremque aliquid maiores architecto, cupiditate nobis suscipit numquam quae quidem ex rerum veritatis vitae iste quibusdam voluptatem mollitia provident, minima aliquam! Explicabo magni nemo facilis cupiditate in.</p>
            </div>
        </div>
    )
}

export default Intro;