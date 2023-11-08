const header = document.getElementsByClassName("header");
const radio = localStorage.getItem("radio");
const username = localStorage.getItem("username");
let animeTITRE = '';
animeTITRE = jujutsuKaisen.title;
console.log(animeTITRE);
let animeTITR = document.getElementsByClassName('title')
animeTITR[0].innerHTML=animeTITRE;

 
header[0].innerHTML = `        <img class="logo" src="logo.png" alt="">
<input type="checkbox" id="check">
 
       
<nav class="navbar">
<a href="#">Categorie</a>
<a href="#">Categorie 2</a>
<a href="#">Categorie 3</a>
<a href="#">Categorie 4</a>
</nav>
<button>
<span>CONNEXION</span>
</button>
${radio && username && `<img src="${radio}" alt="" width =100>
<h4>${username}</h4> `}
`