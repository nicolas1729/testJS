let input = [
    '10 200',
    '98 26',
    '22 21 16 21 25 22 23 22 25 20',
    '161 13 66 95 10 120 113 88 33 39 152 1 198 137 119 80 76 180 50 45 168 179',
    '122 86 127 185 38 84 174 139 95 49 123 155 63 36 40 177 165 126 7 100 161',
    '107 42 4 44 170 60 128 43 91 46 172 183 131 99 178 94',
    '37 109 194 14 188 173 104 79 192 193 24 52 177 93 38 47 26 111 70 133 176',
    '109 129 12 78 3 114 20 89 27 196 41 145 56 35 34 17 125 2 195 16 57 19 102 135 175',
    '157 143 90 138 97 118 132 150 117 163 32 101 58 28 82 69 67 160 72 77 144 64',
    '53 197 5 30 71 156 74 15 189 92 168 143 182 124 103 200 6 22 31 26 80 146 121',
    '136 172 110 73 96 18 62 106 64 151 184 54 164 162 11 112 59 167 55 186 147 149',
    '154 87 177 130 108 153 85 75 67 80 21 181 83 116 171 142 166 48 70 65 140 169 81 68 8',
    '159 141 53 148 70 29 115 191 105 199 9 98 190 134 23 51 25 61 187 158'
    ];

main(input);


function main(input){
    //console.error(input);
    const [stations, departArrive, toto, ...data] = input;

    //let [nbLigne, nbStation] = stations.split(" ").map(e=>parseInt(e));
    let [depart, arrive] = departArrive.split(" ").map(e=>parseInt(e));
    
    let cal = initTab(data);

    console.error("depart= "+depart);
    console.error("arrive= "+arrive);
    console.error(cal);
    
    const min = findMin(depart,arrive,cal);

    //let res = fillRes(cal);

    console.log(min);
}

function findMin(depart,arrive,grid){

    const ligneDeb = findLigne(depart,grid)[0];
    const ligneFin = findLigne(arrive,grid)[0];

    console.error("ligneDeb= "+ligneDeb);
    console.error("ligneFin= "+ligneFin);

    let min = Infinity;

    let loop = 0;
    let noLigneGrille = ligneDeb;
    let lignesInter = grid[noLigneGrille];
    let lignePasse = [noLigneGrille];
    console.error("lignesFirst= "+lignesInter);
    if(lignesInter.includes(ligneFin)){
        min = 0;
    }else{
        loop++;
        lignesInter.forEach((el,idx)=>{
            lignesInter = findLigne(el,grid).filter(e=>!lignePasse.includes(e));
            lignesInter.length>0 && console.error("elt["+el+"] dans les lignes "+lignesInter);
            if(lignesInter.includes(ligneFin)){
                min = min>lignePasse.length?lignePasse.length:min;
                console.error("nveau min="+min);
            }else{
                loop++;
                lignesInter.forEach((ligne,idx)=>{
                    grid[ligne].forEach((el2,idx)=>{
                        let lignePasse2 = [...lignePasse, ligne];
                        let lignesInter2 = findLigne(el2,grid).filter(e=>!lignePasse2.includes(e));
                        lignesInter2.length>0 && console.error("-- lignesInter2["+lignePasse2+"]= "+lignesInter2);

                        recur(lignesInter2, lignePasse2, ligneFin, loop, min, grid);

                    });
                });
            }
        });
    }

    console.error("min= "+min);
    if(min == Infinity){min = -1;}
    return min;
}


function recur(lignesInter, lignePasse, arrive, loop, min, grid){
    if(lignesInter.includes(arrive)){
        min = min>lignePasse.length?lignePasse.length:min;
    }else{
        loop++;
        lignesInter.forEach((ligne3,idx)=>{
            grid[ligne3].forEach((el3,idx)=>{
                let lignePasse3 = [...lignePasse, ligne3];
                let lignesInter3 = findLigne(el3,grid).filter(e=>!lignePasse3.includes(e));
                lignesInter3.length>0 && console.error("-- -- lignesInter3["+lignePasse3+"]= "+lignesInter3);
                recur(lignesInter3, lignePasse3, arrive, loop, min, grid);
            });
        });
    }

}


function findLigne(station,ar){
    let r = [];
    ar.forEach((el,idx)=>{
        if(el.includes(station)){
            r.push(idx);
        }
    });
    return r;
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
        const tabElt = elt.split(" ").map(el=>parseInt(el));
        //const obj = {deb:parseInt(tabElt[0]), fin:parseInt(tabElt[1])}
        tabElt.sort((a,b)=>{return a - b;})
        
        arr.push(tabElt);
    })
    arr.sort((a,b)=>{
        return a - b;
    })
    return arr;
}