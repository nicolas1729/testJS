
let input = [ '1', '00:00-02:53' ];

main(input);

function main(input){
    console.error(input);
    const [init, ...data] = input;
    
    let grid = initTab(data);
    let result1 = etape1(grid);
    etape2(result1);
}

function initTab(data){
    let grid = new Array(24*60).fill(1);
    data.forEach((elt,idx)=>{
        const tabElt = elt.split("-");
        let debHM = tabElt[0].split(":");
        let minutesDeb = parseInt(debHM[0])*60 + parseInt(debHM[1]);
        let finHM = tabElt[1].split(":");
        let minutesFin = parseInt(finHM[0])*60 + parseInt(finHM[1]);

        if(minutesDeb<=minutesFin){
            for(i=minutesDeb;i<=minutesFin;i++){
                grid[i-1] = 0;
            }
        }else{
            for(i=1;i<=minutesFin;i++){
                grid[i-1] = 0;
            }
            for(i=minutesDeb;i<=1440;i++){
                grid[i-1] = 0;
            }
        }
    });
    grid.push(0);
    return grid;
}


function etape1(grid){
    let creneau = [];
    let last = 0;
    let deb = 0;
    let fin = 0;

    grid.forEach((elt,idx) => {
        if(elt!=last){
            last = elt;
            if(elt){
                deb = idx+1;
            } else {
                fin = idx;
                creneau.push({duree:fin-deb,deb:deb,fin:fin});
            }
        }
    });
    creneau.map(elt=>{
        if(elt.fin==1440) elt.fin=1439
    })
    return creneau;
}

function etape2(creneau){

    let debMinuit = creneau.filter(elt=>elt.deb==1);
    debMinuit.sort((a,b)=>{
        return b.duree - a.duree;});

    let finMinuit = creneau.filter(elt=>elt.fin==1439);
    finMinuit.sort((a,b)=>{
        return b.duree - a.duree;});

    if(debMinuit.length>0 && finMinuit.length>0){
        creneau.push({duree:(debMinuit[0].duree+finMinuit[0].duree),deb:finMinuit[0].deb,fin:debMinuit[0].fin})
    }

    creneau.sort((a,b)=>{
        return b.duree - a.duree;});

    if(creneau.length>0){
        let r = minutesToHeure(creneau[0].deb)+"-"+minutesToHeure(creneau[0].fin);
        console.log(r);
    }else{console.log("IMPOSSIBLE")}
}

function minutesToHeure(minutes){
    heures = Math.floor(minutes/60);
    mins = minutes%60;
    return heures.toString().padStart(2,0)+":"+mins.toString().padStart(2,0);
}






