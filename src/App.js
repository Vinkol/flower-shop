import React from 'react';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </>
  );
}

export default App;
