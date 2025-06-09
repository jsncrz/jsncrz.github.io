
const title = ["Hi, I'm Jason.","A passionate Full Stack Developer.", "Let's build something powerful together."];
writeChars('hero-title', title, 0, 0);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function writeChars(elementId, text, index, lineIndex) {
    if (lineIndex < text.length) {
        if (index < text[lineIndex].length) {
            document.getElementById(elementId).innerHTML += text[lineIndex].charAt(index);
            index++;
            setTimeout(writeChars, 35, elementId, text, index, lineIndex);
        } else {
            document.getElementById('hero-title').appendChild(document.createElement("br"));
            lineIndex++;
            index = 0;
            writeChars(elementId, text, index, lineIndex);
        }
    }
}