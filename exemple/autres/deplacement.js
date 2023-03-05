let input = [
    '5', 'o.o*.', '*.o.*', 'o.oo.', '*o..o', '.o.**' 
    ];

main(input);


function main(input){
    console.error(input);
    const [init, ...data] = input;
    
    let grid = initTab(data);
    console.log(grid);

    let res = fillRes(data);
    console.log(res.join(""));
}



function fillRes(grid){
    let pos = {x:0,y:0};
    /*let OK = false;
    for (j=1;j<6;j++){
        let r = cal.filter(el=>el.id===j).map(e => e.cr);
        if(!OK) OK=calendar(r,OK);
    }*/
    let max = 0;
    let res = [];
    grid.forEach((elt,idx)=>{
        pos.y=idx;
        depl = [];
        if(pos.x==0){
            depl = deplacerDroite(elt,"o").join("");
            pos.x=1;
        } else {
            depl = deplacerGauche(elt,"o").join("");
            pos.x=0;
        }
        res.push(depl);
        if(idx<grid.length-1){
            res.push("v");
        }
    })
    grid.reverse().forEach((elt,idx)=>{
        pos.y=idx;
        depl = [];
        if(pos.x==0){
            depl = deplacerDroite(elt,"*").join("");
            pos.x=1;
        } else {
            depl = deplacerGauche(elt,"*").join("");
            pos.x=0;
        }
        res.push(depl);
        if(idx<grid.length-1){
            res.push("^");
        }
    })

    return res;
}

function deplacerDroite(elt,piece){
    let dep = [];

    [...elt].forEach((e,idx)=>{
        if(e===piece)dep.push("x");
        if(idx<elt.length-1)dep.push(">");
    });
    return dep;
}


function deplacerGauche(elt,piece){
    let dep = [];
    [...elt].reverse().forEach((e,idx)=>{
        if(e===piece)dep.push("x");
        if(idx<elt.length-1)dep.push("<");
    });
    return dep;
}

function initTab(data){
    let grid = [];
    data.forEach((elt,idx)=>{
        const tabElt = elt.split(" ");
        const obj = {id:tabElt[0], val:parseInt(tabElt[1])}
        
        grid.push(tabElt);
    })
    grid.sort((a,b)=>{
        if(a.val === b.val){
            return b.id - a.id;
        }
        return b.val - a.val;
    })
    //return arr.filter(el=>el.id==='S').reduce((a,c)=>{return a + c.t},0);
    return grid;
}