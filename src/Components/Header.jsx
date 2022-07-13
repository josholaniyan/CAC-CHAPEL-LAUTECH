import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/caclogo.png";
import { Navbar, Nav, NavItem } from "reactstrap";
import { GlobalState } from "../Context";
import { BsWifi } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const Header = () => {
	const { headerList } = useContext(GlobalState);
	let location = useLocation();

	useEffect(() => {
		document.title = `${location.pathname
			.toUpperCase()
			.substring(1)} CAC CHAPEL`;
	}, [location.pathname]);

	return (
		<Navbar expand="lg" sticky="top" className="header d-none d-lg-block" light>
			<Link to="/">
				<img src={logo} alt="CAC CHAPEL" className="logo" />
			</Link>
			<Nav className="ms-auto d-flex align-items-center" navbar>
				{headerList.map((list, index) => (
					<NavItem key={index} className="mx-2 mx-lg-3 my-lg-auto">
						<Link
							to={list.url}
							className={`menuItem text-decoration-none ${
								location.pathname.length > 1 &&
								list.url.length > 1 &&
								location.pathname.includes(list.url)
									? "fw-bold headerActive"
									: location.pathname.length === 1 && list.url.length === 1
									? "fw-bold headerActive"
									: "text-white"
							} text-capitalize`}>
							{list.name}
						</Link>
					</NavItem>
				))}
				<NavItem className="myCursor text-white btn btn-warning text-uppercase">
					Join us live
				</NavItem>
			</Nav>
		</Navbar>
	);
};

export default Header;

export const Sidebar = () => {
	const { headerList } = useContext(GlobalState);
	let location = useLocation(),
		[shouldOpen, setShouldOpen] = useState(false);

	const [isOpen2, setIsOpen2] = useState(false);
	let toggle2 = () => {
		setIsOpen2(!isOpen2);
	};

	useEffect(() => {
		setShouldOpen(
			document.body.clientWidth < 992 &&
				document.getElementById("sidebarSmall").classList.contains("visible")
		);
	}, [isOpen2]);

	useEffect(() => {
		if (shouldOpen)
			if (isOpen2) {
				document.body.style.overflow = "hidden";
			}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen2, shouldOpen]);

	let menuList = (item, index) => (
		<li
			className={`${
				location.pathname.length > 1 &&
				item.url.length > 1 &&
				location.pathname.includes(item.url)
					? "fw-bold headerActive"
					: location.pathname.length === 1 && item.url.length === 1
					? "fw-bold headerActive"
					: "text-white"
			}`}
			key={index}>
			<Link
				className="text-capitalize genSansFont"
				onClick={toggle2}
				to={item.url}>
				<span className="mx-3">{item.icon}</span>
				{item.name}
			</Link>
		</li>
	);

	useEffect(() => {
		document.title = `${location.pathname
			.toUpperCase()
			.substring(1)} CAC CHAPEL`;
	}, [location.pathname]);

	return (
		<aside id="header" className="mainHeader sticky-top d-lg-none header">
			<nav className="sidebar-menu bg-dark1 shadow">
				<div className="d-flex justify-content-lg-center justify-content-between mx-3 mx-lg-0 align-items-center">
					<Link to={"/"}>
						<img src={logo} alt="CAC CHAPEL" className="logo" />
					</Link>
					<button
						className="navbar-toggler ms-auto d-lg-none d-flex justify-content-center align-items-center"
						type="button"
						onClick={toggle2}
						data-bs-toggle="collapse"
						data-bs-target="#header-nav">
						{isOpen2 ? (
							<FaTimes color="white" />
						) : (
							<>
								<span></span>
								<span></span>
								<span></span>
							</>
						)}
					</button>
				</div>
				<ul
					id="sidebarSmall"
					className={`navbar-nav sidebarSmall ${isOpen2 ? "visible" : ""}`}>
					{headerList.map((item, index) => menuList(item, index))}
					<li>
						<button className="myCursor text-white btn btn-warning text-uppercase">
							<BsWifi size={24} className="mx-3" />
							join us live
						</button>
					</li>
				</ul>
			</nav>
		</aside>
	);
};
