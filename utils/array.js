function initGrid(x,y=x){
    let pos = [];
    for(let i=0;i<y;i++) {
        pos.push(new Array(x).fill(0));
    }
    return pos;
}


function sortDesc(grid){
    grid.sort((a,b)=>{
        if(a.val === b.val){
            return b.id - a.id;
        }
        return b.val - a.val;
    });
}


function sortAsc(grid){
    grid.sort((a,b)=>{
        if(a.val === b.val){
            return a.id - b.id;
        }
        return a.val - b.val;
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