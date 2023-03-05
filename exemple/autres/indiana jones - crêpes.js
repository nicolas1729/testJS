let input = 
            [ '5', '4 0 3 1 2' ] ;

            main(input);


            function main(input){
                console.error(input);
                const [init, data] = input;
                
                //let grid = initTab(data);
                let grid = data.split(" ").map(e=>parseInt(e));

                let len = grid.length;

                while(len>1){
debugger;
                    console.log(grid);
                    let max = Math.max(...grid);
                    let index = grid.indexOf(max);
                    if(index>0){
                        grid = swap(grid,index+1);
                        console.log(grid);
                    }
                    grid = swap(grid,len);
                    console.error(grid);
                    grid.pop();
                    len--;
                }

                //let res = fillRes(data);
                
                //res = res.filter(el=>el==42);
                //console.log(res.length);
            }

            function swap(grid, index){
                let a = [];
                let b = [];
                grid.forEach((elt,i)=>{
                    if(i<index){
                        a.push(elt);
                    }else{
                        b.push(elt);
                    }
                });
                a.reverse();
                return [...a,...b];
            }

            function fillRes(grid){
                
                /*let OK = false;
                for (j=1;j<6;j++){
                    let r = cal.filter(el=>el.id===j).map(e => e.cr);
                    if(!OK) OK=calendar(r,OK);
                }*/
                let resp = [];
                grid.forEach((elt,idx)=>{
                    let temp = elt;
                    let somme = 0;
                    while(temp>100){
                        somme = 0;
                        [...temp].forEach((elt2,idx2)=>{
                            console.error(`chiffre[${idx2}] = ${elt2}`);
                            somme += parseInt(elt2);
                        })
                        temp = somme.toString();
                        console.log("somme="+somme);
                    }
                    resp.push(somme);
                    //max = resp.length > max ? resp.length : max;
                })

                return resp;
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
                //return grid.filter(el=>el.id==='S').reduce((a,c)=>{return a + c.t},0);
                return grid;
            }