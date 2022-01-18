import './Modalediterutilisateur.css';
import React, { useState } from 'react';

//--------------------------------------- Composant Modal Editer Utilisateur---------------------------------------------//

class Modalediterutilisateur extends React.Component { //Classe permettant d'afficher la modal d'éditiion de l'utilisateur
    constructor(props) {
      super(props);
  
      this.state = { nom:"Durand", prenom: "Pierre" };
      this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e) { //Cette fonction permet de changer la valeur du champs
      const target = e.target; //Pour cibler l'utilisateur concerné
      const name = target.name; //On stock son nom
      const value = target.value; //On stock sa valeur
  
      this.setState({ [name]: value }); //Puis on définit le state par le nouveau nom et la nouvelle valeur
    }
  
    render() {
      const toggleModalEditer = this.props.toggleModal; //On stock la fonction toggleModalEditer()
      const utilisateur = this.props.utilisateur;
  
      const boutonFermer = ( //On définit le bouton de fermeture et lui ajoute le déclenchement de la fonction toggleModalEditer()
        <button className="close-modal btn btn-light" onClick={toggleModalEditer}>
          <i className="fas fa-times"></i>
        </button>
      );
  
      return (
        //Affichage de la fenêtre modale d'édition de l'utilisateur
        <div className="overlay">
          <div className="fenetre-modal">
            <form>
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="InputNom"
                  placeholder="Entrer un nom !"
                  value={utilisateur.nom}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="prenom">Prenom</label>
                <input
                  type="text"
                  className="form-control"
                  id="InputPrenom"
                  placeholder="Entrer un prénom !"
                  value={utilisateur.prenom}
                  onChange={this.handleInputChange}
                />
              </div>
  
              <button type="submit" className="btn btn-primary">
                Modifier
              </button>
            </form>
            {boutonFermer}
          </div>
        </div>
      );
    }
  }

export default Modalediterutilisateur