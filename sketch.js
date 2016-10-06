(function() {

var wordInput = document.getElementById('word-input');
var wordSubmit = document.getElementById('word-submit');

//wordInput.addEventListener('input', function(){console.log('input received: ' + this.value);}, false);
wordInput.addEventListener('input',
    function(){rainbowify.rainbowify(wordInput.value);console.log('input sent! ' + wordInput.value);}, false);

wordSubmit.addEventListener('click',
    function(){rainbowify.rainbowify('oooh secret!');console.log('input sent: ' + wordInput.value);}, false);

})();
