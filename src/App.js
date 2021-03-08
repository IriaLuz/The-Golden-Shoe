import './App.css';
import { React } from 'react';
import NavbarPage from './components/navbar/navbar';
import HeroBanner from './components/heroBanner/heroBanner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarPage/>
        <HeroBanner/>

      </header>
    </div>
  );
}

export default App;
