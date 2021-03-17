import './App.css';
import { React } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductPage from './pages/productPage/productPage';
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
          <Switch>
            <Route exact path="/products" component={ProductPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </main>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
