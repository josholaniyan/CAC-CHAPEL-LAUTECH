import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/caclogo.png";
import { GlobalState } from "../Context";
import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
	const { headerList } = useContext(GlobalState);
	return (
		<footer>
			<div className="footer-bottom footerSection footerHeight">
				<div className="text-center">
					<Link to="/">
						<img src={logo} alt="CAC CHAPEL" className="logo" />
					</Link>
					<div className="w-75 mx-auto">
						<p className="text-center fontReduce">
							C.A.C CHAPEL LAUTECH under G Ogbomoso oyo state,Nigeria.
						</p>
						<div className="d-flex justify-content-between align-items-center my-3 w-50 mx-auto">
							<BsFacebook />
							<BsTwitter />
							<BsInstagram />
							<BsWhatsapp />
						</div>
					</div>
				</div>
				<div>
					<p className="text-capitalize text-5 text-center">mandate</p>
					<p className="text-center fontReduce">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, et.
						Ipsum eveniet sunt quos maxime accusantium hic blanditiis omnis
						veniam?
					</p>
				</div>
				<div className="d-none d-lg-block">
					<p className="text-capitalize text-5   ">quick links</p>
					<ul className="list-group">
						{headerList.map((item, index) => (
							<li
								key={index}
								className="text-capitalize list-group-item bg-transparent border-0">
								<Link to={item.url} className="text-white text-decoration-none">
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="footer-bottom d-flex justify-content-center align-items-center footerHeight">
				<div className="container d-flex justify-content-center align-items-center">
					<p className="m-0 fontReduce text-center">
						<span className="me-2">
							Copyright &copy;{" "}
							{`${new Date().getFullYear() !== 2022 ? "2022 - " : ""}`}
							{new Date().getFullYear()}
						</span>
						<Link
							to="#"
							className="headerLink text-uppercase text-decoration-none fw-bold">
							Fountain of Divine Favour
						</Link>
						&nbsp;{" "}
						<span className="d-block d-lg-inline">All Rights Reserved.</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
