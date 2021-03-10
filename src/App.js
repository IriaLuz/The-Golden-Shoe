import './App.css';
import { React } from 'react';
import NavbarPage from './components/navbar/navbar';
import HeroBanner from './components/heroBanner/heroBanner';
import MyCard from './components/card/card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarPage/>
        <HeroBanner/>
        <MyCard/>
      </header>
    </div>
  );
}

export default App;
