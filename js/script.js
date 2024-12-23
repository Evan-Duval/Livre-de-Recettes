function verifierFormulaire() {
    var erreurTrouvee = false;
    var afficherTexte;
    var nomFournit = document.getElementById("nom").value;
    var emailFournit = document.getElementById("email").value;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var passwordFournit = document.getElementById("motdepasse").value;
    var checkBoxCheck = document.getElementById("checkbox").checked;

    if (nomFournit === "") {
        erreurTrouvee = true;
        afficherTexte = "Le champ Nom est obligatoire";
    } else if (emailFournit === "" || !re.test(emailFournit)) {
        erreurTrouvee = true;
        afficherTexte = "Le champ Email est incorrect";
    } else if (passwordFournit === "" || passwordFournit.length < 8) {
        erreurTrouvee = true;
        if (passwordFournit === "") {
            afficherTexte = "Le champ Mot de passe est obligatoire";
        } else {
            afficherTexte = "Le mot de passe doit contenir au moins 8 caractères";
        }
    } else if (checkBoxCheck === false) {
        erreurTrouvee = true;
        afficherTexte = "Veuillez accepter les conditions d'utilisation pour continuer";
    } else {
        afficherTexte = "Le formulaire a bien été envoyé"
    }

    var paragraph = document.getElementById("messageRenvoyer");

    if (erreurTrouvee) {
        paragraph.style.color = "red";
    } else {
        paragraph.style.color = "green";
    }

    paragraph.innerHTML = afficherTexte;
}