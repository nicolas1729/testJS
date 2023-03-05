/**
 * permut(["a","b","c"],[])
 *  retourne =>
 * ["a", "b", "c"]
 * ["a", "c", "b"]
 * ["b", "a", "c"]
 * ["b", "c", "a"]
 * ["c", "a", "b"]
 */
function permut(data,reste){
    data.length || console.log(reste);
    for(let i=0;i<data.length;i++){
        let arr = data.slice();
        let toAdd = arr.splice(i,1)[0];
        permut(arr,[...reste,toAdd]);
    }
}