//              بِسْم اللَّه الرَّحْمن الرَّحِيم
//  وَعَلَّمَكَ مَا لَمْ تَكُن تَعْلَمُ ۚ وَكَانَ فَضْلُ ٱللَّهِ عَلَيْكَ عَظِيمًۭا
var sentenceParts = [];

function updateSentence() {
    document.getElementById('sentence').value = sentenceParts.join(' ').trim();
}


function togglemainCheckbox1Options() {
    var div = document.getElementById("styledDiv");
    var checkbox = document.getElementById("mainCheckbox1");

    if (checkbox.checked) {
        div.classList.add("selected"); // Apply the styles when the checkbox is checked
    } else {
        div.classList.remove("selected"); // Remove the styles when the checkbox is unchecked
    }
}


// function uncheckAll() {
//     var checkboxes = document.getElementsByName('checkbox');
//     for (var i = 0; i < checkboxes.length; i++) {
//         checkboxes[i].checked = false;
//     }
//     sentenceParts = [];
//     updateSentence();
// }

function reloadPage() {
    window.location.reload();
}


function copyToClipboard() {
    var textarea = document.getElementById('sentence');
    textarea.select();
    document.execCommand('copy');
}

// SUB-OPTIONS FUNCTIONS BELOW
// SUBs=======================================================================

