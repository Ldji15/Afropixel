/*   CLASSE 2 : ListeProduit
   Contient toutes les cartes et calcule le résumé du panier.*/

import { CarteProduit } from "./CarteProduit.js";

 export class ListeProduit {
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

    // Uniquement les produits dont la quantité est supérieure à 0
    articlesChoisis() {
        return this.carteProduits.filter(carte => carte.quantite > 0);
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