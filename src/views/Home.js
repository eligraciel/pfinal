import React from "react";
import "../../styles/home.scss";

export const Home = () => (
	<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
		<div className="carousel-inner" style={{ height: "79vh" }}>
			<div className="carousel-item active">
				<img
					src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5beaba975bafe86f2c2b41c4/marvel-heroes_0.jpg"
					className="d-block w-100"
					alt="..."
				/>
			</div>
			<div className="carousel-item">
				<img
					src="https://as.com/meristation/imagenes/2021/04/27/noticias/1619508485_761671_1619509003_noticia_normal.jpg"
					className="d-block w-100"
					alt="..."
				/>
			</div>
			<div className="carousel-item">
				<img
					src="https://media.vandal.net/i/640x360/10-2020/2020102013243495_1.jpg"
					className="d-block w-100"
					alt="..."
				/>
			</div>
		</div>
		<button
			className="carousel-control-prev"
			type="button"
			data-bs-target="#carouselExampleControls"
			data-bs-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true" />
			<span className="visually-hidden">Previous</span>
		</button>
		<button
			className="carousel-control-next"
			type="button"
			data-bs-target="#carouselExampleControls"
			data-bs-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true" />
			<span className="visually-hidden">Next</span>
		</button>
	</div>
);