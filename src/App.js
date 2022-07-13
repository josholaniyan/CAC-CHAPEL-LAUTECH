import "./App.css";
import DataProvider from "./Context";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import $ from "jquery";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Router";

// Preloader
$(window).on("load", function () {
	$(".lds-ellipsis").fadeOut(); // will first fade out the loading animation
	$(".preloader").delay(333).fadeOut("slow"); // will fade out the white DIV that covers the website.
	$("body").delay(333);
});

const App = () => {
	return (
		<DataProvider>
			<Router>
				<Routers />
			</Router>
		</DataProvider>
	);
};

export default App;
