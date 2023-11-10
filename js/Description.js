let url = document.location.href.split("=");
let cardCliked = parseInt(url[1])
console.log(cardCliked);
let numberOfEpisode = jujutsuKaisenSeason1.episodeNbr;
let episodListSection = document.getElementsByClassName("episodListSection");
let divContent="";
for (let i = 0; i < numberOfEpisode; i++) {
    let y = i+1
 
    divContent += "<div class='EpCarDiv'  id='slide" + i + "' onclick='buttonPressed("+i+")' ><img onclick='increaseHeight()' class='episodeListImage' src='" + animeArray[cardCliked].cover + "' alt=''> <p class='episodNbrP'> Episode "+ y+" </p></div>"

}
episodListSection[0].innerHTML = divContent;

// attribute every elements to a var
let mangakaName = "";
mangakaName = animeArray[cardCliked].autor;
let seasonNbr = "";
seasonNbr = animeArray[cardCliked].numberOfSeason;
let release = "";
release = animeArray[cardCliked].releaseDate;
let animDescription = "";
animDescription = animeArray[cardCliked].description;
let animTitle = "";
animTitle = animeArray[cardCliked].title;
let animeCover = "";
animeCover= animeArray[cardCliked].cover;
let animeBackground = "";
animeBackground = animeArray[cardCliked].backgroundImage;
let animeRating = "<img src='../image/st.png' height =50 > :" + animeArray[cardCliked].rating


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

for (let genre of animeArray[cardCliked].genre) {

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
  

function addWishList() {
    localStorage.setItem("animesWish", true);
}