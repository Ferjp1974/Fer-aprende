document.addEventListener("DOMContentLoaded", function() {
const heading = document.createElement("h1");   heading.textContent = "Hola Fer!";
document.body.appendChild(heading);

const paragraph1 = document.createElement("p");
paragraph1.textContent = "Bienvenido a tu primer proyecto web.";
document.body.appendChild(paragraph1);

const paragraph2 = document.createElement("p");
paragraph2.textContent = "Esto es lo primero que has escrito.";
document.body.appendChild(paragraph2);
});
document.addEventListener("DOMContentLoaded", function() {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Esto es un nuevo parrafo";
    document.body.appendChild(newParagraph);
});
