let Calc=(a,b,op)=>{
    if(op==="Sum"){
        return a+b
    }
    if(op==="Multi"){
        return a*b
    }

}
 let c1=Calc(10,20,"Sum")
console.log(c1)
let c2=Calc(10,20,"Multi")
console.log(c2)