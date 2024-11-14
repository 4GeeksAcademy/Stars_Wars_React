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
      QuitarFavoritos: (nombre) => {
        let TablaFiltrada = getStore().Favoritos.filter(
          (elem) => elem.name != nombre
        );
        console.log(TablaFiltrada);
        if (TablaFiltrada.length === 0) {
          setStore({
            Favoritos: [],
          });
        }
        setStore({
          Favoritos: TablaFiltrada,
        });
        // TablaFiltrada.length <= 0
        //   ? setStore({
        //       Favoritos: [],
        //     })
        //   : setStore({
        //       Favoritos: [TablaFiltrada],
        //     });
      },
      AgregarFavoritos: ({ uid, name, img, categoria }) => {
        const objeto = {
          name: name,
          uid: uid,
          img: img,
          categoria: categoria,
        };
        setStore({
          Favoritos: [...getStore().Favoritos, objeto],
        });
      },
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
              categoria: "Character",
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
              categoria: "Vehicle",
              uid: elem.uid,
              name: elem.name,
              url:
                elem.uid > 42
                  ? "https://www.historylatam.com/sites/default/files/styles/facebook_card_1200x630/public/images/2023/08/11/Pregunta%20espacial.jpg"
                  : `https://starwars-visualguide.com/assets/img/vehicles/${elem.uid}.jpg`,
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
              categoria: "Planet",
              uid: elem.uid,
              name: elem.name,
              url:
                elem.uid === "1" || elem.uid == 20 || elem.uid > 21
                  ? "https://img.freepik.com/fotos-premium/ilustracion-enorme-signo-interrogacion-planeta-tierra-imagen-generada-ia_1009902-10826.jpg"
                  : `https://starwars-visualguide.com/assets/img/planets/${elem.uid}.jpg`,
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
              categoria: "Film",
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
              categoria: "Specie",
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
              categoria: "Starship",
              uid: elem.uid,
              name: elem.name,
              url:
                elem.uid == 2 ||
                elem.uid == 3 ||
                elem.uid == 17 ||
                elem.uid == 32 ||
                elem.uid > 48
                  ? "https://www.historylatam.com/sites/default/files/styles/facebook_card_1200x630/public/images/2023/08/11/Pregunta%20espacial.jpg"
                  : `https://starwars-visualguide.com/assets/img/starships/${elem.uid}.jpg`,
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
    },
  };
};

export default getState;
