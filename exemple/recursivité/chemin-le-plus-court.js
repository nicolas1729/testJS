let input= [
    '5 7 5', '0 8 0',
    '5 1 8', '2 4 4',
    '3 0 8', '1 8 6',
    '5 6 3', '7 1 2'
    ]
    ContestResponse();
    
    function ContestResponse(){
        console.error("input:",input);
        main(input);
    }
    
    var maison = ""
    function main(input){
        let gridInit = initTab(input);
        let [home,...grid] = gridInit
        maison = home
        let res1 = etape1(grid);
    }
    
    function initTab(data){
        let grid = [];
        data.forEach((elt,idx)=>{
            const tabElt = elt.split(" ");
            const obj = {pos:idx, x:parseInt(tabElt[0]), y:parseInt(tabElt[1]), z:parseInt(tabElt[2])}
            grid.push(obj);
        })
        return grid;
    }
    
    function distAll(a = []){
        let sum = 0
        a = [maison, ...a, maison]
        for (i=1;i<a.length;i++){
            sum += dist(a[i-1],a[i])
        }
        return sum;
    }
    
    function dist(a,b){
        return (Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z))
    }
    
    function etape1(grid){
        var a = []
        let z = [];
        
        permut(grid,[],z);
        console.error(`data`,z[0]);
        let min = getMin(z);
        return "0 "+z.filter(a=>a.d==min)[0].reste.map(m=>m.pos).join(" ")
    }
    
    function getMin(arr) {
        return arr.reduce((min, v) => min <= v.d ? min : v.d);
    }
    
    function permut(data,reste,z){
        data.length || z.push({reste,d:distAll(reste)});
        for(let i=0;i<data.length;i++){
            let arr = data.slice();
            let toAdd = arr.splice(i,1)[0];
            permut(arr,[...reste,toAdd],z);
        }
    }