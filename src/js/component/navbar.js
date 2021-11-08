import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="bg-dark text-white m-0">
			<div className="container-fluid ">
				<div className="row">
					<div className="col border-bottom ">
						<Link to="/">
							<img
								style={{ width: "150px", height: "60px", display: "block", margin: "0 auto", padding: "10px"}}
								className="pb-2"
								src="https://acegif.com/wp-content/gifs/gif-marvel-91.gif"
							/>
						</Link>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-3 text-center paginas" style={{ borderRight: "1px solid white" }}>
							<Link style={{ textDecoration: "none", color: "white" }} to="/comics">
								Comics
							</Link>
						</div>
						<div className="col-md-3 text-center paginas" style={{ borderRight: "1px solid white" }}>
							<Link style={{ textDecoration: "none", color: "white" }} to="/characters">
								Characters
							</Link>
						</div>
						<div className="col-md-3 text-center paginas" style={{ borderRight: "1px solid white" }}>
							<Link style={{ textDecoration: "none", color: "white" }} to="/series">
								Series
							</Link>
						</div>
						<div className="col-md-3 text-center paginas">
							<Link style={{ textDecoration: "none", color: "white" }} to="/creators">
								Creators
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

