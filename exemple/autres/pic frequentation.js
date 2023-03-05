let input = [
    '20', '1806 4128',
    '7236 8088', '154 1588',
    '5283 8813', '6079 6868',
    '518 1024', '2467 8224',
    '6223 6616', '2678 8480',
    '3963 7906', '3671 9404',
    '745 9073', '5583 7580',
    '3 2153', '4431 4609',
    '3798 9565', '283 2905',
    '3337 5729', '4914 8356',
    '1389 8673'
];

main(input);


function main(input){
    console.error(input);
    let [nb,...data] = input;

    let cal = initTab(data);

    console.error(cal);

    let res = fillRes(cal);

    console.log(res);
}

function fillRes(cal){
    
    /*let OK = false;
    for (j=1;j<6;j++){
        let r = cal.filter(el=>el.id===j).map(e => e.cr);
        if(!OK) OK=calendar(r,OK);
    }*/
    let max = 0;
    let time = [];
    cal.forEach((elt,idx)=>{
        let t = elt.deb;
        time = time.filter(el=>el>t);
        
        time.push(elt.fin);

        max = time.length > max ? time.length : max;
    })

    return max;
}


function initTab(data){
    let arr = [];
    data.forEach((elt,idx)=>{
        const tabElt = elt.split(" ");
        const obj = {deb:parseInt(tabElt[0]), fin:parseInt(tabElt[1])}
        arr.push(obj);
    })
    arr.sort((a,b)=>{
        return a.deb - b.deb;
    })
    return arr;
}