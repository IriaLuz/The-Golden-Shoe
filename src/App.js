import './App.css';
import { React } from 'react';
import NavbarComponent from './components/navbar/navbar';
import HomePage from './pages/homePage/homepage';
import AppFooter from './components/footer/footer';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <header className="App-header">
          <NavbarComponent />
        </header>
        <main>
          <HomePage/>
        </main>
      </div>
      <AppFooter/>
    </div>
  );
}

export default App;
