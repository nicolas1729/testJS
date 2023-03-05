let input = [
    'modifie.cpp',
    '3',
    'modifie.o 2',
    'modifie.cpp header.hpp',
    'autre.o 3',
    'autre.cpp autre.hpp header.hpp',
    'binaire 2',
    'autre.o modifie.o'
];

main(input);

function main(input){
    console.error(input);
    const [search,a, ...data] = input;

    let tab = initTab(data);

    let result = [];
    
    
    result= extract(search, tab);
    console.error(result);
    console.log(result.length);
    result.forEach(e=>
        (console.log(e))
    )
    
}

function extract(search, tab){
    let liste = [];
    let flag = true;
    while (flag){
        let r = tab.get(search);
        if(r === undefined){
            flag = false;
        }else{
            search = r;
            liste.push(r);
        }

    }
    return liste;
}


function initTab(data){
    let arr = new Map();
    let parent="";
    data.forEach((elt,i)=>{
        let tabElt = elt.split(" ");
        if(i%2===0){
            parent = tabElt[0];
        }else{
            tabElt.forEach(it=>{
                arr.set(it,parent);
            })
        }
    })
    return arr;
}