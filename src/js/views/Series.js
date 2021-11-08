import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Series = () => {
	const { store, actions } = useContext(Context);
	console.log(store.series);

	return (
		<>
			<div className="container">
				<h1>Series</h1>
				<div className="row row-cols-1 row-cols-md-3 flex-wrap mb-3">
					{store.series.map(ser => {
						return (
							<div key={ser.id} className="col-md-4">
								<div className="card bg-dark my-4" style={{ height: "auto" }}>
									<img
										className="card bg-dark m-2 overflow-auto"
										src={`${ser.thumbnail.path}.${ser.thumbnail.extension}`}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h5 className="card-title text-white">{ser.title}</h5>
										<p className="card-text text-white">{ser.description} </p>
										<Link to={`/series/${ser.id}`} className="btn btn-primary">
											More About
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