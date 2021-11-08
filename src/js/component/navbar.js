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
								style={{ width: "150px", height: "50px", display: "block", margin: "0 auto" }}
								className="pb-2"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
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

