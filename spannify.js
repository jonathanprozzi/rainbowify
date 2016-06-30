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
    var holdIds = [];
    var resArr = [];
    var resId;
    var colPos;

    for (var i = 0; i < letters.length; i++) {

        //<span id ="unique-id">h</span>
            //need to append a unique id to each letter after spanning it
        //this places each letter inside a span
        var spanning = "<span id=\"" + letters[i] + "-" + word  + "\">" + letters[i] + "</span>";

        spannify.push(spanning); //push each spanning value to an array
        //var apx = document.body.appendChild(spanning);
        //append the style properties to the new ids

        console.log('iteration: ' + i + ', span value: ' + spanning);

        //store the colors in an array with an index linked to the current iteration
        var colArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

        idx = letters[i] + "-" + word;
        holdIds.push(idx); //an array that holds each of these values

        idCol = idx+colPos;

        //needs to take this form:
            // document.getElementById('test-me').style.color = 'blue';
        resId = "document.getElementById('" + idx +"')" + colPos;
        console.log('iteration: ' + i + ', res id: ' + resId); // just a log to check
        resArr.push(resId);

        if (i === letters.length-1){
            console.log('this is the final iteration...appending');
            spanning = spannify.join("");
            //time to actually append things since its the last iteration
            var holdP = document.createElement('p');
            holdP.id = word + "-" + "holder";
            var addMe = holdP.innerHTML = spanning;
            document.body.appendChild(holdP);
            //at this point, the spans are all appended to the html with unique ids
            console.dir(spannify); // this array holds all the unique ids as elements, ie spannify[0] is the unique id for the first letter. need to slice it to get the actual id. slice it out from the span
        //    console.dir(holdIds);
        //    console.log(holdIds[0]);

            for (k = 0; k < holdIds.length; k++) { //iterate through each id and do stuff
                var idArr = [];
                //console.log('testing holdIds: ' + holdIds[k]);
                var atId = document.getElementById('' + holdIds[k] + '');
                console.log(atId);

                /* attempt one - mistakenly converted the .style.color to a string :)
                console.log('testing atId: ' + atId + ' at pos: ' + k);
                idArr.push(atId);
                var idJoined = atId + '.style.color = "' + colArr[k] + "\"";
                console.log(idJoined);
                console.log('testing idJoined: ' + idJoined);
                console.log('id arr: ' + idArr[k]);
                console.log(document.getElementById('\'' + idArr[k] + '.style.color = "' + colArr[k] + "\""));

                */
                if (wLen > colArr.length) {
                    //wLen = word length
                    //colArr = length of color array
                    //if wLen exceeds the color array, then it needs to get set back to 0
                    console.log('word length exceeds array length!');

                    var excessAmt = wLen - colArr.length;

                    for (var j = 0; j < excessAmt; j++) {
                        // colPos = '.style.color = "' + colArr[j] + '"';
                        colPos = colArr[j];
                    }

                } else {
                    // colPos = '.style.color = "' + colArr[i]+ '"';
                        colPos = colArr[i];
                }
                atId.style.color = colArr[k];
            }

        }

    }

    //return back the values
    return {
        spanning: spannify.join(""),
        resArr: resArr,
        resId: resId,
        wLen: wLen,
    };
}

// testing and debugging section:

//console.log('final spanned content: ' + rotator('asdf').spanning);
    // final spanned content: <span id="a-asdf">a</span><span id="s-asdf">s</span><span id="d-asdf">d</span><span id="f-asdf">f</span>

/*
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
//console.log("this should be equal to previous value: " + testF);
// document.getElementById('h-hacking').style.color = "blue"
console.log(rotator('asdf').spanning);
*/
rotator('rainbowify');
// var test = document.getElementById('\'' + rotator.atId + '\'');
// test.style.color="red";
