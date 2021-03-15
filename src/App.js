import './App.css';
import { React } from 'react';
import NavbarComponent from './components/navbar/navbar';
import HeroBanner from './components/heroBanner/heroBanner';
import ProductCards from './components/productCards/productCards';
import AppFooter from './components/footer/footer';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <header className="App-header">
          <NavbarComponent />
        </header>
        <main>
          <HeroBanner />
          <ProductCards />
        </main>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
