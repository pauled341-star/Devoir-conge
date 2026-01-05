

function verif(event) {

    event.preventDefault();

   const champnom = document.getElementById("nom")
   const champemail = document.getElementById("email")
   const champmessage = document.getElementById("message")


   const nom = champnom.value.trim();
   const email = champemail.value.trim();
   const message = champmessage.value.trim();

    var verification = true;

    champnom.style.border = "";
    champemail.style.border = "";
    champmessage.style.border = "";

    if(!email){
        champemail.style.border = "2px solid red"
        verification = false;
    }
    if(!nom){
        champnom.style.border = "2px solid red"
        verification = false;
    }
    if(!message){
        champmessage.style.border = "2px solid red"
        verification = false;
    }


    if(email && (!email.includes("@") || !email.includes("."))) {
        champemail.style.border = "2px solid red";
        alert("veuillez entrez une adresse email valide.");
        return false;
    }
    if(message && message.length < 150) {
        champmessage.style.border = "2px solid red";
        alert("Le message doit contenir au moins 150 caracteres.");
        return false;
    }

    if(!verification){
        alert("veuillez remplir tous les champs.");
        return false;
    }

   
   
}