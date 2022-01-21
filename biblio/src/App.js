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
    try {
      const response = await fetch("./data/data.json"); //On configure l'URl permettant de récupérer les données
      const json = await response.json(); //On stock la réponse dans la variable json
      setData(json.data); //Puis on charge json dans le tableau data
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
