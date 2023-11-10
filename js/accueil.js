header = document.getElementsByClassName("header");
radio = localStorage.getItem("radio");
username = localStorage.getItem("username");

 
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
let zero = 0
animeArrayHeight = animeArray.length
function getRandomcard() {
    return Math.floor(Math.random() * (animeArrayHeight));
}
let randomNumberForCard1 = getRandomcard();
let randomNumberForCard2 = getRandomcard();
let randomNumberForCard3 = getRandomcard();


let card1Background = ""
card1Background = animeArray[randomNumberForCard1].cover
let card2Background = ""
card2Background = animeArray[randomNumberForCard2].cover
let card3Background = ""
card3Background = animeArray[randomNumberForCard3].cover

if (document.location.href.includes("accueil.html")) {
    
    let acceuilcard1 = document.getElementsByClassName("card1")
    let acceuilcard2 = document.getElementsByClassName("card2")
    let acceuilcard3 = document.getElementsByClassName("card3")
    
    acceuilcard1[0].style.backgroundImage = "url("+card1Background+")"
    acceuilcard2[0].style.backgroundImage = "url("+card2Background+")"
    acceuilcard3[0].style.backgroundImage = "url("+card3Background+")"
    
    let acceuilcardtitle1 = document.getElementsByClassName("title1")
    let acceuilcardtitle2 = document.getElementsByClassName("title2")
    let acceuilcardtitle3 = document.getElementsByClassName("title3")
    let card1title = ""
    card1title = animeArray[randomNumberForCard1].title
    let card2title = ""
    card2title = animeArray[randomNumberForCard2].title
    let card3title = ""
    card3title = animeArray[randomNumberForCard3].title
    
    acceuilcardtitle1[0].innerHTML = card1title
    acceuilcardtitle2[0].innerHTML = card2title
    acceuilcardtitle3[0].innerHTML = card3title
    
    let acceuilcardDescription1 = document.getElementsByClassName("description1")
    let acceuilcardDescription2 = document.getElementsByClassName("description2")
    let acceuilcardDescription3 = document.getElementsByClassName("description3")
    let card1desc = ""
    card1desc = animeArray[randomNumberForCard1].description
    let card2desc = ""
    card2desc = animeArray[randomNumberForCard2].description
    let card3desc = ""
    card3desc = animeArray[randomNumberForCard3].description
    
    acceuilcardDescription1[0].innerHTML = card1desc
    acceuilcardDescription2[0].innerHTML = card2desc
    acceuilcardDescription3[0].innerHTML = card3desc


    let card1Listener = document.getElementsByClassName("card1")
    let card2Listener = document.getElementsByClassName("card2")
    let card3Listener = document.getElementsByClassName("card3")
    
    card1Listener[0].addEventListener("click" , function(event){
        event.preventDefault()
        window.location.href = "../html/DescriptionAnime.html#numAnime="+randomNumberForCard1
    })
    card2Listener[0].addEventListener("click" , function(event){
        event.preventDefault()
        window.location.href = "../html/DescriptionAnime.html#numAnime="+randomNumberForCard2
    })
    card3Listener[0].addEventListener("click" , function(event){
        event.preventDefault()
        window.location.href = "../html/DescriptionAnime.html#numAnime="+randomNumberForCard3
    })
}