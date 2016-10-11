var wordInput = document.getElementById('word-input');
var wordSubmit = document.getElementById('word-submit');
var wantSpaces = document.getElementById('rainbowify-option-spaces');
var wantRandom = document.getElementById('rainbowify-option-randomize');
var rainbowHeader = document.getElementById('rainbow-header');

wordInput.addEventListener('keypress',
    function(e) {
        if (e.keyCode === 13) {
            if (wantSpaces.checked === false && wantRandom.checked === false ) {
                rainbowify(wordInput.value, false, false);
            }
            if (wantSpaces.checked === true && wantRandom.checked === false) {
                rainbowify(wordInput.value, true, false);
            }
            if (wantSpaces.checked === true && wantRandom.checked === true ) {
                rainbowify(wordInput.value, true, true);
            }
            if (wantSpaces.checked === false && wantRandom.checked === true) {
                rainbowify(wordInput.value, false, true);
            }
        }
    }, false);

wordSubmit.addEventListener('click',
    function() {
        if (wantSpaces.checked === false && wantRandom.checked === false ) {
            rainbowify(wordInput.value, false, false);
        }
        if (wantSpaces.checked === true && wantRandom.checked === false) {
            rainbowify(wordInput.value, true, false);
        }
        if (wantSpaces.checked === true && wantRandom.checked === true ) {
            rainbowify(wordInput.value, true, true);
        }
        if (wantSpaces.checked === false && wantRandom.checked === true) {
            rainbowify(wordInput.value, false, true);
        }
    }, false);
