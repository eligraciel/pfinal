/*import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Comics = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="contenedor">
			<h1>Comics</h1>
			<div className="scroll">
				<div className="row">
					{store.Comics.map((item, index) => {
						return (
							<div className="col-4" key={index}>
								<Card name={item.name} url={item.url} it={"/ComicView/" + index} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};*/
