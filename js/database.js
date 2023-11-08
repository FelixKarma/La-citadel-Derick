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
    ['<iframe class="videoPlayer" src="https://www.youtube.com/embed/cqTN1AQ09Yg?si=sDCADIQ8qEANCOXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        '<iframe class="videoPlayer" src="https://www.youtube.com/embed/SyimUCBIo6c?si=PwwQtQ7Xt-dRU_Sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ]
)
 
let demonSlayerSeason1 = new season(5,
    []
    )
 
let jojoSeason1 = new season(6,
    []
   
    )
 
let onePunchSeason1 = new season(12,
    []
    )
 
let goblinSlayerSeason1 = new season
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
 
let demonSlayer = new Anime(
    "Demon Slayer",
    "06 avril 2019",
    "Découvrez une aventure où le sang va couler sous la lame de l'épée. Nous sommes pendant l'ère Taishô. Tanjirô, un jeune et sympathique vendeur de charbon voit son quotidien changer radicalement après le massacre de sa famille par un démon. Seule sa petite sœur Nezuko survit à l'attaque, mais elle est transformée en un démon féroce. Ils partent tous deux en voyage afin de prendre leur revanche et de rendre à Nezuko son apparence d'origine. Vivez avec eux ce périple dans lequel le destin des humains et des démons s'entremêlent.",
    "4.9",
    "Koyoharu Gotōge",
    5,
    [demonSlayerSeason1],
    "https://lh3.googleusercontent.com/esRB5pmP2_iuVI3jSTvSqrZAe8o2iOdST3lXmx3h8RlRtcUiPiRoTSMfF1bhmoJrV3T6XmjuK_f4CxdaFezEwbIr=w640-h400-e365-rj-sc0x00ffffff",
    "https://assets.bubblebd.com/img/vuedgo04d6/9e10u1jczt.jpg",
    ["Action " , "Surnaturel ", "Shonen "]
)
 
let jojo = new Anime(
    "Jojo's Bizarre Adventure",
    "6 octobre 2012",
    "Kôichi Hirose est envoyé à Naples en Italie pour retrouver la trace de Haruno Shiobana. Il découvre qu'il vit sous le nom de Giorno Giovanna. Son ambition est de devenir le parrain du groupe mafieux Passione afin de convaincre ses membres de l'aider à éradiquer la criminalité dans la ville…",
    "4.8",
    "Hirohiko Araki",
    6,
    [jojoSeason1],
    "https://m.media-amazon.com/images/M/MV5BZDc3NGQ3ZWQtYjNkOC00MjhiLTg2N2YtNmZlOGNiZTFkOWNhXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg",
    "https://media.senscritique.com/media/000019211696/0/jojo_s_bizarre_adventure.jpg",
    ["Action" ,"Aventure" ,"Fantastique"]
    )
 
let onePunch = new Anime(
    "One-Punch Man",
    "3 juin 2009",
    "Saitama est un super-héros capable d'annihiler toute menace d'un seul coup de poing. Malheureusement pour lui, il devient si puissant qu'il peut battre n'importe quel adversaire en un seul coup. Totalement blasé, Saitama alias One-Punch Man devient même l'ennemi à abattre pour tous combattants qui veulent se faire un nom et Saitama doit donc faire face à de nouveaux ennemis tous les jours. Cela pose la question de savoir combien de temps cela pourrait-il encore durer ?",
    "4.8",
    "Yusuke Murata",
    2,
    [],
    "https://furansujapon.com/wp-content/uploads/2022/09/One-Punch-Man-1.jpg",
    "https://fr.web.img6.acsta.net/pictures/17/02/27/17/41/046707.jpg",
    ["Action" , "Humour", "SuperHero"]
    )
 
 
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
   
 
let animeArray =[jujutsuKaisen, demonSlayer ,jojo ,onePunch, goblinSlayer]