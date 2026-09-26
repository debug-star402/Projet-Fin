const candidats = [
  {
    cin: "AB123456",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: ["EE100", "EE101"]
  },
  {
    cin: "CD789012",
    nom: "Amrani",
    prenom: "Sara",
    partiPolitique: "Parti A",
    age: 35,
    electeurs: ["EE200"]
  }
];

function rechercherCandidat(cin){
    for (let i = 0; i < candidats.length; i++){
        if (candidats[i].cin == cin){
            console.log("____________________")
            console.log(`cin: ${candidats[i].cin}`)
            console.log(`nom: ${candidats[i].nom}`)
            console.log(`prenom: ${candidats[i].prenom}`)
            console.log(`partiPolitique: ${candidats[i].partiPolitique}`)
            console.log(`electeurs: ${candidats[i].electeurs.length}`)
        }
    }
}

function voter(cinCandidat, cinElecteur){
    let exist = false
    for (let i = 0; i < candidats.length; i++){
        if (candidats[i].cin == cinCandidat){
            exist = true
            for (let j = 0; j < candidats[i].electeurs.length; j++){
                if (candidats[i].electeurs[j] == cinElecteur){
                    console.log("CIN deja voter.")
                    return
                }
            }
            candidats[i].electeurs.push(cinElecteur)
            console.log("Vote a ete enregistrer")
            break;
        }
    }
    if (exist == false)
        console.log("Candidat n'existe pas")
}

function candidatParParti(){
    let candidatList = [];
    let count = 0;
    console.log("Candidats par parti :")
    for (let i = 0; i < candidats.length; i++)
        candidatList.push(candidats[i].partiPolitique);
    for (let i = 0; i < candidatList.length; i++){
        for (let j = 0; j < candidats.length; j++){
            if (candidatList[i] == candidats[j].partiPolitique)
                count++;
        }
        console.log(`${candidatList[i]} : ${count}`);
        count = 0;
    }
}

function afficherStatistiques(){
    let count = 0;
    let totalVotes = 0;
    let placeHolder;
    let candida_len = candidats.length;
    for (let i = 0; i < candidats.length; i++){
        totalVotes += candidats[i].electeurs.length;
        count++;
    }
    console.log(`Nombre de candidats : ${count}`)
    console.log(`Nombre total de votes: ${totalVotes}`)
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
    candidatParParti();
}

rechercherCandidat("AB123456")
voter("AB123456", "AB1234")
afficherStatistiques()
