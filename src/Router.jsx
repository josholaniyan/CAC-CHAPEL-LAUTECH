import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer, Header, Sidebar } from "./Components";
import PageRender from "./PageRender";
import Home from "./Pages";

const Routers = () => {
	return (
		<>
			<ToastContainer />
			<Header />
			<Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:page" element={<PageRender />} />
				<Route path="/:page/:id" element={<PageRender />} />
			</Routes>
			<Footer />
		</>
	);
};

export default Routers;
