import './tailwind.css';
import React from 'react';
import HomePage from './pages/HomePage.jsx';
import VendorsPage from './pages/VendorsPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import VendorDetailsPage from './pages/VendorDetailsPage.jsx';
import NotFound from './pages/NotFound.jsx';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot( document.getElementById( "root" ) ).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/vendors" element={<VendorsPage />} />
					<Route path="/vendors/:id" element={<VendorDetailsPage />} />
					<Route path="/vendors/search" element={<SearchPage />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
