const textNoFav = document.getElementById("textNoFav");
const wishList = document.getElementsByClassName("wishlist");

if (localStorage.getItem("animesWish")) {
    textNoFav.innerText = '';
    wishList[1].style.display = "block";
}
