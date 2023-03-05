let input = [
    '20 29', '2312 2384', '2305 2422',
    '453 1218', '1701 2467', '725 1586',
    '351 2362', '122 743', '1499 1589',
    '1114 1582', '982 1889', '1113 1412',
    '1147 2322', '2346 2375', '495 2078',
    '250 1657', '1417 2086', '855 1537',
    '1436 1783', '389 2203', '581 2402',
    '2318 2491', '516 1297', '2258 2433',
    '220 1855', '1478 2364', '2175 2300',
    '183 1732', '1115 1620', '2450 2476'
    ];

main(input);


function main(input){
    console.error(input);
    let [nb,...data] = input;
    nb = nb.split(" ")[0];


    let cal = initTab(data);

    /*let OK = false;
    for (j=1;j<6;j++){
        let r = cal.filter(el=>el.id===j).map(e => e.cr);
        if(!OK) OK=calendar(r,OK);
    }*/
    console.error(nb);
    console.error(cal);

    let res = fillRes(cal);

    console.error(res);
    if(res>nb){
        console.log("impossible");
    } else {
        let z = cal.map(el=>el.id);
        console.log(z.join(" "));
    }

}

function fillRes(cal){
    let cables = [];
    let maxs = [];
    cal.forEach((elt,idx)=>{
        //const obj = {exp:elt.fin}
        cables = cables.filter(el=>el>elt.deb);
        cables.push(elt.fin);
        cables.sort((a,b)=>a-b);
        maxs.push(cables.length);
    })

    return Math.max(...maxs);
}


function initTab(data){
    let arr = [];
    data.forEach((elt,idx)=>{
        const tabElt = elt.split(" ");
        const obj = {id:idx+1, deb:parseInt(tabElt[0]), fin:parseInt(tabElt[1])}
        arr.push(obj);
    })
    arr.sort((a,b)=>{
        return a.deb - b.deb;
    })
    return arr;
}