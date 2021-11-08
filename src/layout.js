import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./js/component/scrollToTop";

import { Home } from "./js/views/Home";
import { Characters } from "./js/views/Characters";
import { CharactersDetails } from "./js/views/CharactersDetails";
import { Comics } from "./js/views/ComicView";
import { Creators } from "./js/views/Creators";
import { CreatorDetails } from "./js/views/CreatorDetails";
import { Series } from "./js/views/Series";
import injectContext from "./js/store/appContext";

import { Navbar } from "./js/component/navbar";
import { Footer } from "./js/component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/characters">
							<Characters />
						</Route>
						<Route exact path="/characters/:character_id">
							<CharactersDetails />
						</Route>
						<Route exact path="/comics">
							<Comics />
						</Route>
						<Route exact path="/creators">
							<Creators />
						</Route>
						<Route exact path="/creators/:creator_id">
							<CreatorDetails />
						</Route>
						<Route exact path="/series">
							<Series />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
