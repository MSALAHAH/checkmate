// TypeEffect JS
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

// iFrame JS
const spanBold = document.getElementById('spanBold');
const iframeContainer = document.getElementById('iframeContainer');

spanBold.addEventListener('mouseover', () => {
    // Create an iframe element
    const iframe = document.createElement('iframe');
    iframe.src = 'https://msalahah.github.io/R4/';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = 0;

    // Append the iframe to the container
    iframeContainer.innerHTML = ''; // Clear previous content
    iframeContainer.appendChild(iframe);

    // Display the container
    iframeContainer.style.display = 'block';
});

spanBold.addEventListener('mouseout', () => {
    // Hide the container when mouse leaves the spanBold element
    iframeContainer.style.display = 'none';
});

