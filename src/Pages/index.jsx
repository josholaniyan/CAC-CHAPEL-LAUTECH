import React, { useState, useEffect } from "react";
import { DefaultHeader } from "../Components";
import moment from "moment";
import image from "../Assets/Mic.jpg";
import { Card } from "reactstrap";
import { FaDownload } from "react-icons/fa";
import { BsShare, BsChevronRight, BsChevronLeft } from "react-icons/bs";
import banner from "../Assets/countdown.png";
import pastor from "../Assets/baba2.jpg";
import img1 from "../Assets/babaandmama.jpg";
import img2 from "../Assets/congregation2.jpg";
import img3 from "../Assets/choir2.jpg";
import img4 from "../Assets/congregation.jpg";
import img5 from "../Assets/congragation3.jpg";
import { toast } from "react-toastify";

const Home = () => {
	return (
		<>
			<Banner />
			<FountainFavour />
			<WordFromThrone />
			<Annoucement />
			<RecentMessages />
			<Newsletter />
		</>
	);
};

export default Home;

export const Banner = () => {
	let [value, setValue] = useState(0),
		[timer, setTimer] = useState(10000),
		bannerList = [
			{
				banner: img1,
				caption:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit consectetur expedita delectus. Sit nisi, deserunt cum molestiae totam, a ducimus magnam alias reprehenderit debitis blanditiis? Obcaecati velit adipisci excepturi?",
			},
			{
				banner: img2,
				caption:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit consectetur expedita delectus. Sit nisi, deserunt cum molestiae totam, a ducimus magnam alias reprehenderit debitis blanditiis? Obcaecati velit adipisci excepturi?",
			},
			{
				banner: img3,
				caption:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit consectetur expedita delectus. Sit nisi, deserunt cum molestiae totam, a ducimus magnam alias reprehenderit debitis blanditiis? Obcaecati velit adipisci excepturi?",
			},
			{
				banner: img4,
				caption:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit consectetur expedita delectus. Sit nisi, deserunt cum molestiae totam, a ducimus magnam alias reprehenderit debitis blanditiis? Obcaecati velit adipisci excepturi?",
			},
			{
				banner: img5,
				caption:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit consectetur expedita delectus. Sit nisi, deserunt cum molestiae totam, a ducimus magnam alias reprehenderit debitis blanditiis? Obcaecati velit adipisci excepturi?",
			},
		];

	useEffect(() => {
		setTimeout(() => {
			value === bannerList.length - 1 ? setValue(0) : setValue(++value);
		}, timer);
	}, [value, bannerList.length, timer]);

	let handleChangeBg = type => {
		if (type === "prev") {
			value === 0 ? setValue(bannerList.length - 1) : setValue(--value);
		} else {
			value === bannerList.length - 1 ? setValue(0) : setValue(++value);
		}
		setTimer(10000);
	};

	return (
		<main
			className="hero heroCaption"
			style={{ background: `url(${bannerList[value]?.banner})` }}>
			<div className="overlay"></div>
			<span className="bannerToggle" onClick={() => handleChangeBg("prev")}>
				<BsChevronLeft className="text-white" size={35} />
			</span>
			<span
				className="bannerToggle bannerRight"
				onClick={() => handleChangeBg()}>
				<BsChevronRight className="text-white" size={35} />
			</span>
			<div className="d-flex justify-content-center align-items-center m-auto heroCaption heroCaptionText">
				<div className="m-auto">
					<h2 className="text-white mb-4">Welcome</h2>
					<p className="text-white fontReduce">{bannerList[value]?.caption}</p>
				</div>
			</div>
		</main>
	);
};

export const Newsletter = () => {
	let handleSubmit = async e => {
		e.preventDefault();
		toast.info("Done");
	};

	return (
		<section className="py-3 bg-light">
			<div className="container">
				<DefaultHeader title={"subscribe to our newsletter"} />
				<p className="text-center fontReduce">
					Subscribe to a periodic dose of divinely inspired publications to
					nourish your spirit
				</p>
				<form className="mx-auto container" style={{ maxWidth: "500px" }}>
					<textarea
						name="Subscribe"
						className="form-control"
						style={{ resize: "none", height: "7rem" }}
					/>
					<button
						onClick={handleSubmit}
						className="btn btn-primary text-capitalize my-3 mx-auto d-block">
						subscribe
					</button>
				</form>
			</div>
		</section>
	);
};

export const RecentMessages = () => {
	let recent = [
		{
			image,
			preacher: "Revd Oyelakin Olabiyi",
			topic: "Striking Through",
			date: moment().format("L"),
		},
		{
			image,
			preacher: "Revd Oyelakin Olabiyi",
			topic: "Striking Through",
			date: moment().format("L"),
		},
		{
			image,
			preacher: "Revd Oyelakin Olabiyi",
			topic: "Striking Through",
			date: moment().format("L"),
		},
		{
			image,
			preacher: "Revd Oyelakin Olabiyi",
			topic: "Striking Through",
			date: moment().format("L"),
		},
	];

	return (
		<section className="py-5 container">
			<div className="">
				<DefaultHeader title={"recent messages"} />
				<div className="mainrecentmessage container py-3">
					{recent.map((item, index) => (
						<Card key={index} className="border-0 shadow recentmessage rounded">
							<img src={item.image} alt={item.Card} className="rounded" />
							<div className="p-3 d-flex flex-column">
								<h5 className="text-5 fw-bold text-center">{item.topic}</h5>
								<div className="my-4">
									<p className="text-danger text-italics">{item.date}</p>
									<p className="text-muted">{item.preacher}</p>
								</div>
								<div className="mb-auto">
									<FaDownload className="text-primary mx-2" />
									<BsShare className="text-primary mx-2" />
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export const Annoucement = () => {
	return (
		<section
			className="announcement py-4"
			style={{ background: `url(${banner})` }}>
			<div className="container">
				<DefaultHeader title={"announcement"} css="text-white" bg />
			</div>
		</section>
	);
};

export const WordFromThrone = () => {
	return (
		<section className="announcement py-4">
			<div className="container">
				<DefaultHeader title={"word from the throne"} css="text-white" bg />
				<div
					className="w-75 m-auto d-flex justify-content-center align-items-center"
					style={{ height: "15rem" }}>
					<p className="text-center m-auto text-5 text-white fontReduce">
						If you gaze on addtional things you will end up in affliction <br />{" "}
						<span className="text-capitalize">
							pastor .....................
						</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export const FountainFavour = () => {
	return (
		<section className="py-5 container">
			<DefaultHeader title={"FOUNTAIN OF DIVINE FAVOUR"} />
			<div className="fountainmessage container py-3">
				<img src={pastor} alt="pastor" className="pastorImg rounded" />
				<div className="pastorText text-justify fontReduce">
					With joy in our hearts, we welcome you to the official website of
					Transfiguration Ark Revival Mission, Worldwide. We're glad to have you
					join us in this ark of God's move in our time. Our mandate is to erect
					God's altar in the hearts of men. We believe your coming here is not a
					coincidence and that you will be immensely blessed as you partake in
					God's blessings with us. We'd be glad to share your prayer burdens
					with you. We're also eager to hear the great testimonies of the mighty
					acts of God in and through you. <br /> Welcome! - Past. prof. Ogunsiji
				</div>
			</div>
		</section>
	);
};
