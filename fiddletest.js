var rainbow = function (word) {
    if (word === '') {
        console.error('please enter a string (or a string that isnt nothing)');
    }
    wLen = word.length;
    var letters = word.split('');
    var spannify = [];
    var holdIds = [];
    var holdAll = [];
    var resArr = [];
    var resId;
    var colPos;

    var spanning = function(ele, ind, arr) {
        spannify.push("<span id=\"" + ele + "." + ind + "-" + word  + "\">" + ele + "</span>");
    };

    var makeId = function(ele, ind, arr) {
    		console.log('making id: ' + ele + "." + ind + "-" + word);
        holdIds.push(ele + "." + ind + "-" + word);
        return ele + "." + ind + "-" + word;
    };

    letters.forEach(makeId);
    console.log('holdIds: ' + holdIds);
    letters.forEach(spanning);
    console.log('spannify: ' + spannify)

    var idGrab = function(ele, ind, arr) {
        holdAll.push(ele + "." + ind + "-" + word);
        return ele + "." + ind + "-" + word;
    };


    spannify.forEach(idGrab);
    console.log('holdAll: ' + holdAll);

    var docId = function(ele, ind, arr) {
         resArr.push("document.getElementById('" + ele + "')");
	       return "document.getElementById('" + ele + "')"
    };

    holdIds.forEach(docId);
    console.log('resArr: ' + resArr);

    var appending = function(ele, ind, arr) {
    		if (ind === word.length-1) {
          var spanJoin = spannify.join("");
          console.log('spanJoin: ' + spanJoin);
          var holdPara = document.createElement('p');
          holdPara.id = word + "-" + "holder";
          var addMe = holdPara.innerHTML = spanJoin;
          document.body.appendChild(holdPara);
        };
    };

    resArr.forEach(appending);

    var rainbowArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    var colorify = function(ele, ind, arr) {
    		console.log('test at ele: ' + ele + ': ' + ind % rainbowArray.length);
        var atId = document.getElementById('' + ele + '');
        atId.style.color = rainbowArray[ind % rainbowArray.length];
    };

    holdIds.map(colorify);
 };
 rainbow('codingRainbow!');
