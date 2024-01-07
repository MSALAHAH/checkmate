const typeElements = document.querySelectorAll('[id="typeEffect"]');
typeElements.forEach((element) => {
    let text = element.innerText;
    element.innerText = '';

    function typeWriter(text, i, element) {
        if (i < text.length) {
            if (text.charAt(i) === ' ') {
                element.innerHTML += '&nbsp;';
            } else {
                element.innerText += text.charAt(i);
            }
            i++;
            setTimeout(function () {
                typeWriter(text, i, element);
            }, 120); //speed
        }
    }

    typeWriter(text, 0, element);
});