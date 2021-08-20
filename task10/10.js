//var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
//var uniqueNames = [];
//$.each(names, function (i, el){
//    if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
//});

//alert (  ); 

function uniq_fast(a) {
    let seen = {};
    let out = [];
    let len = a.length;
    let j = 0;
    for(let i = 0; i < len; i++) {
        let item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}

alert ( uniq_fast(["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"]) )