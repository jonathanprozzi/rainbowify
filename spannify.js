//var testMe = document.getElementById('test-me');
//testMe.style.color = 'blue';
document.getElementById('test-me').style.color = 'blue';
document.getElementById('test-me').style.backgroundColor = 'black';

function rotator (word) {
    if (word === '') {
        console.error('please enter a string (or a string that isnt nothing)');
    }

    wLen = word.length;
    var letters = word.split('');
    var spannify = [];

    for (var i = 0; i < letters.length; i++) {

        //<span id ="unique-id">h</span>
            //need to append a unique id to each letter after spanning it
        //this places each letter inside a span
        var spanning = "<span id=\"" + letters[i] + "-" + word  + "\">" + letters[i] + "</span>";
        spannify.push(spanning); //push each spanning value to an array
        //var apx = document.body.appendChild(spanning);
        //console.log(apx);
        //console.log(spanning);
        var idx = letters[i] + "-" + word;
        var adx = '.style.color = "blue"';
    //    console.log(idx);
    //    console.log(adx);
        var idadx = idx+adx;
        console.log(idadx);
        //console.log(spanning);


    }
    return spannify.join("");

}

var hackA = rotator('asdfasdfadsf');
var makeP = document.createElement('p');
document.body.appendChild(makeP);
makeP.innerHTML = hackA;

console.log('final spanned content: ' + '\n' + hackA);
