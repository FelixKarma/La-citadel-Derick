//the first part simulate

let goblinSlayer = new Anime(
    "Goblin Slayer",
    "15 septembre 2017",
    "À la frontière, un membre de la guilde a accompli une prouesse comme peu en sont capables : il est devenu chevalier de rang d’argent rien qu’en chassant les gobelins. La Prêtresse, une aventurière débutante, vient à peine de se lancer dans sa première équipée qu’elle est déjà confrontée à un danger mortel. Un homme vient à sa rescousse. On le nomme le Crève-gobelins. Il extermine les gobelins par tous les moyens, sans faire dans la dentelle. Il s’entoure de la Prêtresse, qu’il aime à contrarier, d’une membre de la guide toujours affable et de son amie d’enfance, la Vachère. Tout à coup, une elfe qui a entendu des rumeurs sur le personnage se présente à eux avec une requête… C’est l’histoire d’un homme qui ne tue que les gobelins, un homme qui désire être un aventurier.",
    "4.8",
    "Kumo Kagyū",
    1,
    [],
    "https://m.media-amazon.com/images/S/pv-target-images/a0ea30194605819f4b90d711ec5755e05e6d7bc05ddeab9f275007cde0ce7c0f.jpg",
    "https://fr.web.img2.acsta.net/pictures/19/09/18/15/38/4134067.jpg",
    ["Action" , "Aventure" , "Fantastique"]
)

let numberOfEpisode = jujutsuKaisenSeason1.episodeNbr;
let episodListSection = document.getElementsByClassName("episodListSection");
let divContent="";
for (let i = 0; i < numberOfEpisode; i++) {
let y = i+1
 
    divContent += "<div class='EpCarDiv'  id='slide" + i + "' onclick='buttonPressed("+i+")' ><img onclick='increaseHeight()' class='episodeListImage' src='" + jujutsuKaisen.cover + "' alt=''> <p class='episodNbrP'> Episode "+ y+" </p></div>"

}
episodListSection[0].innerHTML = divContent;

// attribute every elements to a var
let mangakaName = "";
mangakaName = jojo.autor;
let seasonNbr = "";
seasonNbr = jojo.numberOfSeason;
let release = "";
release = jojo.releaseDate;
let animDescription = "";
animDescription = goblinSlayer.description;
let animTitle = "";
animTitle = jojo.title;
let animeCover = "";
animeCover= goblinSlayer.cover;
let animeBackground = "";
animeBackground = goblinSlayer.backgroundImage;
let animeRating = "<img src='../image/st.png' height =50 > :" + jojo.rating


//get all element with their class name
let seasonsNumber = document.getElementsByClassName("numberOfSeasons")
let releaseDate = document.getElementsByClassName("release")
let displayedVideo = document.getElementsByClassName("videoPlayerSection")
// not same as animTitle !!!
let animeTitle = document.getElementsByClassName("animeTitle")
let rating = document.getElementsByClassName("rating")
// not same as animDescription !!!
let mangaka = document.getElementsByClassName("mangaka")

let animeDescription = document.getElementsByClassName("animeDescription")
let cover = document.getElementsByClassName("cover")
let backgroundImage = document.getElementsByClassName("backgroundImage")
//attribute characteristic to every html class
animeTitle[0].innerHTML= animTitle;
mangaka[0].innerHTML = mangakaName;
animeDescription[0].innerHTML = animDescription;
cover[0].setAttribute("src",animeCover);
backgroundImage[0].setAttribute("src",animeBackground);
rating[0].innerHTML = animeRating;
releaseDate[0].innerHTML = "Sortie le : " + release; 
seasonsNumber[0].innerHTML = "Nombre de saisons : " + seasonNbr;

let gender ="";

for (let genre of jojo.genre) {

    gender += genre + " "
}
let moreThanTwoGenders = document.getElementById("genres") 
moreThanTwoGenders.innerHTML = gender


let buttonPressed = (id) => {
    
    displayedVideo[0].innerHTML=jujutsuKaisenSeason1.episodeList[id]
 

}


var currentHeightIframe = 0;
function increaseHeight(){
    var currentHeightVideo = 0;
    var div = document.getElementsByClassName("videoPlayerSection");
    var reader = document.getElementsByClassName("videoPlayer");
    var interval = setInterval(function(){
        if (currentHeightIframe >=30){
            currentHeightVideo += 28;
            reader[0].style.height = currentHeightVideo + 'vw'; 
            clearInterval(interval);
        } else {            
            currentHeightIframe += 0.4;
            
            div[0].style.height = currentHeightIframe + 'vw';
            div[0].style.border = "2px solid  hsl(357, 38%, 89%)"  
        }
    
    }, 1)

}
  

