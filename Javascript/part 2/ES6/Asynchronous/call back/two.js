let sum=(a,b)=>{
   return a+b 
}
let multi=(a,b)=>{
    return a*b
}
let Calc=(a,b,callback)=>{
    return callback(a,b)
}
let c1=Calc(10,20,sum)
console.log(c1)
let c2=Calc(10,20,multi)
console.log(c2)