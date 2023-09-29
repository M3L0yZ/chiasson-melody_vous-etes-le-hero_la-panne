const chapters = {
    debut: {
        titre: "Il fait noir",
        description: "C'est le soir et vous êtes dans votre appartement. Il y a une panne d'électricité et la pile de votre téléphone est déchargée. Vous ne savez pas ce qu'il se passe.",
        image: "assets/images/01-chambre.jpg",
        bouton: [
            { titre: "Sortir dehors", destination: "exterieur" },
            { titre: "Chercher une bougie", destination: "recherche" }
        ],
    },
    exterieur: {
        titre: "Seul sous la pluie",
        description: "Vous êtes à l'extérieur, il pleut et il fait froid. Vous allez au dépanneur mais celui-ci est fermé puisqu'il n'y a plus d'électricité.",
        image: "assets/images/02-depanneur.jpg",
        bouton: [
            { titre: "Retourner à l'appartement", destination: "debut" },
            { titre: "Continuer son chemin", destination: "homme" }
        ],
    },
    homme: {
        titre: "La tempête se lève",
        description: "Le tonnerre gronde, le vent se lève, la pluie est torrentielle. Un homme s'approche de vous. Il semble perdu et il veut vous parler.",
        image: "assets/images/03-homme.jpg",
        bouton: [
            { titre: "Retourner à l'appartement", destination: "debut" },
            { titre: "L'écouter", destination: "cigarette" }
        ],
    },
    cigarette: {
        titre: "Prédiction ou malédiction?",
        description: "L'homme fume une cigarette et vous raconte que l'enfer est à nos portes et que l'antéchrist est parmi nous.. Vous êtes mal à l'aise et vous vous éloignez de lui pour retourner vous mettre à l'abris dans votre appartement. Il vous demande d'une voix forte et grave si vous le croyez.",
        image: "assets/images/04-cigarette.jpg",
        bouton: [
            { titre: "Le croire", destination: "debut" },
            { titre: "Ne pas le croire", destination: "debut" }
        ],
    },
    recherche: {
        titre: "À la recherche de la lumière",
        description: "Vous cherchez une bougie mais vous ne voyez rien dans l'obscurité. Vous vous ennuyez... Vous appelez votre chat et celui-ci miaule.",
        image: "assets/images/05-noirceur.jpg",
        bouton: [
            { titre: "Essayer de le trouver", destination: "debut" },
            { titre: "L'appeler de nouveau", destination: "chat" }
        ],
    },
    chat: {
        titre: "Maudit chat!",
        description: "Vous entendez votre chat sauter et courir comme un fou. Dans son élan, il accroche un objet qui tombe et roule vers vous.",
        image: "assets/images/06-chat.jpg",
        bouton: [
            { titre: "Sacrer et s'excuser", destination: "debut" },
            { titre: "Essayer de nettoyer son dégât", destination: "bougie" }
        ],
    },
    bougie: {
        titre: "Lumière au bout du tunnel",
        description: "Vous avez trouvé une bougie. Est-ce que vous avez un briquet pour l'allumer?",
        image: "assets/images/07-bougie.jpg",
        bouton: [
            { titre: "Oui", destination: "fin" },
            { titre: "Non", destination: "debut" }
        ],
    },
    fin: {
        titre: "Moment de vérité",
        description: "Vous allumez la bougie et vous êtes rassuré. Vous repensez à votre étrange rencontre avec l'homme. Pensez-vous que l'homme disait la vérité?",
        image: "assets/images/08-prediction.jpg",
        bouton: [
            { titre: "Oui", destination: "malheur" },
            { titre: "Non", destination: "bonheur" }
        ],
    },
    malheur: {
        titre: "Mettre sa main au feu",
        description: "Oh non! Un coup de tonnerre vous fait sursauter et vous échappez la bougie. Votre appartement s'enflamme. Votre chat se sauve par la fenêtre en vous jugeant, du moins, c'est ce que vous croyez voir. L'homme avait raison!",
        image: "assets/images/a-incendie.jpg",
    },
    bonheur: {
        titre: "Renaître de ses cendres",
        description: "Super! La panne est terminée! Vous et votre chat riez ensemble; l'homme disait n'importe quoi! Une chance que vous ne l'avez pas cru!... Euh... Votre chat est capable de rire?!",
        image: "assets/images/b-succes.jpg",
    },
}

function goToChapter(chapter) {

    switch (chapter) {
        case "debut":
            console.log(chapters.debut.titre) + console.log(chapters.debut.description) +
                console.log(chapters.debut.bouton[0]) + console.log(chapters.debut.bouton[1])
            break;
        case "exterieur":
            console.log(chapters.exterieur.titre) + console.log(chapters.exterieur.description) +
                console.log(chapters.exterieur.bouton[0]) + console.log(chapters.exterieur.bouton[1])
            break;
        case "homme":
            console.log(chapters.homme.titre) + console.log(chapters.homme.description) +
                console.log(chapters.homme.bouton[0]) + console.log(chapters.homme.bouton[1])
            break;
        case "cigarette":
            console.log(chapters.cigarette.titre) + console.log(chapters.cigarette.description) +
                console.log(chapters.cigarette.bouton[0]) + console.log(chapters.cigarette.bouton[1])
            break;
        case "recherche":
            console.log(chapters.recherche.titre) + console.log(chapters.recherche.description) +
                console.log(chapters.recherche.bouton[0]) + console.log(chapters.recherche.bouton[1])
            break;
        case "chat":
            console.log(chapters.chat.titre) + console.log(chapters.chat.description) +
                console.log(chapters.chat.bouton[0]) + console.log(chapters.chat.bouton[1])
            break;
        case "bougie":
            console.log(chapters.bougie.titre) + console.log(chapters.bougie.description) +
                console.log(chapters.bougie.bouton[0]) + console.log(chapters.bougie.bouton[1])
            break;
        case "fin":
            console.log(chapters.fin.titre) + console.log(chapters.fin.description) +
                console.log(chapters.fin.bouton[0]) + console.log(chapters.fin.bouton[1])
            break;
        case "malheur":
            console.log(chapters.malheur.titre) + console.log(chapters.malheur.description)
            break;
        case "bonheur":
            console.log(chapters.bonheur.titre) + console.log(chapters.bonheur.description)
            break;
        default:
            console.log("Erreur - Ce chapitre n'existe pas.")
    }
}

console.log(goToChapter("debut"));