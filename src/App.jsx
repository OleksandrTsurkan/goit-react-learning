import Layout from 'Layout/Layout';
import Homepage from 'pages/Homepage';
import ProductsPage from 'pages/ProductsPage';
import ProductsPageDetails from 'pages/ProductsPageDetails';
import TodoPage from 'pages/TodoPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="todos" element={<TodoPage />} />
        {/* <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productId" element={<ProductsPageDetails />} /> */}

        <Route path="products" element={<ProductsPage />} />
        <Route path=":productId" element={<ProductsPageDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
