    let input =  [
        '36', 'S 37', 'R 47', 'S 40',
        'R 47', 'S 40', 'R 47', 'S 40',
        'R 47', 'S 37', 'R 47', 'S 43',
        'R 47', 'S 41', 'R 47', 'S 41',
        'R 47', 'S 40', 'R 47', 'S 42',
        'R 47', 'S 37', 'R 47', 'S 37',
        'R 47', 'S 42', 'R 47', 'S 41',
        'R 47', 'S 38', 'R 47', 'S 43',
        'R 47', 'S 37', 'R 47', 'S 38',
        'R 47'
    ];
    
    fractionne(input);

    function fractionne(input){
        const [a, ...data] = input;
        let tab = initTabFractionne(data);
        console.log(840-tab);
    }

    function initTabFractionne(data){
        let arr = [];
        data.forEach(elt=>{
            const tabElt = elt.split(" ");
            const obj = {id:tabElt[0], t:parseInt(tabElt[1])}
            arr.push(obj);
        })
        arr.sort((a,b)=>{
            if(a.id === b.id){
                return b.t - a.t;
            }
            return b.id - a.id;
        })
        return arr.filter(el=>el.id==='S').reduce((a,c)=>{return a + c.t},0);
    }