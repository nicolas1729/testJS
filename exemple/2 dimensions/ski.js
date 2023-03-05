let input = [ '5 5', '...X.', '.X..X', 'XXX.X', '..XX.', 'XX...' ]

main(input);


function main(input){
    console.error(input);
    const [xy, ...data] = input;
    
    //let grid = initTab(data);

    let res = fillRes(data,xy);

    console.log(res);
}



function fillRes(grid,xy){
    let [maxY,maxX] = xy.split(" ").map(e=>parseInt(e));

    let respGrid = initGrid(maxX, maxY);

    console.error(`${grid.length} - maxX=${maxX} - maxY=${maxY}`);
    
    grid.forEach((ligne,y)=>{
        console.error(`ligne[${y}] = ${ligne}`);
        [...ligne].forEach((pos,x)=>{
            if(grid[y][x]=="X"){
                respGrid[y][x]="X";
            }else{
                if(y==0){
                    respGrid[y][x]=0;
                }else{
                    let posN1=respGrid[y-1][x];
                    if(posN1!="X" && posN1!="Y"){
                        respGrid[y][x] = posN1 +1;
                    }
                }
            }
        });
        for(j=0;j<maxX;j++){
            [...ligne].forEach((pos,x)=>{
                if(respGrid[y][x]=="Y"){
                    let min = Infinity;
                    if(x>0 && !["X","Y"].includes(respGrid[y][x-1])){
                        min = respGrid[y][x-1];
                    }
                    if(x<maxX-1 && !["X","Y"].includes(respGrid[y][x+1])){
                        if(min > respGrid[y][x+1]){
                            min = respGrid[y][x+1]
                        }
                    }
                    if(min < Infinity)respGrid[y][x]=min+1;
                }
            });
            printGrid(respGrid);
        }
    });
        
    let result = grid[maxY-1];
    return ;
}

function initGrid(x,y=x){
    let pos = [];
    for(let i=0;i<y;i++) {
        pos.push(new Array(x).fill("Y"));
    }
    return pos;
}

function printGrid(pos){
    pos.forEach((ar,i)=>{
        console.error(i+":"+ar.join(" "));
    })
    console.log("-----------");
}