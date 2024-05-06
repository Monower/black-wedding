import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Vendors from './pages/Vendors.jsx'
import Notfound from './pages/Notfound.jsx'
import Search from './pages/Search.jsx'
import VendorDetails from './pages/VendorDetails.jsx'
import LightBoxDemo from './pages/LightBoxDemo.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/vendor-search" element={<Search />} />
          <Route path="/vendor-details" element={<VendorDetails />} />
          <Route path="/lightbox" element={<LightBoxDemo />} />

          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
