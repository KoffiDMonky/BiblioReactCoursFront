import "./App.css";
import Navbar from "./composants/Navbar/Navbar";
import Bibliotheque from "./composants/Bibliotheque/Bibliotheque";
import Loading from "./composants/Loading/Loading";
import React, { useEffect, useState } from "react";


//--------------------------------------- Composant App---------------------------------------------//
function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]); //Variable d'état qui permets de stocker les données de data.Json

  const getData = async () => { //Fonction permettant de récupérer les donnée de data.Json avec la méthode fetch en asynchrone
    try { //On contrôle que l'on ait bien une reponse
      const response = await fetch("./data/data.json"); //On configure l'URl permettant de récupérer les données
      const json = await response.json(); //On stock la réponse dans la variable json
      setData(json.data); //Puis on charge json dans le tableau data
    } catch (error) { //S'il n'y a pas de reponse, on lève une exception
      console.error(error);
    } finally { //Si l'on n'a bien une réponse, on passe l'état de isLoading à false pour afficher notre composant bibliothèque
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //On stock dans des variables les différentes données récupéréesnpm start que l'on aura besoin pour alimenter nos composants
  const utilisateur = data.utilisateur;
  const livre = data.livre;
  const auteur = data.auteur;
  const genre = data.genre;

  return (
    <div className="App">
      <Navbar name="Admin" />
      {isLoading ? (
        <Loading />
      ) : (
        <Bibliotheque
          utilisateur={utilisateur}
          livre={livre}
          auteur={auteur}
          genre={genre}
        />
      )}
    </div>
  );
}

export default App;
