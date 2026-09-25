let p = require("prompt-sync")();
let candidats = [{ cin : "AB12356",
    nom : "Boushaba",
    prenom : "Soufiane",
    partiPolitique : "viking",
    age: 40,
    electeurs: ["a","b","v","r"]
    },
    { cin : "AB23456",
    nom : "boulama",
    prenom : "Soufiane",
    partiPolitique : "Indépendant",
    age: 40,
    electeurs: ["s","d","e"]
    },
      { cin : "AB13456",
    nom : "Bouhafa",
    prenom : "Soufiane",
    partiPolitique : "viking",
    age: 40,
    electeurs: ["a","g","h","y","u","i","o"]
    },
        { cin : "AB12345",
    nom : "Bokayo",
    prenom : "Soufiane",
    partiPolitique : "Indépendant",
    age: 40,
    electeurs: [1,2]
    }]
let carteIdentiter;
let candidatNom;
let candidatPrenom;
let partiPolitiqueCandidat;
let candidatAge;
let electeurCandidat = [];
let objet = {cin: carteIdentiter, nom: candidatNom, prenom: candidatPrenom, partiPolitique: partiPolitiqueCandidat, age: candidatAge, electeurs: electeurCandidat};

function AjouterCandidat(candidats){
    carteIdentiter = p("Saisir votre CIN: ");
    candidatNom = p("Saisir votre Nom: ");
    candidatPrenom = p("Saisir votre prenom: ");
    partiPolitiqueCandidat = p("Saisir votre partis politique: ");
    candidatAge = Number(p("Saisir votre age: "));
    electeurCandidat = [];
    objet = {cin: carteIdentiter, nom: candidatNom, prenom: candidatPrenom, partiPolitique: partiPolitiqueCandidat, age: candidatAge, electeurs: electeurCandidat};
    candidats.push(objet);
}

function afficherCandidat(objet){
    for (let obj in objet){
        if (obj == "cin")
            console.log(`CIN: ${objet.cin}`);
        else if (obj == "nom")
            console.log(`Nom: ${objet.nom}`);
        else if (obj == "prenom")
            console.log(`Prenom: ${objet.prenom}`);
        else if (obj == "partiPolitique")
            console.log(`Parti Politique: ${objet.partiPolitique}`);
        else if (obj == "age")
            console.log(`Age: ${objet.age}`);
        else
            console.log(`Electeurs: ${objet.electeurs}`);
    }
}

function triVote(candidats){
    objet = {cin: carteIdentiter, nom: candidatNom, prenom: candidatPrenom, partiPolitique: partiPolitiqueCandidat, age: candidatAge, electeurs: electeurCandidat};
    let placeHolder;
    for (let i = 0; i < candidats.length - 1; i++)
        for (let j = i + 1; j < candidats.length; j++){
            if (candidats[i].electeurs.length < candidats[j].electeurs.length){
                placeHolder = candidats[i];
                candidats[i] = candidats[j];
                candidats[j] = placeHolder;
            }
    }
    for (let i = 0; i < candidats.length; i++){
        console.log("")
        console.log("****************************************")
        console.log("****************************************")
        console.log("")
        console.log(`# Candidat ${i+1}: `);
        afficherCandidat(candidats[i])
        console.log("")
        console.log("****************************************")
        console.log("****************************************")
        console.log("")
    }
}

function filtrerParti(arr){
    let choix = p("Saisir le nom de la parti politique: ");
    let choixExist = false;
    console.clear()
    for (let i = 0; i < arr.length; i++){
        if (choix == arr[i].partiPolitique){
            choixExist = true;
        }
    }
    if (choixExist == true){
        for (i = 0; i < arr.length; i++){
            if (choix == arr[i].partiPolitique){
                console.log("")
                console.log("****************************************")
                console.log("****************************************")
                console.log("")
                console.log(`# Candidat ${i+1}: `);
                console.log("")
                afficherCandidat(arr[i])
                console.log("")
                console.log("****************************************")
                console.log("****************************************")
                console.log("")
            }
        }
    }
    else
        console.log("Parti politique non trouver.")
}

