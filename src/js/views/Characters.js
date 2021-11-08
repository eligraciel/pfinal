import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { bottom } from "@popperjs/core";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const [text,setText]=useState('');
	const [data,setData]=useState([]);

	const handleChange=(valor)=>{
	
		valor =! ''&&
			setText(valor)
		
		
	}
	useEffect(()=>{
		if(text !==''){
			fetch(
				`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${text}&ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
			)
			.then(resp => resp.json())
			.then(data => {
				console.log(data)
				setData(data.data.results)
			})
			.catch(error => console.log(error));
		}else{
			console.log('Se encuentra Vacia la consulta')
		}

	},[text])
	return (
		<>
			<div className="container">
				<h1 className="mt-4 fs-3" style={{}}>FEATURED CHARACTERS</h1>
				<div className="row">
					{store.characters.map(char => {
						return (
							<div key={char.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
								<div id="card" className="card my-4 text-center" style={{width:"150px", height: "300px" }}>
									<img
										className="card bg-dark  overflow-auto"
										style={{height:"180px", borderBottom:"4px solid red"}}
										src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h5 className="card-title text-white fs-6">{char.name}</h5>
										<Link to={`/characters/${char.id}`} className="btn btn-warning">
											Go Details
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			<div>
              <h3>BUSCADOR DE PERSONAJES</h3>
			  <form>
				  <input value={text} onChange={(e)=>handleChange(e.target.value)} type="text" className="form-control" placeholder="Find a Character"></input>
			  </form>
			  <div style={{ height: "10px" }}></div>
			  <div className="row">
					{data.map(dat => {
						return (
							<div key={dat.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
								<div id="card" className="card my-4 text-center" style={{width:"150px", height: "300px" }}>
									<img
										className="card bg-dark  overflow-auto"
										style={{height:"180px", borderBottom:"4px solid red"}}
										src={`${dat.thumbnail.path}.${dat.thumbnail.extension}`}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h5 className="card-title text-white fs-6">{dat.name}</h5>
										<Link to={`/characters/${dat.id}`} className="btn btn-warning">
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
