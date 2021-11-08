import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Series = () => {
	const { store, actions } = useContext(Context);
	const [text, setText] = useState('');
	const [data, setData] = useState([]);
	console.log(store.series);

	const handleChange = (valor) => {

		valor = ! '' &&
			setText(valor)


	}
	useEffect(() => {
		if (text !== '') {
			fetch(
				`https://gateway.marvel.com/v1/public/series?titleStartsWith=${text}&ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
			)
				.then(resp => resp.json())
				.then(data => {
					console.log(data)
					setData(data.data.results)
				})
				.catch(error => console.log(error));
		} else {
			console.log('Se encuentra Vacia la consulta')
		}

	}, [text])
	return (
		<>
			<div className="container">
				<h1>Series</h1>
				<div className="row row-cols-1 row-cols-md-3 flex-wrap mb-3">
					{store.series.map(ser => {
						return (
							<div key={ser.id} className="col-lg-3 col-md-4 col-sm-4 col-6">
								<div i className="card bg-dark my-4" style={{ height: "auto" }}>
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
				<div>
					<h3>Buscador de Series</h3>
					<form>
						<input value={text} onChange={(e) => handleChange(e.target.value)} type="text" className="form-control" placeholder="Find a Character"></input>
					</form>
					<div style={{height:"10px"}}></div>
					<div className="row">
						{data.map(dat => {
							return (
								<div key={dat.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
									<div id="card" className="card my-4 text-center" style={{ width: "150px", height: "300px" }}>
										<img
											className="card bg-dark  overflow-auto"
											style={{ height: "180px", borderBottom: "4px solid red" }}
											src={`${dat.thumbnail.path}.${dat.thumbnail.extension}`}
											alt="Card image cap"
										/>
										<div className="card-body">
											<h5 className="card-title text-white fs-6">{dat.name}</h5>
											<Link to={`/series/${dat.id}`} className="btn btn-warning">
												Go Details
											</Link>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};