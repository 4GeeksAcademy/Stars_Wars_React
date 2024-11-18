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

      SacarId: (url) => {
        const id = url.slice(url.length - 2, url.length - 1).includes("/")
          ? url.slice(-1)
          : url.slice(-2);
        return id;
      },
      FiltrarTabla: (arr1, arr2) => {
        let tabla = [];
        const arrAFiltar = arr1.filter((elem) => {
          const arrBFiltrar = arr2.find((personaje) => {
            if (personaje.uid === getActions().SacarId(elem)) {
              tabla.push(personaje.name);
            }
          });
        });
        return tabla;
      },
      ConseguirDatosInvidual: async (categoria, id) => {
        try {
          const respuesta = await fetch(
            `https://www.swapi.tech/api/${
              categoria === "Character"
                ? "people"
                : categoria.toLowerCase() + "s"
            }/${id}`
          );
          let datos = await respuesta.json();
          datos = datos.result;

          switch (categoria.toLowerCase()) {
            case "character":
              const planetaUrl = datos.properties.homeworld;
              const id_planeta = getActions().SacarId(planetaUrl);

              const planeta = await getStore().Planetas.find(
                (elem) => elem.uid === id_planeta
              );

              datos = await {
                img: `https://starwars-visualguide.com/assets/img/characters/${datos.uid}.jpg`,
                nombre_planeta: planeta.name,
                id_planeta: planeta.uid,
                img_planeta: planeta.url,
                nombre: datos.properties.name,
                id: datos.uid,
                descripcion: datos.description,
                color_ojos: datos.properties.eye_color,
                genero: datos.properties.gender,
                color_pelo: datos.properties.hair_color,
                altura: datos.properties.height,
                mass: datos.properties.mass,
                color_skin: datos.properties.skin_color,
              };
              return datos;
            case "film":
              const Characters = getActions().FiltrarTabla(
                datos.properties.characters,
                getStore().personajes
              );
              const Planetas = getActions().FiltrarTabla(
                datos.properties.planets,
                getStore().Planetas
              );
              const Species = getActions().FiltrarTabla(
                datos.properties.species,
                getStore().Especies
              );
              const Starships = getActions().FiltrarTabla(
                datos.properties.starships,
                getStore().Naves
              );
              const Vehicles = getActions().FiltrarTabla(
                datos.properties.vehicles,
                getStore().Vehiculos
              );

              datos = {
                img: `https://starwars-visualguide.com/assets/img/films/${datos.properties.episode_id}.jpg`,
                characters: Characters,
                planetas: Planetas,
                especies: Species,
                naves: Starships,
                vehiculos: Vehicles,
                title: datos.properties.title,
                id: datos.uid,
                descripcion: datos.description,
                director: datos.properties.director,
                texto_apertura: datos.properties.opening_crawl,
                productor: datos.properties.producer,
                fecha_salida: datos.properties.release_date,
              };

              return datos;
            case "starship":
              const Pilotos = getActions().FiltrarTabla(
                datos.properties.pilots,
                getStore().personajes
              );

              datos = {
                pilotos: Pilotos,
                name: datos.properties.name,
                id: datos.uid,
                descripcion: datos.description,
                pasajeros: datos.properties.passengers,
                capacidad: datos.properties.cargo_capacity,
                consumables: datos.properties.consumables,
                cost: datos.properties.cost_in_credits,
                crew: datos.properties.crew,
                hyperdrive: datos.properties.hyperdrive_rating,
                largo: datos.properties.length,
                creador: datos.properties.manufacturer,
                max_speed: datos.properties.max_atmosphering_speed,
                modelo: datos.properties.model,
                class: datos.properties.starship_class,
              };
              return datos;
              break;
            case "vehicle":
              const Pilotos_vehiculos = getActions().FiltrarTabla(
                datos.properties.pilots,
                getStore().personajes
              );
              datos = {
                pilotos: Pilotos_vehiculos,
                name: datos.properties.name,
                id: datos.uid,
                descripcion: datos.description,
                pasajeros: datos.properties.passengers,
                capacidad: datos.properties.cargo_capacity,
                consumables: datos.properties.consumables,
                cost: datos.properties.cost_in_credits,
                crew: datos.properties.crew,
                hyperdrive: datos.properties.hyperdrive_rating,
                largo: datos.properties.length,
                creador: datos.properties.manufacturer,
                max_speed: datos.properties.max_atmosphering_speed,
                modelo: datos.properties.model,
                class: datos.properties.starship_class,
              };
              return datos;
              break;
            case "specie":
              const people = getActions().FiltrarTabla(
                datos.properties.people,
                getStore().personajes
              );
              const PlanetaUrl = datos.properties.homeworld;
              const Id_planeta = getActions().SacarId(PlanetaUrl);

              const Planeta = getStore().Planetas.find(
                (elem) => elem.uid === Id_planeta
              );

              datos = {
                nombre_planeta: Planeta.name,
                id_planeta: Planeta.uid,
                img_planeta: Planeta.url,
                people: people,
                heigth: datos.properties.average_height,
                lifespan: datos.properties.average_lifespan,
                id: datos.uid,
                descripcion: datos.description,
                clasificacion: datos.properties.classification,
                designacion: datos.properties.designation,
                color_ojos: datos.properties.eye_colors,
                color_pelo: datos.properties.hair_colors,
                lenguaje: datos.properties.language,
                name: datos.properties.name,
              };
              return datos;
              break;
            case "planet":
              datos = {
                name: datos.properties.name,
                clima: datos.properties.climate,
                diametro: datos.properties.diameter,
                id: datos.uid,
                descripcion: datos.description,
                gravedad: datos.properties.gravity,
                periodo_orbital: datos.properties.orbital_period,
                popular: datos.properties.population,
                velocidad: datos.properties.rotation_period,
                water_surface: datos.properties.surface_water,
                terreno: datos.properties.terrain,
              };

              return datos;
              break;
            default:
              break;
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
