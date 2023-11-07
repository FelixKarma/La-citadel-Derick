//the first part simulate

class Account {
    constructor(username, password, email, profilePic) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.profilePic = profilePic;
    }
}
class season {
    constructor(episodeNbr, episodeList) {
        this.episodeNbr = episodeNbr;
        this.episodeList = episodeList
    }
}

class Anime {
    constructor(title, releaseDate, description, rating, autor, numberOfSeason, seasons, backgroundImage, cover, genre) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.description = description;
        this.rating = rating;
        this.autor = autor;
        this.numberOfSeason = numberOfSeason;
        this.season = seasons
        this.backgroundImage = backgroundImage;
        this.cover = cover;
        this.genre = genre;
        this.season = season
    }
}

let jujutsuKaisenSeason1 = new season(37,
    ['<iframe class="videoPlayer" src="https://www.youtube.com/embed/cqTN1AQ09Yg?si=sDCADIQ8qEANCOXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ]
)
let jujutsuKaisen = new Anime('Jujutsu Kaisen',
    '28 avril 2017',
    "Souffrance, regrets, humiliations... les sentiments négatifs que ressentent les humains se transforment peu à peu en fléaux se cachant dans notre existence. Sévissant dans le monde entier, ils sont capables d'entraîner les gens dans de terribles malheurs et, parfois même, jusqu'à la mort. De plus, ces créatures ne peuvent être exorcisées que par un autre fléau. Lycéen ordinaire, Yuji Itadori est toutefois doté d'une force physique hors du commun. Un jour, pour sauver un ami attaqué par un fléau, il mange un des doigts du démon à deux visages, devenant à son tour un fléau.",
    "4.9",
    'Gege Akutami',
    2,
    [jujutsuKaisenSeason1],
    'https://animotaku.fr/wp-content/uploads/2021/05/Jujutsu-kaisen-anime-visuel-8.jpeg',
    'https://fr.web.img3.acsta.net/pictures/20/09/14/10/31/4875617.jpg',
    ['Action', 'Surnaturel', 'Shonen']
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
mangakaName = jujutsuKaisen.autor;
let animDescription = "";
animDescription = jujutsuKaisen.description;
let animTitle = "";
animTitle = jujutsuKaisen.title;
let animeCover = "";
animeCover= jujutsuKaisen.cover;
let animeBackground = "";
animeBackground = jujutsuKaisen.backgroundImage;
let animeRating = "<img src='../image/st.png' height =50 > :" + jujutsuKaisen.rating


//get all element with their class name
// not same as animTitle !!!
let displayedVideo = document.getElementsByClassName("videoPlayerSection")
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
rating[0].innerHTML = animeRating
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
        }
    
    }, 1)

}
  

