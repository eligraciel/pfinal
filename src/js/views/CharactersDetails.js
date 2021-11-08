import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useHistory } from "react-router-dom";

export const CharactersDetails = () => {
	const { store, actions } = useContext(Context);
	const { character_id } = useParams();
	const history = useHistory();

	useEffect(() => {
		actions.getCharacter(character_id);
		actions.getCharacterEvents(character_id);
		actions.getCharacterSeries(character_id);
		actions.getCharacterComics(character_id);
		actions.getCharacterStories(character_id);
	}, []);
	return (
		<>
			<div className="container">
				<h1>Characters Details</h1>
				<h2>Series:</h2>
				<div className="row row-cols-1 row-cols-md-3 flex-nowrap overflow-auto mb-4">
					{store.series.length > 0 &&
						store.series.map(per => {
							return (
								<div
									key={per.id}
									className="card m-2 bg-dark"
									style={{ width: "300px", border: "2px solid black" }}>
									<img
										style={{
											width: "80%",
											height: "280px",
											margin: "20px auto",
											borderRadius: "10px"
										}}
										src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
										className=""
										alt="..."
									/>
									<div className="card-body">
										<h2 className="card-title fs-6 text-center text-white">{per.title}</h2>
									</div>
								</div>
							);
						})}
				</div>
				<h2>Comics: </h2>
				<div className="row row-cols-1 row-cols-md-3 flex-nowrap overflow-auto mb-4">
					{store.comics.length > 0 &&
						store.comics.map(per => {
							return (
								<div
									key={per.id}
									className="card m-2 bg-dark"
									style={{ width: "300px", border: "2px solid black" }}>
									<img
										style={{
											width: "80%",
											height: "280px",
											margin: "20px auto",
											borderRadius: "10px"
										}}
										src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
										className=""
										alt="..."
									/>
									<div className="card-body">
										<h2 className="card-title fs-6 text-center text-white">{per.title}</h2>
									</div>
								</div>
							);
						})}
				</div>
				<h2>Events: </h2>
				<div className="row row-cols-1 row-cols-md-3 flex-nowrap overflow-auto mb-4">
					{store.events.length > 0 &&
						store.events.map(per => {
							return (
								<div
									key={per.id}
									className="card m-2 bg-dark"
									style={{ width: "300px", border: "2px solid black" }}>
									<img
										style={{
											width: "80%",
											height: "280px",
											margin: "20px auto",
											borderRadius: "10px"
										}}
										src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
										className=""
										alt="..."
									/>
									<div className="card-body">
										<h2 className="card-title fs-6 text-center text-white">{per.title}</h2>
									</div>
								</div>
							);
						})}
				</div>

				<button className="btn btn-warning mb-3" onClick={history.goBack}>
					Return
				</button>

				<h2>Historias: </h2>
				{store.stories.map(per => {
					return <h6 key={per.id}>{per.title}</h6>;
				})}
			</div>
		</>
	);
};
