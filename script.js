const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close-icon");
const menuBtn = document.querySelector(".menu-icon");

menuBtn.onclick =()=> {
	navLinks.classList.add("active");
}
closeBtn.onclick =()=> {
	navLinks.classList.remove("active");
}
