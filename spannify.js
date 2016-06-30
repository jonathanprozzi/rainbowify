
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
            spanning = spannify.join(""); // this array holds all the unique ids as elements, ie spannify[0] is the unique id for the first letter.
            //time to actually append things since its the last iteration
            var holdHead = document.createElement('h3');
            holdHead.id = word + "-" + "holder";
            var addMe = holdHead.innerHTML = spanning;
            document.body.appendChild(holdHead);
            //at this point, the spans are all appended to the html with unique ids

            for (k = 0; k < holdIds.length; k++) { //iterate through each id and do stuff
                var idArr = [];
                //console.log('testing holdIds: ' + holdIds[k]);
                var atId = document.getElementById('' + holdIds[k] + '');
                console.log(atId);
                console.dir(holdIds);
                console.log('length check: letters- ' + letters.length);
                console.log('length check ids-' + holdIds.length);
                atId.style.color = colArr[k];

                // if (wLen > colArr.length) {
                //     //wLen = word length
                //     //colArr = length of color array
                //     //if wLen exceeds the color array, then it needs to get set back to 0
                //     console.log('word length exceeds array length!');
                //
                //     var excessAmt = wLen - colArr.length;
                //     console.log('excess amt: ' + excessAmt);

                    // for (var j = 0; j < excessAmt; j++) {
                    //     var xst = colArr.length - excessAmt;
                    //     console.log('wLen: ' + wLen);
                    //     console.log('color array: ' + colArr.length);
                    //     var currentColor = (wLen) % colArr.length;
                    //     console.log('current color: ' + currentColor);
                    //     console.log('test: ' + xst);
                    //     console.log('test 2: ' + colArr[j]);
                    //     atId.style.color = colArr[currentColor];
                    // }
                //} // end if statement
            //    atId.style.color = colArr[k];
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

rotator('rainbow');
