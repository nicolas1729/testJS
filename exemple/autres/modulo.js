console.log("deb");
           
            
let input = [ '2', '3', '2', '3' ];

//main(input);
let r = input.reduce((a,c)=>a+parseInt(c),0);

console.error(r%6);
if(r===0)console.log("violet");
if(r===1)console.log("orange");
if(r===2)console.log("jaune");
if(r===3)console.log("vert");
if(r===4)console.log("rose");
if(r===5)console.log("bleu");


function main(input){
    console.error(input);
    const [a, ...data] = input;

    let cal = initTab(data);

    let OK = false;
    for (j=1;j<6;j++){
        let r = cal.filter(el=>el.id===j).map(e => e.cr);
        if(!OK) OK=calendar(r,OK);
    }

    //console.log(dispo);
}


function calendar(r,OK){
    let grid = new Array(600).fill(0);
    let arr = [];
    r.forEach(elt=>{
        const tabElt = elt.split("-");
        let debHM = tabElt[0].split(":");
        let minutesDeb = parseInt(debHM[0])*60-480+parseInt(debHM[1]);
        let finHM = tabElt[1].split(":");
        let minutesFin = parseInt(finHM[0])*60-480+parseInt(finHM[1]);
        const obj = {deb:minutesDeb, fin:minutesFin}

        for(i=minutesDeb;i<=minutesFin;i++){
            grid[i] = 1;
        }
        arr.push(obj);
    })

    arr.sort((a,b)=>a.deb-b.deb)

    let nbDispo=0;
    let dispo = {}
    for(i=0;i<=600;i++){
        if(grid[i] === 0){
            nbDispo++;
        }else{
            nbDispo=0;
        }
        if(nbDispo===60 && OK === false){
            OK=true;
            let heureFin = Math.floor(i/60)+8;
            let minFin = i%60;
            let heureDeb = Math.floor((i-59)/60)+8;
            let minDeb = (i-59)%60;
            dispo = {deb:heureDeb.toLocaleString(undefined, {minimumIntegerDigits: 2})+":"+minDeb.toLocaleString(undefined, {minimumIntegerDigits: 2}), fin:heureFin.toLocaleString(undefined, {minimumIntegerDigits: 2})+":"+minFin.toLocaleString(undefined, {minimumIntegerDigits: 2})};
            console.log(dispo.deb+"-"+dispo.fin);
        }
    }
    return OK;
}


function initTab(data){
    let arr = [];
    data.forEach(elt=>{
        const tabElt = elt.split(" ");
        const obj = {id:parseInt(tabElt[0]), cr:tabElt[1]}
        arr.push(obj);
    })
    arr.sort((a,b)=>{
        if(a.id === b.id){
            return b.larg - a.larg;
        }
        return a.id - b.id;
    })
    return arr;
}