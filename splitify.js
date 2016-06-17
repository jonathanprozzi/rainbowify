
function rotator (word) {
    if (word === '') {
        console.error('please enter a string (or a string that isnt nothing)');
    }

    wLen = word.length;
    var letters = word.split('');

    for (var i = 0; i < letters.length; i++) {
        //<span>h</span>
        //need to append a unique id to each letter after spanning it
        var spanify = "<span>" + letters[i] + "</span>"; // places each letter inside a span
        console.log('letter: ' + letters[i] + "\n" + 'spanned: ' + spanify);


    }

    return letters;

}
rotator('hack');
rotator('asdf');
