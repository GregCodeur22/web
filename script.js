// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

let nav = document.getElementById("navbar");
let img = document.getElementById("imgImprovise");
let popUp = document.getElementById("popup");
let close = document.getElementById("closeBtn");
let play = true;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 90) {
    nav.style.height = "40px";
  } else {
    nav.style.height = "90px";
  }

  let value =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  //image
  if (value > 0.45) {
    img.style.opacity = 1;
    img.style.transform = "none";
  }
  //popUp
  if (value > 0.85 && play) {
    popUp.style.opacity = "1";
    popUp.style.transform = "none";
    play = false;
  }
});

close.addEventListener("click", () => {
  popUp.style.opacity = 0;
  popUp.style.transform = "translateX(500px)";
});
