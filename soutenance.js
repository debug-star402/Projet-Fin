let p = require("prompt-sync")();
let candidats = [];
let carteIdentiter;
let candidatNom;
let candidatPrenom;
let partiPolitiqueCandidat;
let candidatAge;
let electeurCandidat = [];
let objet;

function AjouterCandidat(){
    carteIdentiter = p("Saisir votre CIN: ");
    let bool;

    do {
        bool = true
        for (let i = 0; i < candidats.length; i++)
        {
            if (carteIdentiter == candidats[i].cin)
            {
                bool = false;
                console.clear()
            }
        }
        if (bool == false)
            carteIdentiter = p("CIN deja utiliser. Veiller saisir un autre CIN: ");

    } while (bool == false)

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

function triVote(){
    let placeHolder;
    for (let i = 0; i < candidats.length - 1; i++){
        for (let j = i + 1; j < candidats.length; j++){
            if (candidats[i].electeurs.length < candidats[j].electeurs.length){
                placeHolder = candidats[i];
                candidats[i] = candidats[j];
                candidats[j] = placeHolder;
            }
        }
    }
    for (let i = 0; i < candidats.length; i++){
        console.log("")
        console.log("****************************************")
        console.log("****************************************")
        console.log("")
        console.log(`# Candidat ${i+1}: `);
        console.log("")
        afficherCandidat(candidats[i])
        console.log("")
        console.log("****************************************")
        console.log("****************************************")
        console.log("")
    }
}

function filtrerParti(){
    let choix = p("Saisir le nom de la parti politique: ");
    let choixExist = false;
    console.clear()
    for (let i = 0; i < candidats.length; i++){
        if (choix == candidats[i].partiPolitique){
            choixExist = true;
        }
    }
    if (choixExist == true){
        for (i = 0; i < candidats.length; i++){
            if (choix == candidats[i].partiPolitique){
                console.log("")
                console.log("****************************************")
                console.log("****************************************")
                console.log("")
                console.log(`# Candidat ${i+1}: `);
                console.log("")
                afficherCandidat(candidats[i])
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

function voteCandidat(){
    let cinCard;
    let identifiant;
    cinCard = p("Saisir votre CIN: ");
    for (let i = 0; i < candidats.length; i++){
        if (cinCard == candidats[i].cin){
            console.log("Ce CIN est deja utilise par un candidat.");
            return;
        }
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

function modifierCandidats(){
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
    
function supprimerFunction(){
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

function rechercherCandidat(){
    let candidatNom = p("Saisir le nom du candidat: ")
    let bool = false;
    for (let i = 0; i < candidats.length; i++){
        if (candidatNom.toLocaleLowerCase() == candidats[i].nom.toLocaleLowerCase()){
            console.log("")
            console.log("****************************************")
            console.log("****************************************")
            console.log("")
            console.log(`# Candidat ${i+1}: `);
            console.log("")
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
        console.log("Candidat introuvable!");
        console.log("---------------------");
        return ;
    }
}

function candidatParParti(){
    let candidatArr = [];
    let count = 0;
    console.log("Candidats par parti :")
    for (let i = 0; i < candidats.length; i++)
        candidatArr.push(candidats[i].partiPolitique);
    for (let i = 0; i < candidatArr.length - 1; i++){
        for (let j = 0; j < candidatArr.length; j++){
            if (candidatArr[i] == candidatArr[j] && i != j)
                candidatArr.splice(j, 1);
        }
    }
    for (let i = 0; i < candidatArr.length; i++){
        for (let j = 0; j < candidats.length; j++){
            if (candidatArr[i] == candidats[j].partiPolitique)
                count++;
        }
        console.log(`${candidatArr[i]} : ${count}`);
        count = 0;
    }
}

function statistiqueElection(){
    console.log("1. Afficher le nombre total de candidats.")
    console.log("2. Afficher le nombre total de votes exprimés dans toute l'élection.");
    console.log("3. Afficher le Top 3 des candidats ayant le plus de votes.");
    console.log("4. Afficher le nombre de candidats par parti politique.")
    console.log("0. Retourner au menu principale.")
    let choix = Number(p("Saisir votre choix: "));
    while (choix < 0 || choix > 4){
            console.clear();
            choix = Number(p("Choix invalid. Veiller saisir le choix correct: "));
        }
    switch (choix){
        case 1:
            console.log(`Le nombre total des candidats est: ${candidats.length}`);
            p("Continue....")
            console.clear();
            break;
        case 2:
            let totalVotes = 0;
            for (let i = 0; i < candidats.length; i++)
                totalVotes += candidats[i].electeurs.length;
            console.log(`Le nombre total des votes est: ${totalVotes}`);
            p("Continue....")
            console.clear();
            break;
        case 3:
            let placeHolder;
            for (let i = 0; i < candidats.length - 1; i++){
                for (let j = i + 1; j < candidats.length; j++){
                    if (candidats[i].electeurs.length < candidats[j].electeurs.length){
                        placeHolder = candidats[i];
                        candidats[i] = candidats[j];
                        candidats[j] = placeHolder;
                    }
                }
            }
            console.log("Top 3 :");
            for (let i = 0; i < 3; i++){
                if (i >= candidats.length)
                    return;
                console.log(`${i+1}. ${candidats[i].prenom} ${candidats[i].nom} - ${candidats[i].electeurs.length} votes`)
            }
            p("Continue....")
            console.clear();
            break;
        case 4:
            candidatParParti();
            p("Continue....")
            console.clear();
            break;
        case 0:
            break;
    }
}

function electoralCandidats(){
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
            do {
                console.clear();
                choix = Number(p("Choix invalid. Veiller saisir le choix correct: "));
            } while (choix < 0 || choix > 8)
        }
        console.clear()
        switch (choix){
        case 1:
            AjouterCandidat();
            p("Continue....")
            console.clear();
            break;
        case 2:
            AjouterCandidat();
            console.clear()
            choix = p("Voulez vous ajouter un autre candidat ? (oui ou non)       ")
            console.clear
            while (choix == "oui"){
                AjouterCandidat();
                choix = p("Voulez vous ajouter un autre candidat ? (oui ou non)       ");
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
                    triVote();
                    p("Continue....");
                    console.clear();
                    break;
                case 2:
                    filtrerParti();
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
                voteCandidat();
                p("Continue....");
                console.clear();
                break;
            case 5:
                modifierCandidats();
                p("Continue....");
                console.clear();
                break;
            case 6:
                supprimerFunction();
                p("Continue....");
                console.clear();
                break;
            case 7:
                rechercherCandidat();
                p("Continue....");
                console.clear();
                break;
            case 8:
                statistiqueElection();
                console.clear();
                break;
        }
    } while (choix != 0);
}

electoralCandidats();