function initGrid(x,y=x){
    let pos = [];
    for(let i=0;i<y;i++) {
        pos.push(new Array(x).fill(0));
    }
    return pos;
}

function initArray(){
    new Array(13).fill(0).map((a,i)=>i)
}


function sortDesc(grid){
    return grid.sort((a,b)=>{
        if(a.val === b.val){
            return b.id - a.id;
        }
        return b.val - a.val;
    });
}


function sortAsc(grid){
    return grid.sort((a,b)=>{
        return a - b;
    });
}

function sortString(grid){
    return grid.sort((a,b)=>{
        return a.charCodeAt(0) - b.charCodeAt(0);
    });
}

function min(items) {
    return items.reduce(
    (accumulator, currentValue) => {
            return (currentValue < accumulator ? currentValue : accumulator);
    }
);
}

function max(items) {
    return items.reduce(
        (acc, current) => {
                return (current > acc ? current : acc);
        }
    );
}