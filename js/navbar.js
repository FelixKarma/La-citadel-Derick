const header = document.getElementsByClassName("header");
const radio = localStorage.getItem("radio");
const username = localStorage.getItem("username");
 
header[0].innerHTML = `        <img class="logo" src="logo.png" alt="">
<input type="checkbox" id="check">
 
       
<nav class="navbar">
<a href="index.html">Accueil</a>
<a href="#">Categorie </a>
<a href="#">Categorie 3</a>
<a href="contact/contact.html">Contactez nous</a>
</nav>
<button>
<span>CONNEXION</span>
</button>
${radio && username && `<img src="${radio}" alt="" width =100>
<h4>${username}</h4> `}
`