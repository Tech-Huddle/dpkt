import React from 'react'

import { Route, Routes } from 'react-router-dom';

import About from '../About/About';
import Home from '../Home/Home';
import Action1 from '../Actions/Action1';
import Action2 from '../Actions/Action2';
import Action3 from '../Actions/Action3';
import AccreditionsPage from '../Accreditations/AccreditionsPage';

export default function Routing() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/action1' element={<Action1/>}/>
                <Route path='/action2' element={<Action2/>}/>
                <Route path='/action3' element={<Action3/>}/>
                <Route path='/Accreditions' element={<AccreditionsPage/>}/>
            
            </Routes>
        </div>
    )
}
