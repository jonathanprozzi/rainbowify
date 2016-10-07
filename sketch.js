var wordInput = document.getElementById('word-input');
var wordSubmit = document.getElementById('word-submit');
var wantSpaces = document.getElementById('rainbowify-option-spaces');

wordInput.addEventListener('keypress',
    function(e) {
        if (e.keyCode === 13) {
            if (wantSpaces.checked === false) {
                rainbowify(wordInput.value, false);
            }
            if (wantSpaces.checked === true) {
                rainbowify(wordInput.value, true);
            }
        }
    }, false);

wordSubmit.addEventListener('click',
    function() {
        if (wantSpaces.checked === false) {
            rainbowify(wordInput.value, false);
        }
        if (wantSpaces.checked === true) {
            rainbowify(wordInput.value, true);
        }
    }, false);
