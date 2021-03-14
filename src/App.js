import './App.css';
import { React } from 'react';
import NavbarComponent from './components/navbar/navbar';
import HeroBanner from './components/heroBanner/heroBanner';
import ProductCards from './components/cards/cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent />
        <HeroBanner />
        <ProductCards />
      </header>
    </div>
  );
}

export default App;
