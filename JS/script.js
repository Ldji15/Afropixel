// On importe le tableau "pictures" depuis le fichier pictures.js
import { pictures } from "./pictures.js";

/* 
   CLASSE 1 : CarteProduit
   Représente UN produit : ses infos + la quantité choisie.*/
class CarteProduit {
    constructor(id, nom, prix, categorie, url) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.categorie = categorie;
        this.url = url;
        this.quantite = 0; // au départ, rien n'est choisi
    }

    ajouter() {
        this.quantite = this.quantite + 1;
    }

    retirer() {
        if (this.quantite > 0) {
            this.quantite = this.quantite - 1;
        }
    }

    // Fabrique le HTML de la carte (ne l'affiche pas, renvoie juste du texte)
    // data-id     : à quel produit appartient le clic
    // data-action : ce que fait le bouton (ajouter ou retirer)
    // data-qte    : repère le chiffre à mettre à jour
    rendre() {
        return `
            <div class="shape_carte_produit">
                <img class="image_produit" src="${this.url}" alt="${this.nom}" data-id="${this.id}">
                <div>${this.nom}</div>
                <div>${this.prix} CFA</div>
                <div class="div_actions">
                    <button data-id="${this.id}" data-action="ajouter">+</button>
                    <span data-qte="${this.id}">${this.quantite}</span>
                    <button data-id="${this.id}" data-action="retirer">-</button>
                </div>
            </div>
        `;
    }
}

/*   CLASSE 2 : ListeProduit
   Contient toutes les cartes et calcule le résumé du panier.*/
class ListeProduit {
    constructor(pictures) {
        this.carteProduits = [];
        // On crée une CarteProduit pour chaque objet du tableau
        for (const picture of pictures) {
            this.carteProduits.push(
                new CarteProduit(picture.id, picture.nom, picture.prix, picture.categorie, picture.url)
				// CarteProduit{pictures} est aussi possible
            );
        }
    }

    // Retrouve une carte grâce à son id
    trouver(id) {
        return this.carteProduits.find(carte => carte.id === id);
    }

    // Nombre total d'articles choisis
    nombreArticles() {
        let nombre = 0;
        for (const carte of this.carteProduits) {
            nombre = nombre + carte.quantite;
        }
        return nombre;
    }

    // Somme totale : quantité x prix, pour chaque carte
    montantTotal() {
        let total = 0;
        for (const carte of this.carteProduits) {
            total = total + carte.quantite * carte.prix;
        }
        return total;
    }

    // Fabrique le HTML de toute la grille
    rendre() {
        let rendu = '';
        for (const carteProduit of this.carteProduits) {
            rendu += carteProduit.rendre();
        }
        return `<div class="liste_produits">${rendu}</div>`;
    }
}


const liste_produits = new ListeProduit(pictures);

const photo = document.getElementById('photo');
const popup = document.getElementById('popup');  // popup référence code ligthbox de ing1
const popupContenu = document.getElementById('popup-contenu');

// On affiche la grille dans #photo
photo.innerHTML = liste_produits.rendre();