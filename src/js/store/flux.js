const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      All: [],
      personajes: [],
      Naves: [],
      Peliculas: [],
      Especies: [],
      Vehiculos: [],
      Planetas: [],
      Favoritos: [],
      Valor: 10,
    },
    actions: {
      // Use getActions to call a functiaon within a fuction
      CambiarValor: (num) => {
        setStore({
          Valor: num,
        });
      },
      ConseguirPersonajes: async () => {
        try {
          const respuesta = await fetch(
            `https://www.swapi.tech/api/people?page=0&limit=100`
          );
          let datos = await respuesta.json();
          datos = datos.results;

          datos.map((elem) => {
            datos = {
              uid: elem.uid,
              name: elem.name,
              url: `https://starwars-visualguide.com/assets/img/characters/${elem.uid}.jpg`,
            };
            setStore({
              personajes: [...getStore().personajes, datos],
              All: [...getStore().All, datos],
            });
          });
        } catch (error) {
          console.log(error);
        }
      },
      ConseguirVehiculos: async () => {
        try {
          const respuesta = await fetch(
            `https://www.swapi.tech/api/vehicles?page=0&limit=100`
          );
          let datos = await respuesta.json();
          datos = datos.results;

          datos.map((elem) => {
            datos = {
              uid: elem.uid,
              name: elem.name,
              url: `https://starwars-visualguide.com/assets/img/vehicles/${elem.uid}.jpg`,
            };
            setStore({
              Vehiculos: [...getStore().Vehiculos, datos],
              All: [...getStore().All, datos],
            });
          });
        } catch (error) {
          console.log(error);
        }
      },
      ConseguirPlanetas: async () => {
        try {
          const respuesta = await fetch(
            `https://www.swapi.tech/api/planets?page=0&limit=100`
          );
          let datos = await respuesta.json();
          datos = datos.results;

          datos.map((elem) => {
            datos = {
              uid: elem.uid,
              name: elem.name,
              url: `https://starwars-visualguide.com/assets/img/planets/${elem.uid}.jpg`,
            };
            setStore({
              Planetas: [...getStore().Planetas, datos],
              All: [...getStore().All, datos],
            });
          });
        } catch (error) {
          console.log(error);
        }
      },
      ConseguirPeliculas: async () => {
        try {
          const respuesta = await fetch(
            `https://www.swapi.tech/api/films?page=0&limit=100`
          );
          let datos = await respuesta.json();
          datos = datos.result;

          datos.map((elem) => {
            datos = {
              uid: elem.properties.episode_id,
              name: elem.properties.title,
              url: `https://starwars-visualguide.com/assets/img/films/${elem.properties.episode_id}.jpg`,
            };
            setStore({
              Peliculas: [...getStore().Peliculas, datos],
              All: [...getStore().All, datos],
            });
          });
        } catch (error) {
          console.log(error);
        }
      },
      ConseguirEspecies: async () => {
        try {
          const respuesta = await fetch(
            `https://www.swapi.tech/api/species?page=0&limit=100`
          );
          let datos = await respuesta.json();
          datos = datos.results;

          datos.map((elem) => {
            datos = {
              uid: elem.uid,
              name: elem.name,
              url: `https://starwars-visualguide.com/assets/img/species/${elem.uid}.jpg`,
            };
            setStore({
              Especies: [...getStore().Especies, datos],
              All: [...getStore().All, datos],
            });
          });
        } catch (error) {
          console.log(error);
        }
      },
      ConseguirNaves: async () => {
        try {
          const respuesta = await fetch(
            `https://www.swapi.tech/api/starships?page=0&limit=100`
          );
          let datos = await respuesta.json();
          datos = datos.results;

          datos.map((elem) => {
            datos = {
              uid: elem.uid,
              name: elem.name,
              url: `https://starwars-visualguide.com/assets/img/starships/${elem.uid}.jpg`,
            };
            setStore({
              Naves: [...getStore().Naves, datos],
              All: [...getStore().All, datos],
            });
          });
        } catch (error) {
          console.log(error);
        }
      },

      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
    },
  };
};

export default getState;
