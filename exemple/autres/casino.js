let input = ['10', '25', '-17',
'-16', '-19', '12',
'13', '27', '-29',
'18', '9'
                ];

            main(input);


            function main(input){
                console.error(input);
                const [init, ...data] = input;
                
                
                let res = fillRes(data.map((elt)=>parseInt(elt)));

                //console.error(res);

                let sum = sumFn(res);
                //console.error(sum);
                let r = getMin(sum);
                console.error(r);
                r=r<0?r:0;
                console.log(r);
            }

            function getMin(arr) {
                return arr.reduce((max, v) => max <= v ? max : v, 0);
            }

            function sumFn(grid){
                let listSum = [];
                const len = grid.length;
                for(i=0;i<len;i++){
                    for(idx=0;idx<len;idx++){
                        let s = grid.slice(idx).reduce((a,c)=>{return a + c},0);
                        //console.error(grid.slice(idx) +" => "+s);
                        listSum.push(s);
                    }
                    grid.pop();
                }

                return listSum;
            }

            function fillRes(grid){
                let plus = 0;
                let moins = 0;
                let grid2 = [];
                grid.forEach((elt,idx)=>{
                    if(elt>0){
                        plus += elt;
                        if(moins<0)grid2.push(moins);
                        moins = 0;
                    }
                    if(elt<0){
                        moins += elt;
                        if(plus>0)grid2.push(plus);
                        plus = 0;
                    }
                })
                if(plus>0)grid2.push(plus);
                if(moins<0)grid2.push(moins);
                return grid2;
            }

            function initTab(data){
                let grid = [];
                data = data.map((elt)=>parseInt(elt));

                
                //return arr.filter(el=>el.id==='S').reduce((a,c)=>{return a + c.t},0);
                return data;
            }