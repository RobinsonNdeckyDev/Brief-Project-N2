const bouton1 = document.querySelector('.cartI1');
console.log(bouton1);

const bouton2 = document.querySelector('.cartI2');
console.log(bouton2);

const categorie1 = document.querySelector('.access1');
console.log(categorie1);

const categorie2 = document.querySelector('.access2');
console.log(categorie2);

// Ma fonction show et hide

categorie2.classList.add("hidden");

bouton1.addEventListener('click', () => {
    bouton1.style.color = "#e87320";
    categorie2.classList.add("hidden");
    categorie1.classList.remove("hidden");
    bouton2.style.color = "black";
})


bouton2.addEventListener('click', () => {
    categorie2.classList.remove("hidden");
    categorie1.classList.add("hidden");
    bouton2.style.color = "#e87320";
    bouton1.style.color = "black";
})

