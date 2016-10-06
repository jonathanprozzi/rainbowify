var rainbowify = function(word) {

    if (word === '') {
        console.error('please enter a string (or a string that isnt nothing)');
    }

    wLen = word.length;
    var letters = word.split('');
    var spannify = [];
    var holdIds = [];
    var holdAll = [];
    var resArr = [];

    var spanning = function(ele, ind, arr) {
        spannify.push("<span id=\"" + ele + "." + ind + "-" + word + "\">" + ele + "</span>");
    };

    var makeId = function(ele, ind, arr) {
        holdIds.push(ele + "." + ind + "-" + word);
        return ele + "." + ind + "-" + word;
    };

    letters.forEach(spanning);
    letters.forEach(makeId);

    var idGrab = function(ele, ind, arr) {
        holdAll.push(ele + "." + ind + "-" + word);
        return ele + "." + ind + "-" + word;
    };

    spannify.forEach(idGrab);

    var docId = function(ele, ind, arr) {
        resArr.push("document.getElementById('" + ele + "')");
        return "document.getElementById('" + ele + "')";
    };

    holdIds.forEach(docId);

    var appending = function(ele, ind, arr) {
        if (ind === word.length - 1) {
            var spanJoin = spannify.join("");
            var holdPara = document.createElement('p');
            holdPara.id = word + "-" + "holder";
            var addMe = holdPara.innerHTML = spanJoin;
            var rainbowHolder = document.getElementById('rainbow-holder');
            rainbowHolder.appendChild(holdPara);
        }
    };

    resArr.forEach(appending);

    var rainbowArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    var colorify = function(ele, ind, arr) {
        var atId = document.getElementById('' + ele + '');
        atId.style.color = rainbowArray[ind % rainbowArray.length];
    };

    holdIds.map(colorify);

};

rainbowify('codingRainbow!');
rainbowify('words are great when they become rainbows!');
rainbowify('is that the case? i think so!');
var wordInput = document.getElementById('word-input');
var wordSubmit = document.getElementById('word-submit');

//wordInput.addEventListener('input', function(){console.log('input received: ' + this.value);}, false);
wordInput.addEventListener('input',
    function() {
        rainbowify(wordInput.value);
        console.log('input sent! ' + wordInput.value);
    }, false);

wordSubmit.addEventListener('click',
    function() {
        rainbowify('oooh secret!');
        console.log('input sent: ' + wordInput.value);
    }, false);
