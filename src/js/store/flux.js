import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			//comics: [],
			//detailsComics: [],
			characters: [],
			charactersId: [],
			personaje: [],
			comics: [],
			series: [],
			stories: [],
			events: [],

			creators: [],
			creadorId: [],
			creador: [],
			creatComics: [],
			creatEvents: [],
			creatStories: [],
			creatSeries: [],

			seriesByMaxter: [],
			seriesId: [],
			seriesTv: [],
			charactersByMaxter: [],
			comicsByMaxter: [],
			creadorsByMaxter: [],
			eventsByMaxter: [],
			storiesByMaxter: [],



			url:
				"https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7",
			url2:
				"https://gateway.marvel.com/v1/public/creators?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7",
			url3:
				"https://gateway.marvel.com/v1/public/series?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7",

			hash: "a24cd1d9263d7ae351b842fa38b4ebd7",
			apikeypublic: "d5fa6ff9a3c0a73538e2ea2229a4b3e8",
			apikeyprivate: "5e1ab9819c96bbdb36468ccbf3535ead709cda3b"
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			// Seccion de Personajes By FrandyGuerra---------------------------------------------------------------------------------
			
			getCharacters: () => {
				fetch(getStore().url)
					.then(resp => resp.json())
					.then(data => {
						console.log(data.data.results);
						setStore({ characters: data.data.results });
					})
					.catch(error => console.log(error));
			},
			getCharacter: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Personaje", data.data.results);
						setStore({ personaje: data.data.results });
						console.log(getStore().personaje);

						setStore({
							charactersId: getStore().charactersId.concat(getStore().personaje)
						});
					})
					.catch(error => console.log(error));
			},
			getCharacterComics: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Comics", data.data.results);
						setStore({ comics: data.data.results });
						setStore({
							charactersId: getStore().charactersId.concat(getStore().comics)
						});
					})
					.catch(error => console.log(error));
			},
			getCharacterSeries: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/characters/${id}/series?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Series", data.data.results);
						setStore({ series: data.data.results });
						setStore({
							charactersId: getStore().charactersId.concat(getStore().series)
						});
					})
					.catch(error => console.log(error));
			},
			getCharacterEvents: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/characters/${id}/events?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Eventos", data.data.results);
						setStore({ events: data.data.results });
						setStore({
							charactersId: getStore().charactersId.concat(getStore().events)
						});
						console.log(getStore().charactersId);
					})
					.catch(error => console.log(error));
			},
			getCharacterStories: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/characters/${id}/stories?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Historias", data.data.results);
						setStore({ stories: data.data.results });
						setStore({
							charactersId: getStore().charactersId.concat(getStore().stories)
						});
						// console.log(getStore().charactersId);
					})
					.catch(error => console.log(error));
			},

			// Seccion de Creadores By eligraciel----------------------------------------------------------------------------------------

			getCreators: () => {
				fetch(getStore().url2)
					.then(resp => resp.json())
					.then(data => {
						console.log(data.data.results);
						setStore({ creators: data.data.results });
					})
					.catch(error => console.log(error));
			},

			getCreator: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/creators/${id}?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Creador", data.data.results);
						setStore({ creador: data.data.results });
						console.log(getStore().creador);
						setStore({
							creadorId: getStore().creadorId.concat(getStore().creador)
						});
					})
					.catch(error => console.log(error));
			},
			getCreatorComics: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/creators/${id}/comics?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Comics", data.data.results);
						setStore({ creatComics: data.data.results });
						console.log(getStore().creatComics);
						setStore({
							creadorId: getStore().creadorId.concat(getStore().creatComics)
						});
					})
					.catch(error => console.log(error));
			},
			getCreatorSeries: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/creators/${id}/series?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Series", data.data.results);
						setStore({ creatSeries: data.data.results });
						console.log(getStore().creatComics);
						setStore({
							creadorId: getStore().creadorId.concat(getStore().creatSeries)
						});
					})
					.catch(error => console.log(error));
			},
			getCreatorEvents: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/creators/${id}/events?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Eventos", data.data.results);
						setStore({ creatEvents: data.data.results });
						console.log(getStore().creatComics);
						setStore({
							creadorId: getStore().creadorId.concat(getStore().creatEvents)
						});
					})
					.catch(error => console.log(error));
			},
			getCreatorStories: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/creators/${id}/stories?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Historias", data.data.results);
						setStore({ creatStories: data.data.results });
						console.log(getStore().creatComics);

						setStore({
							creadorId: getStore().creadorId.concat(getStore().creatStories)
						});
					})
					.catch(error => console.log(error));
			},

			//Seccion de Series By Maxter--------------------------------------------------------------------------------------------

			getSeriesByMaxter: () => {
				fetch(getStore().url3)
					.then(resp => resp.json())
					.then(data => {
						console.log(data.data.results);
						setStore({ seriesByMaxter: data.data.results });
					})
					.catch(error => console.log(error));
			},
			getSerieByMaxter: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/series/${id}?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("SerieByMaxter", data.data.results);
						setStore({ seriesTv: data.data.results });
						console.log(getStore().seriesTv);

						setStore({
							seriesId: getStore().seriesId.concat(getStore().seriesTv)
						});
					})
					.catch(error => console.log(error));
			},
			getSerieCharacter: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/series/${id}/characters?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("CharactersByMaxter", data.data.results);
						setStore({ charactersByMaxter: data.data.results });
						setStore({
							seriesId: getStore().seriesId.concat(getStore().charactersByMaxter)
						});
					})
					.catch(error => console.log(error));
			},
			getSerieComics: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/series/${id}/comics?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("ComicsByMaxter", data.data.results);
						setStore({ comicsByMaxter: data.data.results });
						setStore({
							seriesId: getStore().seriesId.concat(getStore().comicsByMaxter)
						});
					})
					.catch(error => console.log(error));
			},
			getSerieCreator: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/series/${id}/creators?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("CreatorsByMaxter", data.data.results);
						setStore({ creadorsByMaxter: data.data.results });
						console.log(getStore().creatComics);
						setStore({
							seriesId: getStore().seriesId.concat(getStore().creadorsByMaxter)
						});
					})
					.catch(error => console.log(error));
			},
			getSerieEvents: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/Series/${id}/events?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("EventosByMaxter", data.data.results);
						setStore({ eventsByMaxter: data.data.results });
						setStore({
							seriesId: getStore().seriesId.concat(getStore().eventsByMaxter)
						});
						console.log(getStore().charactersId);
					})
					.catch(error => console.log(error));
			},
			getSerieStories: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/series/${id}/stories?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("StoriesByMaxter", data.data.results);
						setStore({ storiesByMaxter: data.data.results });
						setStore({
							seriesId: getStore().seriesId.concat(getStore().storiesByMaxter)
						});
					})
					.catch(error => console.log(error));
			},

		}
	};
};

export default getState;
