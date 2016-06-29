//var testMe = document.getElementById('test-me');
//testMe.style.color = 'blue';
// document.getElementById('test-me').style.color = 'blue';
// document.getElementById('test-me').style.backgroundColor = 'black';

function rotator (word) {
    if (word === '') {
        console.error('please enter a string (or a string that isnt nothing)');
    }

    wLen = word.length;
    var letters = word.split('');
    var spannify = [];
    var resArr = [];
    var resId = null;

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
        var bdx = '.style.color = "green"';
        var idCol = idx+adx;
        var idCol2 = idx+bdx;
        //console.log(idCol);

        //needs to take this form:
            // document.getElementById('test-me').style.color = 'blue';
            resId = "document.getElementById('" + idx +"')" + adx;
            resArr.push(resId);
    }

    return {
        spanning: spannify.join(""),
        resArr: resArr,
        resId: resId,
        wLen: wLen
    };

}

var hackA = rotator('asdf').spanning;
var makeP = document.createElement('p');
document.body.appendChild(makeP);
makeP.innerHTML = hackA;
console.log("span 1 : " + rotator('asdf').resArr[0]);
console.log('length of word/iterations: ' + wLen);

var firstVal = rotator('asdf').resArr[0];
var secVal = rotator('asdf').resArr[1];
console.log('span 1: ' + firstVal);
console.log('span 2: ' + secVal);
console.dir(rotator('asdf').resArr);
//console.log("this should be equal to previous value: " + testF);
// document.getElementById('h-hacking').style.color = "blue"
rotator('asdf');

//console.log('final spanned content: ' + '\n' + hackA);
