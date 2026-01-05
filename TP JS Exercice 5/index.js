var age;

do {
    age = prompt("Entrez votre âge :");
} while (age === "" || age === null || isNaN(age) || age <= 0);


var message = "Nombres premiers : ";
var somme = 0;
var compteur = 0;


for (var n = 2; n <= 100; n++) {

    var premier = true;

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            premier = false;
            break;
        }
    }

    if (premier) {
        message += n;
        somme += n;
        compteur++;

        if (n < 97) {
            message += ", ";
        }
    }
}


var moyenne = somme / compteur;


alert(
    message +
    " \nSomme : " + somme +
    " \nMoyenne : " + moyenne.toFixed(2)
);