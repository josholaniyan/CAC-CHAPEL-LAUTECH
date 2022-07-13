import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	let navigate = useNavigate();
	return (
		<section className="section error-page">
			<div className="d-flex justify-content-center align-content-center m-auto">
				<div className="m-auto p-4">
					<h1>404</h1>
					<div className="subtitle text-center">
						<h2>Ooops! That page does not exist!</h2>
						<p>
							You might try searching our site, or starting at our home page
						</p>
					</div>
					<div className="d-flex justify-content-center align-content-center">
						<button
							onClick={() => navigate(-1)}
							to="/"
							className="btn-outline-primary btn text-uppercase text-decoration-none">
							go back
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
