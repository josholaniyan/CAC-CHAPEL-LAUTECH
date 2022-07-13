import React, { createContext } from "react";
import { BsHouse, BsChat, BsGift, BsGlobe } from "react-icons/bs";
import { FaIdCard } from "react-icons/fa";

export const GlobalState = createContext();

const DataProvider = ({ children }) => {
	let headerList = [
		{
			name: "home",
			url: "/",
			icon: <BsHouse size={20} />,
		},
		{
			name: "about",
			url: "/about",
			icon: <FaIdCard size={20} />,
		},
		{
			name: "feedback",
			url: "/feedback",
			icon: <BsChat size={20} />,
		},
		{
			name: "media",
			url: "/media",
			icon: <BsGlobe size={20} />,
		},
		{
			name: "giving",
			url: "/giving",
			icon: <BsGift size={20} />,
		},
	];

	let state = { headerList };
	return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};

export default DataProvider;