function voteCandidat(candidats){
    let cinCard;
    let identifiant;
    cinCard = p("Saisir votre CIN: ");
    for (let i = 0; i < candidats.length; i++){
        for(let j = 0; j < candidats[i].electeurs.length; j++){
            if (cinCard == candidats[i].electeurs[j]){
                console.log("Vous avez déjà voté et vous n`avez pas le droit de modifier votre vote ni de voter à nouveau");
                return;
            }
        }
    }
    let bool = true;
    identifiant = p("Saisir le CIN du candidat: ")
    for (i = 0; i < candidats.length; i++){
        if (identifiant == candidats[i].cin){
            candidats[i].electeurs.push(cinCard);
            console.clear()
            return;
        }
        bool = false;
    }
    if (bool == false){
        console.log("-----------------------");
        console.log("Candidat introuvable!");
        console.log("-----------------------");
    }
}

function modifierCandidats(candidats){
    let cinCard;
    let bool = false;
    cinCard = p("Saisir le CIN du candidats: ");
    for (let i = 0; i < candidats.length; i++){
        if (cinCard == candidats[i].cin){
            candidats[i].age = Number(p("Saisir age modification: "));
            candidats[i].partiPolitique = p("Saisir parti politique modification: ");
            console.clear();
            bool = true;
        }
    }
    if (bool == false){
        p("Candidat introuvable. ")
        return;
    }
}

function supprimerFunction(candidats){
    let cinCard;
    let bool = false;
    cinCard = p("Saisir le CIN du candidats: ");
    for (let i = 0; i < candidats.length; i++){
        if (cinCard == candidats[i].cin){
            candidats.splice(i, 1);
            console.clear();
            bool = true;
        }
    }
    if (bool == false){
        p("Candidat introuvable!")
        return;
    }
}

function rechercherCandidat(candidats){
    let candidatNom = p("Saisir le nom du candidat: ")
    let bool = false;
    for (let i = 0; i < candidats.length; i++){
        if (candidatNom == candidats[i].nom){
            console.log("")
            console.log("****************************************")
            console.log("****************************************")
            console.log("")
            console.log(`# Candidat ${i+1}: `);
            afficherCandidat(candidats[i])
            console.log("")
            console.log("****************************************")
            console.log("****************************************")
            console.log("")
            bool = true;
        }
    }
    if (bool == false){
        console.log("---------------------");
        console.log("Candidat introuvable!")
        console.log("---------------------");
        return ;
    }
}

function statistiqueElection(candidats){

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
            choix = Number(p("Choix invalid. Veiller saisir le choix correct: "));
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
            choix = p("Voulez vous ajouter un autre candidat ? (oui ou non)       ")
            console.clear
            while (choix == "oui"){
                AjouterCandidat(arr);
                choix = p("Voulez vous ajouter un autre candidat ? ");
                console.clear()
            }
            p("Continue....")
            console.clear();
            break;
        case 3:
            console.log("")
            console.log("===================================")
            console.log("1. Affichage par tri de vote: ")
            console.log("2. Affichage par parti politique: ")
            console.log("0. Retourner au menu precedente: ");
            console.log("===================================")
            console.log("")
            let choixAffichage = Number(p("Choisir le type d'affichage: "))
            while (choixAffichage < 0 || choixAffichage > 2){
                console.clear();
                choixAffichage = Number(p("Choix invalid. Veiller saisir le choix correct: "));
            }
            console.clear()
            switch (choixAffichage){
                case 1:
                    triVote(arr);
                    p("Continue....");
                    console.clear();
                    break;
                case 2:
                    filtrerParti(arr);
                    p("Continue....");
                    console.clear();
                    break;
                case 0:
                    p("Continue....");
                    console.clear();
                    break;
            }
                break;
            case 4:
                voteCandidat(arr);
                p("Continue....");
                console.clear();
                break;
            case 5:
                modifierCandidats(arr);
                p("Continue....");
                console.clear();
                break;
            case 6:
                supprimerFunction(arr);
                p("Continue....");
                console.clear();
                break;
            case 7:
                rechercherCandidat(arr);
                p("Continue....");
                console.clear();
                break;
        }
    } while (choix != 0);
}

electoralCandidats(candidats);