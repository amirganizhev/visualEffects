let changeThemeOne = document.querySelector(".theme-one");
let changeThemeTwo = document.querySelector(".theme-two");
let link = document.querySelector("link");

changeThemeOne.onclick = () => {
	link.href = "css/styleTwo.css";
}

changeThemeTwo.onclick = () => {
	link.href = "css/styleOne.css";
}

