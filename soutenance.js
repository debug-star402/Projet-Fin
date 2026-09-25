let p = require("prompt-sync")();
let arr = [];

function AjouterCandidat(arr){
    let carteIdentiter = p("Saisir votre CIN: ");
    let candidatNom = p("Saisir votre Nom: ");
    let candidatPrenom = p("Saisir votre prenom: ");
    let partiPolitiqueCandidat = p("Saisir votre partis politique: ");
    let candidatAge = p("Saisir votre age: ");
    let electeurCandidat = [];
    let objet = {cin: carteIdentiter, nom: candidatNom, prenom: candidatPrenom, partipolitique: partiPolitiqueCandidat, age: candidatAge, electeurs: electeurCandidat};
    arr.push(objet);
}

function electoralCandidats(arr){
    let choix;
    console.log("______Menu: _____________________________________")
    console.log("")
    console.log(`1. Ajouter un nouveau candidat :`)
    console.log("2. Ajouter plusieurs candidats à la fois: ")
    console.log("3. Afficher la liste des candidats : ")
    console.log("4. Voter pour un candidat : ")
    console.log("5. Modifier les informations d'un candidat : ")
    console.log("6. Supprimer un candidat : ")
    console.log("7. Rechercher des candidats : ")
    console.log("8. Statistiques de l'élection : ")
    console.log("0. Quitter. ")
    console.log("________________________________________________")

    choix = Number(p("Saisir votre choix: "));
    while (choix < 0 || choix > 8){
        choix = Number(p("Choix invalid. Veiller saisir un nombre correspendant: "))
    }
    switch (choix){
        case 1:

    }
}

electoralCandidats(arr);