// MAIN BOX 1 FUNCTION
function togglemainCheckbox1Options() {
    var mainCheckbox1Checkbox = document.getElementById('mainCheckbox1');
    var mainCheckbox1Options = document.getElementById('mainCheckbox1Options');

    if (mainCheckbox1Checkbox.checked) {
        mainCheckbox1Options.style.display = 'block';
    } else {
        mainCheckbox1Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 2 FUNCTION
function togglemainCheckbox2Options() {
    var mainCheckbox2Checkbox = document.getElementById('mainCheckbox2');
    var mainCheckbox2Options = document.getElementById('mainCheckbox2Options');

    if (mainCheckbox2Checkbox.checked) {
        mainCheckbox2Options.style.display = 'block';
    } else {
        mainCheckbox2Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 3 FUNCTION
function togglemainCheckbox3Options() {
    var mainCheckbox3Checkbox = document.getElementById('mainCheckbox3');
    var mainCheckbox3Options = document.getElementById('mainCheckbox3Options');

    if (mainCheckbox3Checkbox.checked) {
        mainCheckbox3Options.style.display = 'block';
    } else {
        mainCheckbox3Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 4 FUNCTION
function togglemainCheckbox4Options() {
    var mainCheckbox4Checkbox = document.getElementById('mainCheckbox4');
    var mainCheckbox4Options = document.getElementById('mainCheckbox4Options');

    if (mainCheckbox4Checkbox.checked) {
        mainCheckbox4Options.style.display = 'block';
    } else {
        mainCheckbox4Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 5 FUNCTION
function togglemainCheckbox5Options() {
    var mainCheckbox5Checkbox = document.getElementById('mainCheckbox5');
    var mainCheckbox5Options = document.getElementById('mainCheckbox5Options');

    if (mainCheckbox5Checkbox.checked) {
        mainCheckbox5Options.style.display = 'block';
    } else {
        mainCheckbox5Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 6 FUNCTION
function togglemainCheckbox6Options() {
    var mainCheckbox6Checkbox = document.getElementById('mainCheckbox6');
    var mainCheckbox6Options = document.getElementById('mainCheckbox6Options');

    if (mainCheckbox6Checkbox.checked) {
        mainCheckbox6Options.style.display = 'block';
    } else {
        mainCheckbox6Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 7 FUNCTION
function togglemainCheckbox7Options() {
    var mainCheckbox7Checkbox = document.getElementById('mainCheckbox7');
    var mainCheckbox7Options = document.getElementById('mainCheckbox7Options');

    if (mainCheckbox7Checkbox.checked) {
        mainCheckbox7Options.style.display = 'block';
    } else {
        mainCheckbox7Options.style.display = 'none';
    }
    updateSentence();
}

// MAIN BOX 8 FUNCTION
function togglemainCheckbox8Options() {
    var mainCheckbox8Checkbox = document.getElementById('mainCheckbox8');
    var mainCheckbox8Options = document.getElementById('mainCheckbox8Options');

    if (mainCheckbox8Checkbox.checked) {
        mainCheckbox8Options.style.display = 'block';
    } else {
        mainCheckbox8Options.style.display = 'none';
    }
    updateSentence();
}
                            // SUB BOX 0-8 FUNCTION 
                            function togglesubMainCheckbox0Options() {
                                var subMainCheckbox0Checkbox = document.getElementById('subMainCheckbox0');
                                var subMainCheckbox0Options = document.getElementById('subMainCheckbox0Options');

                                if (subMainCheckbox0Checkbox.checked) {
                                    subMainCheckbox0Options.style.display = 'block';
                                } else {
                                    subMainCheckbox0Options.style.display = 'none';
                                }
                                updateSentence();
                            }
                            // SUB BOX 1-8 FUNCTION
                            function togglesubMainCheckbox1Options() {
                                var subMainCheckbox1Checkbox = document.getElementById('subMainCheckbox1');
                                var subMainCheckbox1Options = document.getElementById('subMainCheckbox1Options');
                            
                                if (subMainCheckbox1Checkbox.checked) {
                                    subMainCheckbox1Options.style.display = 'block';
                                } else {
                                    subMainCheckbox1Options.style.display = 'none';
                                }
                                updateSentence();
                            }

                            // SUB BOX 2-8 FUNCTION
                            function togglesubMainCheckbox2Options() {
                                var subMainCheckbox2Checkbox = document.getElementById('subMainCheckbox2');
                                var subMainCheckbox2Options = document.getElementById('subMainCheckbox2Options');
                            
                                if (subMainCheckbox2Checkbox.checked) {
                                    subMainCheckbox2Options.style.display = 'block';
                                } else {
                                    subMainCheckbox2Options.style.display = 'none';
                                }
                                updateSentence();
                            }

                            // SUB BOX 3-8 FUNCTION
                            function togglesubMainCheckbox3Options() {
                                var subMainCheckbox3Checkbox = document.getElementById('subMainCheckbox3');
                                var subMainCheckbox3Options = document.getElementById('subMainCheckbox3Options');
                            
                                if (subMainCheckbox3Checkbox.checked) {
                                    subMainCheckbox3Options.style.display = 'block';
                                } else {
                                    subMainCheckbox3Options.style.display = 'none';
                                }
                                updateSentence();
                            }

                            // SUB BOX 4-8 FUNCTION
                            function togglesubMainCheckbox4Options() {
                                var subMainCheckbox4Checkbox = document.getElementById('subMainCheckbox4');
                                var subMainCheckbox4Options = document.getElementById('subMainCheckbox4Options');
                            
                                if (subMainCheckbox4Checkbox.checked) {
                                    subMainCheckbox4Options.style.display = 'block';
                                } else {
                                    subMainCheckbox4Options.style.display = 'none';
                                }
                                updateSentence();
                            }

                            // SUB BOX 5-8 FUNCTION
                            function togglesubMainCheckbox5Options() {
                                var subMainCheckbox5Checkbox = document.getElementById('subMainCheckbox5');
                                var subMainCheckbox5Options = document.getElementById('subMainCheckbox5Options');
                            
                                if (subMainCheckbox5Checkbox.checked) {
                                    subMainCheckbox5Options.style.display = 'block';
                                } else {
                                    subMainCheckbox5Options.style.display = 'none';
                                }
                                updateSentence();
                            }

// SUBs=======================================================================
window.onload = function () {
    var checkboxes = document.getElementsByName('checkbox');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', handleCheckboxChange);
    }
}


function handleCheckboxChange(event) {
    var checkbox = event.target;
    if (checkbox.checked) {
        if (sentenceParts.indexOf(checkbox.value) === -1) {
            sentenceParts.push(checkbox.value);
        }
    } else {
        var index = sentenceParts.indexOf(checkbox.value);
        if (index !== -1) {
            sentenceParts.splice(index, 1);
        }
    }
    updateSentence();
}
