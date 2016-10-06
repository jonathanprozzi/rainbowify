var wordInput = document.getElementById('word-input');
var wordSubmit = document.getElementById('word-submit');

wordInput.addEventListener('keypress',
    function(e) {
        if (e.keyCode === 13) {
            rainbowify(wordInput.value);
        }
    }, false);
    
wordSubmit.addEventListener('click',
    function() {
        rainbowify(wordInput.value);
    }, false);
