
const title = ["Hi, I'm Jason.", "A passionate Full Stack Developer.", "Let's build something powerful together."];
writeChars('hero-text', title, 0, 0);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let slideIndex = 1;
setInterval(showSlides, 5000);

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    if(slideIndex == slides.length + 1) {slideIndex = 1};
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    slideIndex++;
}
function writeChars(elementId, text, index, lineIndex) {
    if (lineIndex < text.length) {
        if (index < text[lineIndex].length) {
            document.getElementById(elementId).innerHTML += text[lineIndex].charAt(index);
            index++;
            setTimeout(writeChars, 50, elementId, text, index, lineIndex);
        } else {
            document.getElementById('hero-text').appendChild(document.createElement("br"));
            lineIndex++;
            index = 0;
            writeChars(elementId, text, index, lineIndex);
        }
    } else {
        document.getElementById('hero-button').classList.remove('hidden');
    }
}
function goToSection(sectionId) {
    console.log(sectionId)
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}