function main(input){
    console.error(input);
    const [init, ch1,ch2] = input;
    let res1 = etape1(ch1,ch2);
    console.log(res1);
}

function diff(ch1,ch2){
    let r = 0;
    [...ch1].forEach((elt,idx)=>{
        if(elt == ch2[idx]){
            r++;
        }
    })
    return r;
}

function decalerStr(str){
    return str.slice(1)+str[0];
}

function incrementer(str){
    let a = "";
    [...str].forEach((elt)=>{
        let charCode = elt.charCodeAt(0)+1;
        let newChar = String.fromCharCode(charCode);
        if(newChar==="{"){
            newChar = "a";
        }
        a+=newChar;
    })
    console.error(`a=${a}`);
    return a;
}


function etape1(ch1,ch2){
    let max = 0;
    let resp;
    for (i=0;i<ch1.length;i++){
        ch1 = decalerStr(ch1);
        for (j=1;j<=26;j++){
            
            ch1 = incrementer(ch1);    
            let max1 = diff(ch1,ch2);
            if(max1>max){
                max=max1;
                resp = ch1
            }
            console.error(ch1 + " "+ diff(ch1,ch2));
        }
    }

    return resp;
}
