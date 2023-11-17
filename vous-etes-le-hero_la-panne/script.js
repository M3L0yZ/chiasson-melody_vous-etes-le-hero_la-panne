const chapters = {
    accueil: {
        titre: "",
        description: "",
        image:"assets/images/00-accueil.jpg",
        video: null,
        bouton: [
            {titre: "Commencer", destination: "debut"}
        ],
    },
    debut: {
        titre: "Il fait noir",
        description: "C'est le soir et vous êtes dans votre appartement. Il y a une panne d'électricité et la pile de votre téléphone est déchargée. Vous ne savez pas ce qu'il se passe.",
        image: null,
        video: "assets/videos/01-fenetre.mp4",
        bouton: [
            { titre: "Sortir dehors", destination: "exterieur" },
            { titre: "Chercher une bougie", destination: "recherche" }
        ],
    },
    exterieur: {
        titre: "Seul sous la pluie",
        description: "Vous êtes à l'extérieur, il pleut et il fait froid. Vous allez au dépanneur mais celui-ci est fermé puisqu'il n'y a plus d'électricité.",
        image: "assets/images/02-depanneur.jpg",
        video: null,
        bouton: [
            { titre: "Retourner à l'appartement", destination: "debut" },
            { titre: "Continuer son chemin", destination: "homme" }
        ],
    },
    homme: {
        titre: "La tempête se lève",
        description: "Le tonnerre gronde, le vent se lève, la pluie est torrentielle. Un homme louche s'approche de vous et vous regarde. Il semble vouloir vous parler.",
        image: null,
        video: "assets/videos/03-homme.mp4",
        bouton: [
            { titre: "L'écouter", destination: "cigarette" },
            { titre: "Retourner à l'appartement", destination: "debut" }
        ],
    },
    cigarette: {
        titre: "Prédiction ou malédiction?",
        description: "L'homme vous raconte que l'enfer est à nos portes. Vous décidez de retourner vous mettre à l'abris dans votre appartement. Il vous demande en criant si vous le croyez.",
        image: "assets/images/04-cigarette.jpg",
        video: null,
        bouton: [
            { titre: "Le croire", destination: "debut" },
            { titre: "Ne pas le croire", destination: "debut" }
        ],
    },
    recherche: {
        titre: "À la recherche de la lumière",
        description: "Vous cherchez une bougie mais vous ne voyez rien dans l'obscurité. Vous vous ennuyez... Vous appelez votre chat et celui-ci miaule.",
        image: "assets/images/05-noirceur.jpg",
        video: null,
        bouton: [
            { titre: "Essayer de le trouver", destination: "debut" },
            { titre: "L'appeler de nouveau", destination: "chat" }
        ],
    },
    chat: {
        titre: "Maudit chat!",
        description: "Vous entendez votre chat sauter et courir comme un fou. Dans son élan, il accroche un objet qui tombe et roule vers vous.",
        image: "assets/images/06-chat.jpg",
        video: null,
        bouton: [
            { titre: "Sacrer et s'excuser", destination: "debut" },
            { titre: "Nettoyer son dégât", destination: "bougie" }
        ],
    },
    bougie: {
        titre: "Lumière au bout du tunnel",
        description: "Vous avez trouvé une bougie en nettoyant le dégât de votre chat. Est-ce que vous avez un briquet pour l'allumer?",
        image: "assets/images/07-bougie.jpg",
        video: null,
        bouton: [
            { titre: "Oui", destination: "fin" },
            { titre: "Non", destination: "debut" }
        ],
    },
    fin: {
        titre: "Moment de vérité",
        description: "Vous allumez la bougie et vous êtes rassuré. Vous repensez à votre étrange rencontre avec l'homme. Pensez-vous que l'homme disait la vérité?",
        image: "assets/images/08-prediction.jpg",
        video: null,
        bouton: [
            { titre: "Oui", destination: "malheur" },
            { titre: "Non", destination: "bonheur" }
        ],
    },
    malheur: {
        titre: "Mettre sa main au feu",
        description: "Oh non! Un coup de tonnerre vous fait sursauter et vous échappez la bougie. Votre appartement s'enflamme. Votre chat se sauve par la fenêtre. L'homme avait raison!",
        image: "assets/images/a-incendie.jpg",
        video: null,
    },
    bonheur: {
        titre: "Renaître de ses cendres",
        description: "Super! La panne est terminée! Votre chat ronronne. l'homme disait n'importe quoi! Une chance que vous ne l'avez pas cru!",
        image: "assets/images/b-succes.jpg",
        video: null,
    },
    mensonge: {
        titre: "Faire fausse route",
        description: "Malheureusement, vous n'avez pas de briquet pour allumer la bougie. Votre chat continue de courir partout et le tonnerre gronde.",
        image: null,
        video: "assets/videos/c-mensonge.mp4",
        bouton: [
            {titre: "Retour", destination: "debut"}
        ],
    },
}

