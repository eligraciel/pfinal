import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<>
			<footer style={{ height: "60px" }} className=" bg-dark text-white footer pt-3 mt-auto text-center">
				Final Proyect by <a href="https://github.com/eligraciel" target="_blank" >Eliana</a>, <a href="https://github.com/FrandyGuerra" target="_blank" >Frandy</a>, <a href="https://github.com/Edissondiaz" target="_blank" >Edisson</a> and <a href="https://github.com/JairoMaxter" target="_blank">Jairo</a>
			</footer>
		</>
	);
};
