// ------------------------------------------ Boutons voir plus -------------------------------------- 

// etape  1 : Selectionner les element par leurs wid 
const bouton = document.getElementById("voirPlus");
const galeries = document.getElementById("galeries")

//etape 2 : Ajouter l'evenement (click)
bouton.addEventListener('click', () =>{
    // Si galeries est cachee -> on l'affiche
    if(galeries.style.display === "none") {
        galeries.style.display = "flex";
        bouton.textContent = "Voir moins" // change le text du bouton 
    } else {
        galeries.style.display = "none";``
        bouton.textContent = "Voir Plus"
    }
});


// ------------------------------------ formulaire de reservation ----------------------------------------


// ------------------------------------- Formulire d'envoie email -----------------------------------------