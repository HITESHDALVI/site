// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import { Box } from '@mui/material';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';




function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
          <Route path= '/' element={<Home />} />
          <Route path= '/cart' element={<Cart />} />
          <Route path= '/product/:id' element={<DetailView />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
