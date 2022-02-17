import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/app.scss'
import { Paths } from './constants/strings'

import Header from './components/header/header'
import Contact from './screens/Contact'
import Home from './screens/Home'
import Showcase from './screens/Showcase'

const handleScroll: EventListener = ():void => {
    return
}

const App: React.FC = () => {
  return (
    <Router>
      <Header  handleScroll={handleScroll}/>
      <Routes>
          <Route path={Paths.Main} element={<Home/>} />
          <Route path={Paths.Contact} element={<Contact/>} />
          <Route path={Paths.Showcase} element={<Showcase/>} />
      </Routes>
    </Router>
  );
}

export default App;