let jeuTitre = document.querySelector("h1");
let jeuDescription = document.querySelector("p");
let jeuImage = document.querySelector("img");
let jeuOptions = document.querySelector(".options");
let jeuVideo = document.querySelector("video");
let jeuChoix = document.querySelector("button");

function goToChapter(chapter) {
    jeuTitre.textContent = chapters[chapter].titre;
    jeuDescription.textContent = chapters[chapter].description;
    jeuImage.src = chapters[chapter].image;
    jeuVideo.src = chapters[chapter].video;

    if (chapters[chapter].image == null ) {
        jeuImage.style.display = "none";
        jeuVideo.style.display = "block";
        jeuVideo.play();
        jeuVideo.volume = 0;
    } else {
        jeuImage.style.display = "block";
        jeuVideo.style.display = "none";
    }
    
    if (chapters[chapter].bouton == undefined) {
        let jeuBoutons = document.createElement("button");
        jeuBoutons.className = "boutons-choix";
        jeuOptions.appendChild(jeuBoutons);
        jeuBoutons.style.visibility = "hidden";

    } else {
        chapters[chapter].bouton.forEach((bouton) => {
            let jeuBoutons = document.createElement("button");
            jeuBoutons.className = "boutons-choix";
            jeuBoutons.innerHTML = bouton.titre;

            jeuBoutons.addEventListener("click", () => {
                jeuOptions.querySelectorAll("*").forEach(bouton => bouton.remove());
                goToChapter(bouton.destination);
            })
            jeuOptions.appendChild(jeuBoutons);
            jeuBoutons.style.visibility = "visible";
        })
    }
    
    let twist = false;
    if (chapter == "cigarette") {
        console.log("Clé obtenue!");
        twist = true;
        localStorage.setItem("twist", twist);
    } else {
        twist = false;
    }

    const progressionJeu = chapter;
    localStorage.setItem("chapitre", progressionJeu);

    const menuJeu = document.getElementById("menu");
    if (chapter == "accueil") {
        menuJeu.style.visibility = "hidden";

    } else {
        menuJeu.style.visibility = "visible";
    }
}

const recommencerJeu = document.querySelector("#bouton-recommencer");
const reloadJeu = localStorage.getItem("chapitre");
const twistJeu = localStorage.getItem("twist");
const muteOnOff = document.querySelector(".toggle-on");
const pluie = new Audio ("assets/audios/00-pluie.mp3");

recommencerJeu.addEventListener("click", () => {
    goToChapter("accueil");
    localStorage.clear("chapitre")
    jeuOptions.querySelectorAll("*").forEach(bouton => bouton.remove());
    let jeuBoutons = document.createElement("button");
        jeuBoutons.style.visibility = "hidden";
        goToChapter("accueil");
        muteOnOff.className = "toggle-on";
})

if (reloadJeu == null) {
    goToChapter("accueil");
} else {
    goToChapter(reloadJeu);
}

pluie.play();
pluie.volume = 0.3;

muteOnOff.addEventListener("click", () =>{
        muteOnOff.classList.toggle("toggle-off");
    if (muteOnOff.classList == "toggle-on") {
        pluie.play();
        pluie.volume = 0.3;
    } else if (muteOnOff.className !== "toggle-on"){
        pluie.pause();
    }
})

