import React, { useState } from "react";
import { DefaultHeader } from "../Components";
import banner from "../Assets/pray.jpg";
import { toast } from "react-toastify";

const Feedback = () => {
	let [active, setActive] = useState(0),
		listGroup = [
			`Prayer & Testimony`,
			"Counselling",
			"Contact us",
			"membership registration",
		],
		handleSubmit = async e => {
			e.preventDefault();
			toast.info("Done");
		};

	return (
		<section className="pb-4 bg-light">
			{active === 0 ? <TestimonyBanner /> : <></>}
			<div className="container px-lg-5 pt-4">
				<div className="shadow bg-white rounded">
					<ul className="list-group list-group-horizontal w-100 feedbackTab">
						{listGroup.map((item, index) => (
							<li
								key={index}
								onClick={() => setActive(index)}
								className={`list-group-item w-100 py-3 text-center myCursor text-capitalize fw-bold fontReduce ${
									active === index ? "list-group-item-secondary" : ""
								} `}>
								{item}
							</li>
						))}
					</ul>
					<div className="p-4">
						<DefaultHeader
							title={
								active === 3
									? "MEMBERSHIP REGISTRATION"
									: active === 2
									? "contact us"
									: active === 1
									? "Counselling form"
									: "send in your prayer request and testimonies here"
							}
							bg={active % 2 !== 0 ? true : false}
						/>
						<form className="container" style={{ maxWidth: "600px" }}>
							{active === 3 ? (
								<MembershipRegistration />
							) : (
								<>
									<NameRepitition />
									{active === 0 ? (
										<>
											<div className="my-3">
												<label htmlFor="Purpose2">
													Prayer Request or Testimony?
												</label>
												<select className="form-control" id="Purpose2">
													<option>-select one-</option>
													<option>Prayer Request</option>
													<option>Testimony</option>
												</select>
											</div>
											<div className="my-3">
												<label htmlFor="Title">Title*</label>
												<input
													type="text"
													className="form-control"
													id="Title"
													placeholder="Title"
												/>
											</div>
										</>
									) : (
										<></>
									)}
									<div className="my-3">
										<label htmlFor="Purpose">
											{active === 2
												? "Message*"
												: active === 1
												? "Purpose of Counselling*"
												: "Full details here*"}
										</label>
										<textarea
											className="form-control"
											id="Purpose"
											style={{ height: "10rem", resize: "none" }}></textarea>
									</div>
								</>
							)}

							<button
								onClick={handleSubmit}
								className="btn btn-primary text-uppercase w-50 d-block mx-auto my-3">
								submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feedback;

const NameRepitition = () => {
	return (
		<>
			<div className="my-3">
				<label htmlFor="Fullname">Full Name*</label>
				<input
					type="text"
					className="form-control "
					id="Fullname"
					placeholder="ajao joshua olaniyan"
				/>
			</div>
			<div className="my-3">
				<label htmlFor="Phone number">Phone Number*</label>
				<input
					type="number"
					className="form-control"
					id="Phone number"
					placeholder="090********"
				/>
			</div>
			<div className="my-3">
				<label htmlFor="Email">Email*</label>
				<input
					type="email"
					className="form-control"
					id="Email"
					placeholder="name@example.com"
				/>
			</div>
		</>
	);
};

const MembershipRegistration = () => {
	return (
		<>
			<div className="my-3">
				<label htmlFor="Fullname">Full Name*</label>
				<input
					type="text"
					className="form-control "
					id="Fullname"
					placeholder="ajao joshua olaniyan"
				/>
			</div>
			<div className="my-3">
				<label htmlFor="Department">Department*</label>
				<input
					type="text"
					className="form-control "
					id="Department"
					placeholder="Biochemistry"
				/>
			</div>
			<div className="my-3">
				<label htmlFor="Matric">Matric Number</label>
				<input
					type="number"
					className="form-control "
					id="Matric"
					placeholder="15000"
				/>
			</div>
			<div className="my-3">
				<label htmlFor="Phone number">Phone Number*</label>
				<input
					type="number"
					className="form-control"
					id="Phone number"
					placeholder="090********"
				/>
			</div>
			<div className="my-3">
				<label htmlFor="Email">Email*</label>
				<input
					type="email"
					className="form-control"
					id="Email"
					placeholder="name@example.com"
				/>
			</div>
			<div className="my-3">
				<label htmlFor="Level">Your present level*</label>
				<select className="form-control" id="Level">
					<option>-select one-</option>
					<option>100</option>
					<option>200</option>
					<option>300</option>
					<option>400</option>
					<option>500</option>
					<option>Graduate</option>
					<option>Post Graduate</option>
				</select>
			</div>
			<div className="my-3">
				<label htmlFor="Unit">Unit*</label>
				<select className="form-control" id="Unit">
					<option>-select one-</option>
					<option>Choir</option>
					<option>Bible study</option>
					<option>Prayer</option>
					<option>Santuary</option>
					<option>Academic</option>
					<option>Foundational class</option>
					<option>Media</option>
					<option>Welfare</option>
					<option>Drama</option>
					<option>Protocol</option>
					<option>Planning</option>
					<option>Maintainance</option>
					<option>Library</option>
					<option>Sunday school</option>
				</select>
			</div>

			<div className="my-3">
				<label htmlFor="Address">Hostel Address*</label>
				<textarea
					className="form-control"
					id="Address"
					style={{ height: "10rem", resize: "none" }}
					placeholder="Kindly give full hostel address"></textarea>
			</div>
		</>
	);
};

const TestimonyBanner = () => {
	return (
		<main
			className="hero heroCaption testimonyBanner"
			style={{ background: `url(${banner})` }}>
			<div className="overlay"></div>
			<div className="d-flex justify-content-center align-items-center m-auto heroCaption heroCaptionText testimonyBanner">
				<div className="m-auto">
					<h2 className="text-white text-uppercase">prayers and testimonies</h2>
				</div>
			</div>
		</main>
	);
};
