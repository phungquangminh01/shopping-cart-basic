import './App.css';
import React from 'react';
import Header from './components/Header';
import MessageContainers from './components/stores/containers/MessageContainers';
import Footer from './components/Footer';
import ProductsContainers from './components/stores/containers/ProductsContainers';
import CartContainers from './components/stores/containers/CartContainers';

function App() {
  return (
    <div>
      <Header />
      <main id="mainContainer">
        <div className="container">
            <ProductsContainers />
            <MessageContainers />
            <CartContainers />
        </div>
      </main>

      <Footer />
    </div>

  );
}

export default App;
