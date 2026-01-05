

function verif() {
    var email = document.getElementById("email");
    var nom = document.getElementById("nom");
    var message = document.getElementById("message");

    var valide = true;

    
    email.classList.remove("error");
    nom.classList.remove("error");
    message.classList.remove("error");

    
    if (email.value === "") {
        email.classList.add("error");
        valide = false;
    }

    if (nom.value === "") {
        nom.classList.add("error");
        valide = false;
    }

    if (message.value === "") {
        message.classList.add("error");
        valide = false;
    }

    if (!valide) {
        alert("Veuillez remplir tous les champs.");
        return false;
    }

    
    if (!email.value.includes("@") || !email.value.includes(".")) {
        alert("Adresse email invalide.");
        email.classList.add("error");
        return false;
    }


    if (message.value.length < 150) {
        alert("Le message doit contenir au moins 150 caractères.");
        message.classList.add("error");
        return false;
    }
}