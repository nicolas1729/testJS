function fleche(){
    let grid= initGrid(10);
    printGrid(grid);
    fillGrid(grid);
    printGrid(grid);
}

function fillGrid(grid){
    let x = 0;
    let y = 0;
    for(let pY=0;pY<10;pY++){
        for(let pX=0;pX<10;pX++){
            if(pX > 4-pY && pX < 5+pY){
                grid[pY][pX] = '1';
            }
        }
    }
}

function initGrid(x,y=x){
    let pos = [];
    for(let i=0;i<y;i++) {
        pos.push(new Array(x).fill(0));
    }
    return pos;
}

function printGrid(pos){
    console.log("-----------");
    pos.forEach((ar,i)=>{
        console.error(i+":"+ar.join(" "));
    })
}