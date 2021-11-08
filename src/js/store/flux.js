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
			url:
				"https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7",
			url2:
				"https://gateway.marvel.com/v1/public/creators?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7",
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
			}
		}
	};
};

export default getState;
