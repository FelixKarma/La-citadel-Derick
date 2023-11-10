

const description = localStorage.getItem("description")

let userRadio = document.getElementById('user-radio')
console.log (userRadio);
userRadio.innerHTML = `<img alt='' width='150px' id="userImg"></img>`;
let userImg = document.getElementById("userImg")
userImg.setAttribute("src", radio)
let userName = document.getElementById('profil_username')
console.log (userRadio);
userName.innerHTML = `<p>${username}</p>`;
let userDescription = document.getElementById('description')
userDescription.innerHTML =`<p>${description}</p>`;

