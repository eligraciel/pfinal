import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Creators = () => {
	const { store, actions } = useContext(Context);
	console.log(store.creators);

	return (
		<>
			<div className="container">
				<h1>Creators</h1>
				<div className="row row-cols-1 row-cols-md-3 flex-wrap mb-3">
					{store.creators.map(creator => {
						return (
							<div key={creator.id} className="col-md-4">
								<div className="card bg-dark my-4" style={{ height: "500px" }}>
									<img
										className="card bg-dark m-2 overflow-auto"
										src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h5 className="card-title text-white">{creator.fullName}</h5>
										<Link to={`/creators/${creator.id}`} className="btn btn-primary">
											Go Details
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
