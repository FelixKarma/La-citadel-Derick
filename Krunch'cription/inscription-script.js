const bouton = document.getElementById("bouton");
const submit = document.getElementById("submit");
const card2 = document.getElementById("card2");
let username = document.getElementById("username");
let radio = document.getElementById("image-radio");
let radio2 = document.getElementById("image-radio2");
let radio3 = document.getElementById("image-radio3");


bouton.addEventListener("click", function() {
    card2.style.display = "flex";
    localStorage.setItem('username', username.value);
});

submit.addEventListener("click", function () {
    
    let img;
    if (radio.checked) {
        img = "/La-citadel-Derick/Krunch'cription/img_inscri_log/KRUNCH-LUFFY.png"
    } else if (radio2.checked){
        img = "/La-citadel-Derick/Krunch'cription/img_inscri_log/KRUNCH-POWER.png"
    }else if (radio3.checked){
        img = "/La-citadel-Derick/Krunch'cription/img_inscri_log/KRUNCHIELD  21.png"
    }
    
    localStorage.setItem('radio', img);
});

// AJOUT  POUR DESCRIPTION
let radiotext = document.getElementById("image-radio");
let radiotext2 = document.getElementById("image-radio2");
let radiotext3 = document.getElementById("image-radio3");
 
submit.addEventListener("click", function() {
 
    let description;
 
    if (radiotext.checked) {
        description = "<h4>Monkey D.Krunchy</h4><br>explorez des mondes exaltants avec des animés d'aventure qui vous emmèneront vers des destinées extraordinaires et des défis palpitants.escription"

    } else if (radiotext2.checked){
        description= "<h4>Krunch Power</h4><br>Plongez dans l'obscurité avec des animés d'horreur captivants, où le frisson et l'épouvante vous attendent à chaque coin."

    }
     else if (radiotext3.checked){
        description= "<h4>Krunchield 21</h4><br>Vivez la passion de la compétition avec des animés de sport, où l'effort, la détermination et la victoire se rejoignent."
    }
 
    localStorage.setItem("description", description);
});
 
// FIN AJOUT DESCRIPTION


const monFormulaire = document.getElementById("inscription");



monFormulaire.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const inputForm = document.getElementsByClassName("inputput");

    if (inputForm[0].value !== "" && inputForm[1].value !== "" && inputForm[2].value !== "" ) {

        window.location.href = "../html/accueil.html";
    } else {
        alert("Veuillez remplir tous les champs du formulaire.");
    }
});

