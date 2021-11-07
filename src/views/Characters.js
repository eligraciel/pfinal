import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<h1>Characters</h1>
				<div className="row row-cols-1 row-cols-md-3 flex-wrap mb-3">
					{store.characters.map(char => {
						return (
							<div key={char.id} className="col-md-4">
								<div className="card bg-dark my-4" style={{ height: "600px" }}>
									<img
										className="card bg-dark m-2 overflow-auto"
										src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h5 className="card-title text-white">{char.name}</h5>
										<p className="card-text text-white">{char.description} </p>
										<Link to={`/characters/${char.id}`} className="btn btn-primary">
											Go somewhere
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
