const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      All: [],
      personajes: [],
      DatosPersonajes: [],
      Naves: [],
      Peliculas: [],
      Especies: [],
      Vehiculos: [],
      Planetas: [],
    },
    actions: {
      // Use getActions to call a functiaon within a fuction

      ConseguirDatosPersonajes: (Personajes) => {
        Personajes.map(async (element) => {
          try {
            const respuesta = await fetch(`${element.url}`);
            let datos = await respuesta.json();

            datos = {
              id: element.uid,
              gender: datos.result.properties.gender,
              height: datos.result.properties.height,
              name: datos.result.properties.name,
              img: `https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`,
            };
            await setStore({
              DatosPersonajes: [...getStore().DatosPersonajes, datos],
              All: [...getStore().All, datos],
            });
          } catch (error) {
            console.log(error);
          }
        });
      },
      ConseguirPersonajes: async () => {
        try {
          const respuesta = await fetch(
            `https://www.swapi.tech/api/people?page=0&limit=100`
          );
          const datos = await respuesta.json();
          console.log(datos);
          setStore({ personajes: datos.results });
          getActions().ConseguirDatosPersonajes(datos.results);
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
          console.log(respuesta);
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
