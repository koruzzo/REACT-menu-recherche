import React, { useState } from "react";
import {recipes} from '../../ressources/recettes.js';

//--DEBUT--//
const ActionRE = () => {
//--ON DEFINIT LES CONSTANTES--//
    const [textRecherche, definirTextDeRecherche] = useState("");
    const [afficheBarreDeRecherche, definirBarreDeRecherche] = useState(true);

    const textDeChangement = (event) => {
        definirBarreDeRecherche(true);//TRUE POUR QUE LA BARRE DE RECHERCHE RESTE PRESENTE DANS CHAQUE CAS
        definirTextDeRecherche(event.target.value);
    };
    const grandFiltre = recipes.filter((item) =>{//FILTRE DOUBLE POUR CHERCHER EN FONCTION DU NOM MAIS AUSSI DES INGREDIENTS

        const dataFiltre = item.name.toLowerCase().includes(textRecherche.toLowerCase());//PREMIER FILTRE

        const dataFiltre2 = item.ingredients.some((item) => //ICI SOME PERMET DE CHERCHER LA CHAINE DE CARACTERE CORRESPONDANT A L'INPUT ENTRE
        item.ingredient.toLowerCase().includes(textRecherche.toLowerCase())
        );//DEUXIEME FILTRE

        return dataFiltre || dataFiltre2;//ON RETOURNE L'UN OU L'AUTRE(PERMET D'UTILISER LES DEUX AU CAS PAR CAS)
    });

        if (recipes.length === 0) {//MESSAGE D'ERREUR POUR LA PERTE DE DONNEE ICI ON AFFICHE QUAND LE TABLEAU EST VIDE
            return <p className="App-barre App-titre">ERREUR On a perdu les recettes !!!</p>;
        }

        const afficheMessageErreur = (grandFiltre.length === 0 && textRecherche !== "");//CONDITION D'AFFICHAGE POUR LE MESSAGE D'ERREUR DE CORRESPONDANCE


        //INPUT = BARRE DE RECHERCHE
        //afficheMessageErreur => CONDITION REMPLIE ET MESSAGE D'ERREUR
        //POUR LE RESTE AFFICHAGES DES VARIABLES DU TABLEAU, AFFICHAGE DE L'IMAGE EN FONCTION DE LA COMPARAISON DU NOM DE LA RECETTE ET DE L'IMAGE
        //DOUBLE MAP POUR UTILISER LES DONNEES DU TABLEAU INTERNE ustensils
    return (
        <div className="App-main2">
            <div className="App-space-barre">
                <h1>Cherchez votre recette :</h1>
                {afficheBarreDeRecherche && (<input type="text" value={textRecherche} onChange={textDeChangement} className="App-barre" />)}
            </div>

            {afficheMessageErreur && (
                <p className="App-barre App-titre">Aucun résultat trouvé pour "{textRecherche}"</p>
            )}


            {!afficheMessageErreur && (
            <div className="App-cadre">
                {grandFiltre.map((item) => (

                    <div key={item.code} className="App-cadre-recette">
                        <div className="App-cadre-image">
                            <img src={require(`../../../public/images_recettes/${item.name}.jpg`)} alt={item.nom} className="App-img" />
                        </div>
                        <h1 className="App-titre2">Nom :</h1>
                        <p className="App_para">{item.name}</p>
                        <h1 className="App-titre2">Ingredients :</h1>
                        <div className="App-cadre-para">{item.ingredients.map((item) => (
                            <p className="App_para">-{item.ingredient} : {item.quantity} {item.unit}</p>    
                        ))}
                        </div>
                        <h1 className="App-titre2">Temps de préparation :</h1>
                        <p className="App_para">{item.time} minutes</p>
                        <h1 className="App-titre2">Appareils :</h1>
                        <p className="App_para">{item.appliance}</p>

                        <h1 className="App-titre2">Ustensiles :</h1>
                        <div className="App-cadre-para">{item.ustensils.map((ustensils) => (
                            <p className="App_para">-{ustensils}</p> 
                              
                        ))}
                        </div>
                        
                        <h1 className="App-titre2">Instruction :</h1>
                        <p className="App_para">{item.description}</p>
                    </div>
                ))}
            </div>)}
        </div>
    );
};

export default ActionRE;