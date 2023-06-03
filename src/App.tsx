import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
// @ts-ignore
import { Helmet } from "react-helmet"
import Home from "./Pages/Home";
import Layout from "./Regions/Layout";
import NoMatch from "./Pages/NoMatch";
import About from "./Pages/About";
import Product from "./Pages/Product";

import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export const menuList = [
  {path: '/', title: 'Home'},
  {path: '/about', title: 'About'},
  {path: '/product', title: 'Product'},
]

function App() {
  return (<>
    <Helmet>
      <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
              integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
              crossOrigin="anonymous" async/>
    </Helmet>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </>);
}

export default App;
