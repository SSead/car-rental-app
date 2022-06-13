import React from 'react';
import './App.css';
import LandingScreen from './screens/LandingScreen';
import {BrowserRouter, Route} from 'react-router-dom';
import {Routes} from 'react-router';
import VWScreen from './screens/VWScreen';
import AudiScreen from './screens/AudiScreen';
import PorscheScreen from './screens/PorscheScreen';
import RenoScreen from './screens/RenoScreen';
import DateScreen from './screens/DateScreen';
import DoneScreen from './screens/DoneScreen';
import FormScreen from './screens/FormScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingScreen />} />
        <Route path='/vw' element={<VWScreen />} />
        <Route path='/audi' element={<AudiScreen />} />
        <Route path='/porsche' element={<PorscheScreen />} />
        <Route path='/reno' element={<RenoScreen />} />
        <Route path='/date' element={<DateScreen />} />
        <Route path='/done' element={<DoneScreen />} />
        <Route path='/form' element={<FormScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
