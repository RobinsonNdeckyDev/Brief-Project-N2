const bouton1 = document.querySelector('.cartI1');
console.log(bouton1);

const bouton2 = document.querySelector('.cartI2');
console.log(bouton2);

const categorie1 = document.querySelector('.access1');
console.log(categorie1);

const categorie2 = document.querySelector('.access2');
console.log(categorie2);

// Ma fonction show et hide


bouton1.addEventListener('click', () => {
    bouton1.style.color = "#e87320";
    categorie2.classList.add("hidden")
})


bouton2.addEventListener('click', () => {
    categorie2.style.display="block";
    categorie1.classList.remove("show");
    bouton2.style.color = "#e87320";
})

