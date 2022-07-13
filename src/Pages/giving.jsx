import React from "react";
import { DefaultHeader } from "../Components";
import { toast } from "react-toastify";

const Giving = () => {
	let handleSubmit = async e => {
		e.preventDefault();
		toast.info("Done");
	};

	return (
		<section className="py-4 bg-light">
			<div className="container px-lg-5">
				<div className="shadow p-4 bg-white rounded">
					<DefaultHeader title={"give"} />
					<form className="container" style={{ maxWidth: "600px" }}>
						<p className="text-right pastorText fontReduce">
							...and whosoever sows generously will also reap generously.Each of
							you should give what you have decided in your heart to give,not
							relunctantly or under compulsion for God loves a cheerful giver(2
							cor 9:6-8)
						</p>
						<div className="my-3">
							<label htmlFor="Fullname">Full Name*</label>
							<input
								type="text"
								className="form-control"
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
							<label htmlFor="Email">Email Address*</label>
							<input
								type="email"
								className="form-control"
								id="Email"
								placeholder="name@example.com"
							/>
						</div>
						<div className="my-3">
							<label htmlFor="Amount">Amount*</label>
							<input type="number" className="form-control" id="Amount" />
						</div>

						<div className="my-3">
							<label htmlFor="Purpose">Purpose of Giving*</label>
							<select className="form-control text-capitalize" id="Purpose">
								<option>-select option-</option>
								<option value={"offering"}>As offering</option>
								<option value={"tithe"}>As Tithe</option>
								<option value={"seed"}>As A Seed</option>
								<option value={"ongoing"}>To an Ongoing Project</option>
								<option value={"upcoming"}>Towards an Upcoming Program</option>
							</select>
						</div>
						<button
							onClick={handleSubmit}
							className="btn btn-primary text-uppercase w-50 d-block mx-auto my-3">
							give
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Giving;
