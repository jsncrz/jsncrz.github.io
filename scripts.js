initialLoad();
const initialized = Boolean(sessionStorage.getItem("initialized"));
let reslerianaIndex = 1;
let vtIndex = 1;

if (initialized) {
    initializeAll();
}
function initialLoad() {
    const title = ["Hi, I'm Jason.", "A Full Stack Developer.", "Let's build something powerful together.", "(This site is under construction)"];
    writeChars('hero-text', title, 0, 0);
}

function initializeParticles() {
    (async () => {
        await loadFireflyPreset(tsParticles);

        await tsParticles.load({
            id: "tsparticles",
            options: {
                preset: "firefly",
                background: {
                    color: "#21252b"
                },
                particles: {
                    size: {
                        value: { min: 0.1, max: 5 },
                    },
                    number: {
                        limit: { 
                            mode: "delete",
                            value: 50
                        }
                    }
                }
            },
        });
    })();
    
}
function initializeAll() {
    initializeParticles();
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    document.getElementById('main-body').classList.remove('hidden');
    setTimeout(showSlides, 0, reslerianaIndex, "slide-resleriana");
    setTimeout(showSlides, 0, vtIndex, "slide-vt");
}

function debounce(func) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, 50);
    };
}
function showSlides(slideIndex, slideClass) {
    const slides = document.getElementsByClassName(slideClass);
    if (slideIndex == slides.length + 1) { slideIndex = 1 };
    if (slideIndex == 0) { slideIndex = slides.length };
    if (slideClass === 'slide-resleriana') {
        reslerianaIndex = slideIndex;
    } else if (slideClass === 'slide-vt') {
        vtIndex = slideIndex;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
const updateSlide = debounce((slideIndex, slideClass) => showSlides(slideIndex, slideClass));

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