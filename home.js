// Animation du bouton

const button = document.getElementById("btn");

button.addEventListener("click", () => {

    button.innerHTML = "Chargement...";

    setTimeout(() => {
        document.querySelector(".features").scrollIntoView({
            behavior: "smooth"
        });

        button.innerHTML = "Commencer";
    }, 700);

});


// Animation des cartes

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
        card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 0 15px rgba(0,0,0,0.08)";
    });

});


// Apparition des cartes au scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});