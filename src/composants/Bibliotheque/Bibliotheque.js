import React from 'react';
import Utilisateurs from './../Utilisateurs/Utilisateurs';
import Livres from './../Livres/Livres';
import Listeauteurs from './../Listeauteurs/Listeauteurs';
import Listegenres from './../Listegenres/Listegenres';
import './Bibliotheque.css';

//--------------------------------------- Composant Bibliothèque---------------------------------------------//

class Bibliotheque extends React.Component {//Classe permettant d'afficher la liste d'utilisateur et leur collection de livres
    constructor(props) {
      super(props);
      this.state = {
        //On définit la valeur de "consulterBiblioUtilisateurs", "consulterLivres", "consulterAuteurs","consulterGenres" à false
        consulterBiblioUtilisateurs: false,
        consulterAuteurs: false,
        consulterGenres: false,
      };
  
      this.id = 0; // On définit l'ID à 0
    }
  
    voirUtilisateur = (e) => {// La fonction fléchée "voirUtilisateur" permet de passer "consulterBiblioUtilisateurs" à true ce qui va permettre d'afficher la collection de livre de l'utilisateur et de récupérer l'id correspond à la carte utilisateur consulté
      this.setState({
        consulterBiblioUtilisateurs: true,
        consulterAuteurs: false,
        consulterGenres: false
      });
      this.id = e.target.id; // Définit l'id correspondant à la carte consultée
    };
  
    voirAuteurs = () => {
      // La fonction fléchée "voirAuteurs" permet de passer "consulterAuteurs" à true et les autres states à false, ce qui va permettre d'afficher la liste d'auteur dans la bibliothèque
      this.setState({
        consulterBiblioUtilisateurs: false,
        consulterAuteurs: true,
        consulterGenres: false,
      });
    };
  
    voirGenres = () => {
      // La fonction fléchée "voirGenres" permet de passer "consulterGenres" à true et les autres states à false ce qui va permettre d'afficher la liste de genre dans la bibliothèque
      this.setState({
        consulterBiblioUtilisateurs: false,
        consulterAuteurs: false,
        consulterGenres: true,
      });
    };
  
    retourListeUtilisateurs = () => {
      // La fonction fléchée "retourListeUtilisateurs" permet de revenir à la liste des utilisateurs en redéfinissant tout les states à false.
      this.setState({
        consulterBiblioUtilisateurs: false,
        consulterAuteurs: false,
        consulterGenres: false,
      });
    };
  
    render() {
      const consulterBiblioUtilisateurs = this.state.consulterBiblioUtilisateurs; //Constante qui stock le state de consulterBiblioUtilisateurs
      const consulterAuteurs = this.state.consulterAuteurs; //Constante qui stock le state de consulterAuteurs
      const consulterGenres = this.state.consulterGenres; //Constante qui stock le state de consulterGenres
  
      let affichage;
      
      const utilisateur = this.props.utilisateur;
      const nomUtilisateur = this.props.utilisateur[this.id]; //Constante qui stock le nom de l'utilisateur dont on veut consulter la collection de livre
      const biblioUtilisateur = this.props.utilisateur[this.id].livresID; //Constante qui stock la collection de livre de l'utilisateur (sous forme de tableau contenant les ID des livres) dont on veut consulter la collection
      const stockLivre = this.props.livre; //On déclare la variable stockLivre pour récupérer les propriétés de livre
      const auteur = this.props.auteur; //On déclare la variable auteur pour récupérer les propriétés de auteur
      const listeGenre = this.props.genre; //On déclare la variable listeGenre pour récupérer les propriétés de genre 

  
      if (consulterBiblioUtilisateurs) {//Si consulterBiblioUtilisateurs: True, on affiche la collection de livre
        
        affichage = <Livres utilisateur={nomUtilisateur} biblio={biblioUtilisateur} stock={stockLivre} auteur={auteur}/>
  
      } else if (consulterAuteurs) { //Si consulterAuteurs: True, on affiche la liste d'auteur
  
        affichage = <Listeauteurs auteur={auteur}/>
  
      } else if (consulterGenres) { //Si consulterGenres: True, on affiche la liste de genre
  
        affichage = <Listegenres genre={listeGenre}/>
  
      } else {//Sinon on affiche la liste d'utilisateur
        
        affichage = <Utilisateurs utilisateur={utilisateur} voir={this.voirUtilisateur} />
    
      }
  
      return (
        //Affichage de la bibliothèque
        <div className="container">
          <div className="container-button">
            <button
              className="btn btn-light w-40 editer"
              onClick={this.retourListeUtilisateurs}
            >
              Utilisateurs
            </button>
            {/* <button
              className="btn btn-light w-40 editer"
              onClick={this.voirLivres}
            >
              Livres
            </button> */}
            <button className="btn btn-light w-40 editer" onClick={this.voirAuteurs}>Auteurs</button>
            <button className="btn btn-light w-40 editer" onClick={this.voirGenres}>Genres</button>
          </div>
        
            {affichage}

        </div>
      );
    }
  }

export default Bibliotheque;