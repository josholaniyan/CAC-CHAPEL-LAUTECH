import React, { createElement } from "react";
import { useParams } from "react-router-dom";
import { ErrorPage } from "./Components";

const generatePage = (pageName, folder) => {
	let component = () => require(`./${folder}/${pageName}`).default;
	try {
		return createElement(component());
	} catch (error) {
		return <ErrorPage />;
	}
};

const PageRender = () => {
	const { page, id } = useParams();
	let pageName = "";

	if (id) {
		pageName = `${page}/${"[id]"}`;
	} else {
		pageName = `${page}`;
	}

	return generatePage(pageName, "Pages");
};

export default PageRender;
