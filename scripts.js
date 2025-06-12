initialLoad();
const initialized = Boolean(sessionStorage.getItem("initialized"));
if (initialized) {
    initializeAll();
}
function initialLoad() {
    const title = ["Hi, I'm Jason.", "A Full Stack Developer.", "Let's build something powerful together.", "(This site is under construction)"];
    writeChars('hero-text', title, 0, 0);
}

function initializeAll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    document.getElementById('main-body').classList.remove('hidden');
    setTimeout(showSlides, 5000, 1, "slide-resleriana");
    setTimeout(showSlides, 5000, 1, "slide-vt");
}

function showSlides(slideIndex, slideClass) {
    const slides = document.getElementsByClassName(slideClass);
    if (slideIndex == slides.length + 1) { slideIndex = 1 };
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000, slideIndex + 1, slideClass);
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
        document.getElementById('hero-button').classList.remove('hidden-animated');
        if (!initialized) {
            initializeAll();
            sessionStorage.setItem("initialized", true);
        }
    }
}
function goToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}