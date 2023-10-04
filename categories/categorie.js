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
    if(getComputedStyle(categorie1).display != "block"){
        categorie1.style.display = "block"
    }else{
        categorie2.style.display = "none"
    }
})


bouton2.addEventListener('click', () => {
    if(getComputedStyle(categorie2).display != "block"){
        categorie2.style.display = "block"
    }else{
        categorie1.style.display = "none"
    }
})

