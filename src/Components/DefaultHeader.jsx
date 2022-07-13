import React from "react";

const DefaultHeader = ({ title, css = false, bg = false }) => {
	return (
		<div>
			<h3 className={`text-center text-uppercase ${css ? css : ""}`}>
				{title}
			</h3>
			<div className={`underline-mid mb-3 ${bg ? "mid2" : ""}`}></div>
		</div>
	);
};

export default DefaultHeader;
