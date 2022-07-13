import React from "react";
import { Card } from "reactstrap";
import { DefaultHeader } from "../Components";
import image from "../Assets/baba2.jpg";
import image2 from "../Assets/baba1.jpg";
import image3 from "../Assets/87705924_2746392732112558_5495920815742386176_n.jpg";

const About = () => {
	return (
		<main className="py-4">
			<div className="my-4">
				<DefaultHeader title={"about us"} css="fw-bold" />
			</div>
			<AlternateTextImage />
			<Vision />
			<Mission />
		</main>
	);
};

export default About;

const Mission = () => {
	return (
		<section className="container px-lg-5 mb-3">
			<section className="fountainmessage container px-lg-5">
				<Card className="shadow rounded p-4 border-left">
					<h3>The Spirit of the Assignment (Core Values)</h3>
					<ul className="list-group border-0 px-3">
						<li className="my-2">
							The Spirit of Fellowship- Mark 3:14, John 14:10
						</li>
						<li className="my-2">
							The Spirit of Service - Mark 10:42-43, Luke 22:27
						</li>
						<li className="my-2">
							The Spirit of Commitment - John 13:1, Luke 9:62
						</li>
						<li className="my-2">
							The Spirit of Excellence - John 7:15, Daniel 6:3
						</li>
						<li className="my-2">
							The Spirit of Fellowship- Mark 3:14, John 14:10
						</li>
						<li className="my-2">
							The Spirit of Service - Mark 10:42-43, Luke 22:27
						</li>
						<li className="my-2">
							The Spirit of Commitment - John 13:1, Luke 9:62
						</li>
						<li className="my-2">
							The Spirit of Excellence - John 7:15, Daniel 6:3
						</li>
					</ul>
				</Card>
				<Card className="shadow rounded p-4 border-left">
					<h3>Our Core Thrusts (Mission)</h3>
					<ul className="list-group border-0 px-3">
						<li className="my-2">
							The Spirit of Fellowship- Mark 3:14, John 14:10
						</li>
						<li className="my-2">
							The Spirit of Service - Mark 10:42-43, Luke 22:27
						</li>
						<li className="my-2">
							The Spirit of Commitment - John 13:1, Luke 9:62
						</li>
						<li className="my-2">
							The Spirit of Excellence - John 7:15, Daniel 6:3
						</li>
						<li className="my-2">
							The Spirit of Fellowship- Mark 3:14, John 14:10
						</li>
						<li className="my-2">
							The Spirit of Service - Mark 10:42-43, Luke 22:27
						</li>
						<li className="my-2">
							The Spirit of Commitment - John 13:1, Luke 9:62
						</li>
						<li className="my-2">
							The Spirit of Excellence - John 7:15, Daniel 6:3
						</li>
					</ul>
				</Card>
			</section>
		</section>
	);
};

const Vision = () => {
	return (
		<section className="bg-light py-4 mb-5">
			<div className="container">
				<DefaultHeader title={"our vision"} />
				<div className="py-4">
					<p className="fw-bold text-center w-75 mx-auto">
						Our vision is summarized in the slogan of the commission thus:{" "}
						<br />
						…erecting God's altar in the hearts of men"
					</p>
					<p className="fw-bold text-center w-75 mx-auto">-Ps 42:1-2</p>
				</div>
			</div>
		</section>
	);
};

let AlternateTextImage = () => {
	let captions = [
		{ image: image3, subtitle: "Brief history" },
		{ image, subtitle: "the ministry" },
		{ image: image2, subtitle: "the ministry" },
		{ image: image3, subtitle: "meet our pastors" },
		{ image, subtitle: "the ministry" },
		{ image: image2, subtitle: "the ministry" },
	];
	return (
		<section className="container">
			{captions.map((item, index) => (
				<div key={index} className="fountainmessage aboutPastors my-5">
					<div className={`${index % 2 === 0 ? "order-lg-0" : "order-lg-1"}`}>
						<img
							src={item.image}
							alt="About us"
							className="pastorImg rounded aboutImg order-lg-0"
						/>{" "}
					</div>
					<div className="pastorText text-justify">
						<h2 className="mb-3 text-capitalize">{item.subtitle}</h2>
						<p className="fontReduce">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo
							expedita officiis dolorum officia quia quod autem quis quisquam
							animi, ipsam, architecto saepe odit. Et placeat dignissimos,
							perferendis quis praesentium tempora maiores animi rerum repellat
							similique numquam, aliquam aut illo molestiae amet quidem sequi a
							reiciendis libero laborum dolor tempore veritatis eos. Fugit,
							molestiae ducimus eius accusamus architecto praesentium earum
							provident quisquam non unde ea ab placeat vel mollitia? Maxime hic
							velit at praesentium repellendus laboriosam minus deserunt magni
							natus ex, molestias placeat ipsa? Unde nobis ex nam accusantium,
							eum ut praesentium exercitationem labore architecto ullam
							similique blanditiis nulla inventore repudiandae, eaque deleniti
							quod voluptatum sapiente laborum dolorum iure repellat. Architecto
							laborum cupiditate delectus est. Provident explicabo ratione
							repellat repudiandae velit error ipsum ducimus facere doloremque,
							accusamus omnis eius nam vero. Dolores aliquid temporibus
							pariatur, consequatur nesciunt non fugiat mollitia expedita
							quibusdam dignissimos facilis voluptates esse excepturi fuga
							tenetur totam.
						</p>
					</div>
				</div>
			))}
		</section>
	);
};
