// NAVBAR SHADOW

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("sticky", window.scrollY > 50);

});


// SCROLL REVEAL

const reveals = document.querySelectorAll(
    ".service-card, .gallery-item, .review-card, .about-content, .about-image"
);

window.addEventListener("scroll", revealElements);

function revealElements() {

    for (let i = 0; i < reveals.length; i++) {

        const windowHeight = window.innerHeight;

        const revealTop = reveals[i].getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            reveals[i].classList.add("active");

        }

    }

}


// ADD ACTIVE CLASS STYLE

reveals.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(80px)";
    element.style.transition = "1s ease";

});

document.addEventListener("scroll", () => {

    reveals.forEach(element => {

        if (element.classList.contains("active")) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0px)";

        }

    });

});


// GALLERY AUTO GLOW EFFECT

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.boxShadow =
            "0px 0px 40px rgba(255,213,79,0.5)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.boxShadow = "none";

    });

});


// HERO PARALLAX EFFECT

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    let scrollPosition = window.pageYOffset;

    hero.style.backgroundPositionY =
        scrollPosition * 0.5 + "px";

});


// TYPING EFFECT

const text = "Cinematic Wedding Photography";

let index = 0;

function typeEffect() {

    const heading = document.querySelector(".hero-content p");

    if (index < text.length) {

        heading.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 60);

    }

}

document.querySelector(".hero-content p").innerHTML = "";

typeEffect();