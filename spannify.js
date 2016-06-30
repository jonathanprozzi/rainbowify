
function rainbow (word) {
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

        //console.log('iteration: ' + i + ', span value: ' + spanning);

        //store the colors in an array with an index linked to the current iteration
        var colArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

        idx = letters[i] + "-" + word;
        holdIds.push(idx); //an array that holds each of these values

        idCol = idx+colPos;

        //needs to take this form:
            // document.getElementById('test-me').style.color = 'blue';
        resId = "document.getElementById('" + idx +"')" + colPos;
        //console.log('iteration: ' + i + ', res id: ' + resId); // just a log to check
        resArr.push(resId);

        if (i === letters.length-1){
            //console.log('this is the final iteration...appending');
            spanning = spannify.join(""); // this array holds all the unique ids as elements, ie spannify[0] is the unique id for the first letter.
            //time to actually append things since its the last iteration
            var holdHead = document.createElement('h3');
            holdHead.id = word + "-" + "holder";
            var addMe = holdHead.innerHTML = spanning;
            document.body.appendChild(holdHead);
            //at this point, the spans are all appended to the html with unique ids

            for (k = 0; k < holdIds.length; k++) { //iterate through each id and do stuff
                var atId = document.getElementById('' + holdIds[k] + '');
                atId.style.color = colArr[k];

                // if (wLen > colArr.length) {
                //     //wLen = word length
                //     //colArr = length of color array
                //     //if wLen exceeds the color array, then it needs to get set back to 0
                //     console.log('word length exceeds array length!');
                //
                //     var excessAmt = wLen - colArr.length;
                //     console.log('excess amt: ' + excessAmt);
                //
                //     for (var j = 0; j < excessAmt; j++) {
                //         console.log('wLen: ' + wLen);
                //         console.log(k);
                //         console.log(wLen - (k + 1));
                //         atId.style.color = colArr[wLen - (k + 1)];
                //
                //     }
                // } // end if statement

            }
        }
    }
    //return back the values
    /*
    return {
        spanning: spannify.join(""),
        resArr: resArr,
        resId: resId,
        wLen: wLen,
    };
    */
}

rainbow('rainbowst');

function randomize(word) {
    if (word === '') {
        console.error('please enter a string (or a string that isnt nothing)');
    }

    wLen = word.length;
    var letters = word.split('');
    var spannify = [];
    var holdIds = [];
    var resArr = [];
    var resId;

    for (var i = 0; i < letters.length; i++) {

    //    var spanning = "<span id=\"" + letters[i] + "-" + word + "-" +  Math.random() + "\">" + letters[i] + "</span>";
        var idHash = letters[i] + "-" + word + "-" +  Math.random();
        var spanning = "<span id=\"" + idHash + "\">" + letters[i] + "</span>";
        // var spanning = "<span id=\"" + letters[i] + "-" + word + "\">" + letters[i] + "</span>";


        spannify.push(spanning);
        //pulled from http://www.crockford.com/wrrrld/color.html
            //includes all css color values

        var colArr = [
            "aliceblue",
            "antiquewhite",
            "aqua",
            "aquamarine",
            "azure",
            "beige",
            "bisque",
            "black",
            "blanchedalmond",
            "blue",
            "blueviolet",
            "brown",
            "burlywood",
            "cadetblue",
            "chartreuse",
            "chocolate",
            "coral",
            "cornflowerblue",
            "cornsilk",
            "crimson",
            "cyan",
            "darkblue",
            "darkcyan",
            "darkgoldenrod",
            "darkgray",
            "darkgreen",
            "darkkhaki",
            "darkmagenta",
            "darkolivegreen",
            "darkorange",
            "darkorchid",
            "darkred",
            "darksalmon",
            "darkseagreen",
            "darkslateblue",
            "darkslategray",
            "darkturquoise",
            "darkviolet",
            "deeppink",
            "deepskyblue",
            "dimgray",
            "dodgerblue",
            "firebrick",
            "floralwhite",
            "forestgreen",
            "fuchsia",
            "gainsboro",
            "ghostwhite",
            "gold",
            "goldenrod",
            "gray",
            "green",
            "greenyellow",
            "honeydew",
            "hotpink",
            "indianred",
            "indigo",
            "ivory",
            "khaki",
            "lavender",
            "lavenderblush",
            "lawngreen",
            "lemonchiffon",
            "lightblue",
            "lightcoral",
            "lightcyan",
            "lightgoldenrodyellow",
            "lightgray",
            "lightgreen",
            "lightpink",
            "lightsalmon",
            "lightseagreen",
            "lightskyblue",
            "lightslategray",
            "lightsteelblue",
            "lightyellow",
            "lime",
            "limegreen",
            "linen",
            "magenta",
            "maroon",
            "mediumaquamarine",
            "mediumblue",
            "mediumorchid",
            "mediumpurple",
            "mediumseagreen",
            "mediumslateblue",
            "mediumspringgreen",
            "mediumturquoise",
            "mediumvioletred",
            "midnightblue",
            "mintcream",
            "mistyrose",
            "moccasin",
            "navajowhite",
            "navy",
            "oldlace",
            "olive",
            "olivedrab",
            "orange",
            "orangered",
            "orchid",
            "palegoldenrod",
            "palegreen",
            "paleturquoise",
            "palevioletred",
            "papayawhip",
            "peachpuff",
            "peru",
            "pink",
            "plum",
            "powderblue",
            "purple",
            "rebeccapurple",
            "red",
            "rosybrown",
            "royalblue",
            "saddlebrown",
            "salmon",
            "sandybrown",
            "seagreen",
            "seashell",
            "sienna",
            "silver",
            "skyblue",
            "slateblue",
            "slategray",
            "snow",
            "springgreen",
            "steelblue",
            "tan",
            "teal",
            "thistle",
            "tomato",
            "turquoise",
            "violet",
            "wheat",
            "white",
            "whitesmoke",
            "yellow",
            "yellowgreen"
        ];
        idx = letters[i] + "-" + word ;
        holdIds.push(idHash); //an array that holds each of these values
        resId = "document.getElementById('" + idHash +"')";
        console.log(idHash);
        resArr.push(resId);

        if (i === letters.length-1){
            //console.log('this is the final iteration...appending');
            spanning = spannify.join("");
            var holdHead = document.createElement('h3');
            holdHead.id = word + "-" + "holder";
            var addMe = holdHead.innerHTML = spanning;
            document.body.appendChild(holdHead);

            for (k = 0; k < holdIds.length; k++) { //iterate through each id and do stuff
                var atId = document.getElementById('' + holdIds[k] + '');
                var randNum = Math.floor(Math.random() * colArr.length);
        //        console.log('random: ' + randNum);
                atId.style.color = colArr[randNum];
            }
        }
    }
}

randomize('abcdefghijklmnopqrstuvwxyz');
