import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {Questions} from './components/Questions';
import { Add } from './components/Add';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Questions /> } />
      <Route path="/add" element={ <Add /> } />

    </Routes>
  );
}

export default App;
