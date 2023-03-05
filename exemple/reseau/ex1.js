let input = [ '4 4 2', '1 2', '2 7', '4 7'];
ContestResponse();

function ContestResponse(){
    console.error(input);
    main(input);
}

function main(input){
    const [init, ...data] = input;
    const [a,b,origin] = init.split(" ");
    let grid = initTab(data);

    let res1 = etape1(grid, parseInt(origin));
    let res2 = etape2(res1);

    console.log(res2.join(" "));
}

function initTab(data){
    let grid = {};
    data.forEach((elt)=>{
        const tabElt = elt.split(" ");
        let p1=parseInt(tabElt[0]);
        let p2=parseInt(tabElt[1]);
        if(!grid[p1])grid[p1] = [];
        grid[p1].push(p2);
        if(!grid[p2])grid[p2] = [];
        grid[p2].push(p1);
    })
    console.error(grid);
    return grid;
}

function etape1(grid, origin){
    let connexion = {};
    let seen = [origin];
    let enCours = [origin];
    let dist = 1;
    while(enCours.length>0){ //enCours=[2] / [1,7] / [4]
        enCours.forEach(element => { 
            enCours = enCours.filter(item=>element!=item);
            for(let poste of grid[element]){ //[1,7]
                if(!seen.includes(poste)){
                    connexion[poste] = dist; //connexion[1] = 1  /  connexion[7] = 1
                    enCours.push(poste);     //enCours=[1,7]
                    seen.push(poste);        //seen = [2,1,7]
                }
            }
        });
        dist++;
    }
    return connexion;
}

function etape2(grid){
    console.error(grid);
    let max = 0;
    let result = [];
    for(let poste in grid){ //[1,7]
        let max1 = grid[poste];
        if(max1===max){
            result.push(poste);
        }
        if(max1>max){
            max = max1
            result = [poste];
        }
    }
    return result;
}
