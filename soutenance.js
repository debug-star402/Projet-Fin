let p = require("prompt-sync")();
let arr = [];
let carteIdentiter;
let candidatNom;
let candidatPrenom;
let partiPolitiqueCandidat;
let candidatAge;
let electeurCandidat = [];
let objet = {cin: carteIdentiter, nom: candidatNom, prenom: candidatPrenom, partipolitique: partiPolitiqueCandidat, age: candidatAge, electeurs: electeurCandidat};

function AjouterCandidat(arr){
    carteIdentiter = p("Saisir votre CIN: ");
    candidatNom = p("Saisir votre Nom: ");
    candidatPrenom = p("Saisir votre prenom: ");
    partiPolitiqueCandidat = p("Saisir votre partis politique: ");
    candidatAge = Number(p("Saisir votre age: "));
    electeurCandidat = [];
    objet = {cin: carteIdentiter, nom: candidatNom, prenom: candidatPrenom, partipolitique: partiPolitiqueCandidat, age: candidatAge, electeurs: electeurCandidat};
    arr.push(objet);
}

function afficherCandidat(arr){
    for (let i = 0; i < arr.length; i++){
        console.log("")
        console.log("****************************************")
        console.log("****************************************")
        console.log("")
        console.log(`# Candidat ${i+1}: `);
        for (let obj in arr[i]){
            if (obj == "cin")
                console.log(`CIN: ${arr[i].cin}`);
            else if (obj == "nom")
                console.log(`Nom: ${arr[i].nom}`);
            else if (obj == "prenom")
                console.log(`Prenom: ${arr[i].prenom}`);
            else if (obj == "partipolitique")
                console.log(`Parti Politique: ${arr[i].partipolitique}`);
            else if (obj == "age")
                console.log(`Age: ${arr[i].age}`);
            else
                console.log(`Electeurs: ${arr[i].electeurs}`);
        }
        console.log("")
        console.log("****************************************")
        console.log("****************************************")
        console.log("")
    }
}

function electoralCandidats(arr){
    let choix;
    do {
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
            console.clear();
            choix = Number(p("Choix invalid. Veiller saisir un nombre correspendant: "));
        }
        console.clear()
        switch (choix){
        case 1:
            AjouterCandidat(arr);
            p("Continue....")
            console.clear();
            break;
        case 2:
            AjouterCandidat(arr);
            console.clear()
            choix = p("Voulez vous ajouter un autre candidat ?")
            console.clear
            while (choix == "oui"){
                AjouterCandidat(arr);
                choix = p("Voulez vous ajouter un autre candidat ?");
                console.clear()
            }
            p("Continue....")
            console.clear();
            break;
        case 3:
            afficherCandidat(arr);
            p("Continue....")
            console.clear();
            break;
        }
    } while (choix != 0);
}

electoralCandidats(arr);