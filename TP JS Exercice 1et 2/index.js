
var compteur = 0;

function nbclic() {
    compteur++;

    document.getElementById("nbclic").textContent
    = compteur
}





function calmoyenne() {
    var note1 = parseFloat(document.getElementById("note1").value);
    var note2 = parseFloat(document.getElementById("note2").value);
    var note3 = parseFloat(document.getElementById("note3").value);

    var moyenne = (note1 + note2 + note3) / 3;

    document.getElementById("resultat").value
    =moyenne
}