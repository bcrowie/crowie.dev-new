import React from 'react';
import './home.scss'

import Intro from './intro/intro'

const Home: React.FC = () => {
    return (
        <div className='home'>
            <div className="home-main route-container">
                <Intro />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit placeat corporis rerum explicabo assumenda officia veritatis nesciunt architecto ipsum, natus odit dolores eum ipsam qui perspiciatis deserunt. Sapiente aspernatur, beatae aliquid veritatis id, quaerat ad saepe provident ipsa dolorem rem nihil alias placeat dolor dolore ut ab. Vitae enim inventore beatae adipisci asperiores fuga commodi culpa a mollitia numquam, repudiandae esse quae voluptatum! Ducimus quo id alias quasi suscipit natus perferendis delectus debitis eius accusantium. Iusto culpa laborum expedita obcaecati eligendi accusantium autem magnam reiciendis quae fugiat! Quidem dolore exercitationem suscipit nostrum in? Doloribus minus commodi odit eveniet, iusto possimus.</p>
            </div>
        </div>
    )
}

export default Home;