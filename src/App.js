import './App.css';
import { React } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductPage from './pages/productPage/productPage';
import NavbarComponent from './components/navbar/navbar';
import HomePage from './pages/homePage/homepage';
import AppFooter from './components/footer/footer';
import AboutPage from './pages/aboutPage/aboutPage';
import FaqPage from './pages/faqPage/faqPage';
import CartPage from './pages/cartPage/cartPage';
import ProductsPage from './pages/productsPage/productsPage';
import NotFound from './pages/page404/page404';
import ContactUsPage from './pages/contactUsPage/contactUsPage';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <header className="App-header">
          <NavbarComponent />
        </header>
        <main>
          <Switch>
            <Route path="/products/:id" component={ProductPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/faq" component={FaqPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/contact-us" component={ContactUsPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
