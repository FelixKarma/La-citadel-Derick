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
        img = '../img_inscri_log/KRUNCH-LUFFY.png'
    } else if (radio2.checked){
        img = '../img_inscri_log/KRUNCH-POWER.png'
    }else if (radio3.checked){
        img = '../img_inscri_log/KRUNCHIELD  21.png'
    }
    
    localStorage.setItem('radio', img);
});


const monFormulaire = document.getElementById("inscription");



monFormulaire.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const inputForm = document.getElementsByClassName("inputput");

    if (inputForm[0].value !== "" && inputForm[1].value !== "" && inputForm[2].value !== "" ) {

        window.location.href = "/navbar/navbar.html";
    } else {
        alert("Veuillez remplir tous les champs du formulaire.");
    }
});

