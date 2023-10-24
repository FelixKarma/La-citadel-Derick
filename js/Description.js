class Anime{
    constructor(title ,releaseDate, description, rating, autor, episodeNumber,episodeList[] ,backgroundImage, cover, genre ){
        this.title = title;
        this.releaseDate = releaseDate;
        this.description = description;
        this.rating = rating;
        this.autor = autor;
        this.episodeNumber = episodeNumber;
        this.episodeList = episodeList;
        this.backgroundImage = backgroundImage;
        this.cover = cover;
        this.genre=genre;
    }   
}

let blackClover = new Anime ("Black Clover" ,"16/02/2015", "bla" , 4.5 , "Yūki Tabata" ,170 , blackCloverList[], "background" , "cover" , "Action, aventure,romance,fantastique");

class Account{
    constructor(username, password, email,profilePic){
    this.username = username;
    this.password = password; 
    this.email = email;
    this.profilePic = profilePic;    
    }
}

