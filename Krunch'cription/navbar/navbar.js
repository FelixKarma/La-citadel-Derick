const header = document.getElementsByClassName("header");
const radio = localStorage.getItem("radio");
const username = localStorage.getItem("username");
const button = document.getElementById("button-connexion")

header[0].innerHTML = 

`        <img class="logo" src="/La-citadel-Derick/Krunch'cription/navbar/logo.png" alt="">
<input type="checkbox" id="check">

<nav class="navbar">
<a href="#">Categorie</a>
<a href="#">Categorie 2</a>
<a href="#">Categorie 3</a>
<a href="#">Categorie 4</a>
</nav>
<button class='button' id="btn-co"> <span id="button-connexion">CONNEXION</span></button>
<section id="nav-profil">
${radio && username ? `<img class="logo-radio" src="${radio}" alt="" width =50>
<h4 class="usrname">${username}</h4> `: ""}
</section>

`

const btnCo = document.getElementById("btn-co")

if (username && radio){
    btnCo.style.display = "none"
}
else {
    btnCo.style.display = ""
}