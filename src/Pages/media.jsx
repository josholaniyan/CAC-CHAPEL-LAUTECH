import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Card, CardFooter } from "reactstrap";

const Media = () => {
	let media = [
		{ name: "Facebook", icon: <BsFacebook size={72} color="blue" /> },
		{ name: "Twitter", icon: <BsTwitter size={72} className="text-primary" /> },
		{ name: "Instagram", icon: <BsInstagram size={72} color="red" /> },
		{ name: "Whatsapp", icon: <BsWhatsapp size={72} color="green" /> },
	];
	return (
		<section className="py-5 container testimonyBannert">
			<div className="">
				<div className="mainrecentmessage container py-3">
					{media.map((item, index) => (
						<Card
							key={index}
							className="border-0 shadow rounded text-center myCursor mediaDiv">
							<div
								className="d-flex justify-content-center align-items-center"
								style={{ height: "10rem" }}>
								{item.icon}
							</div>
							<CardFooter className="bg-white text-5">{item.name}</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Media;
