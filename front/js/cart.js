"use strict"

// 1- récupérer les datas du local Storage


function getCart() {
let panier = JSON.parse(localStorage.getItem("panier"));
return panier
}

const panier = getCart();

for (const article of panier) {
    console.log(article)
     fetch(`http://localhost:3000/api/products/${article.id}`)
    .then (res=> res.json()) //reponse au format Json
    .then(detailsArticle=> { 
        console.log(detailsArticle);
        
let section = document.getElementById("cart__items");
console.log(section);

let createArticle = document.createElement("article");
createArticle.classList.add("cart__item") ;
createArticle.setAttribute("data-id",article.id);
createArticle.setAttribute("data-color",article.couleur)

//ajout de la div cart__item__img
let cartItemImg = document.createElement("div");
cartItemImg.classList.add("cart__item__img");
createArticle.appendChild(cartItemImg);

//creation de l'image dans la div cart__item__img
let img = document.createElement("img");
img.src = detailsArticle.imageUrl;
img.alt = detailsArticle.altTxt;
cartItemImg.append(img);

let divCartItemContent = document.createElement("div");
divCartItemContent.classList.add( "cart__item__content");

//ajout de cart__item__content
createArticle.append(divCartItemContent);
console.log(divCartItemContent);

//creation de la div cart__item__content__description
let cartItemContentDescription = document.createElement("div");
cartItemContentDescription.classList.add("cart__item__content__description");

let h2 = document.createElement("h2");
h2.textContent = detailsArticle.name;
console.log(h2)

let pColor = document.createElement("p");
pColor.textContent = article.couleur;
console.log(pColor)

let pPrice = document.createElement("p");
pPrice.textContent = detailsArticle.price   + " €";
console.log(pPrice)

cartItemContentDescription.append(h2, pColor, pPrice);

let cartItemContentSettings = document.createElement("div");
cartItemContentSettings.classList.add("cart__item__content__settings") ;
console.log(cartItemContentSettings);

let cartItemContentSettingsQuantity = document.createElement("div");
console.log(cartItemContentSettingsQuantity)
let paragraphQuantite = document.createElement("p");
paragraphQuantite.textContent = "Qté :";

let input = document.createElement("input");
input.setAttribute("type", "number");
input.setAttribute("class", "itemQuantity");
input.setAttribute("name", "itemQuantity");
input.setAttribute("min", "1");
input.setAttribute("max", "100");
input.setAttribute("value", article.quantite);

cartItemContentSettingsQuantity.append(paragraphQuantite, input)
cartItemContentSettings.append(cartItemContentSettingsQuantity);

let cartItemContentSettingsDelete = document.createElement("div");
cartItemContentSettingsDelete.className = "cart__item__content__settings__delete";
console.log(cartItemContentSettingsDelete);

let pDelete = document.createElement("p");
pDelete.classList.add("deleteItem");
pDelete.textContent = "Supprimer";
cartItemContentSettingsDelete.append(pDelete);
cartItemContentSettings.append(cartItemContentSettingsDelete);

console.log(pDelete)

divCartItemContent.append(cartItemContentDescription, cartItemContentSettings)
section.append(createArticle);

}


)
.catch(()=> alert("Désole, il y a une erreur dans l'affichage du produit."))
}
