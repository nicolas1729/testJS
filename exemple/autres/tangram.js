tangram([5,"A 5 5","B 10 5","C 5 3","C 5 2"]);


function tangram(input){
    const [a, ...data] = input;

    let tab = initTab(data);

    let grid= initGrid(10);
    printGrid(grid);

    let res = [];
    tab.forEach((elt,i)=>{
        
        let [x,y] = posInit(grid, elt.long, elt.larg);
        fillPos(grid, x, y, parseInt(elt.long), parseInt(elt.larg));
        printGrid(grid);
        res.push(elt.id+" "+y+" "+x);
    })
    
    console.error(tab);
    console.log(res.join("#"));
}

function initTab(data){
    let arr = [];
    data.forEach(elt=>{
        const tabElt = elt.split(" ");
        const obj = {id:tabElt[0], long:parseInt(tabElt[1]), larg:parseInt(tabElt[2])}
        arr.push(obj);
    })
    arr.sort((a,b)=>{
        if(a.long === b.long){
            return b.larg - a.larg;
        }
        return b.long - a.long;
    })
    return arr;
}

function initGrid(x,y=x){
    let pos = [];
    for(let i=0;i<y;i++) {
        pos.push(new Array(x).fill(0));
    }
    return pos;
}

function posInit(grid, long, larg){
    let x = 0;
    let y = 0;
    let flag=true;
    while (flag && y < 10) {
        while (x<10 && grid[y][x] === '1') {
            x++;
        }
        if (x<10 && 10-x >= larg && 10-y >= long) {
            flag=false;
        } else {
            x = 0;
            y++;
        }
    }
    return [x,y];
}

function fillPos(posit, x, y, long, larg){
    console.error("fill y="+y+" x="+x+" larg="+larg+" long="+long);
    for(let i = y; i<(y+long); i++){
        for(let j = x; j<(x+larg); j++){
            posit[i][j]='1';
        }
    }
    return posit;
}

function printGrid(pos){
    console.log("-----------");
    pos.forEach((ar,i)=>{
        console.error(i+":"+ar.join(" "));
    })
}