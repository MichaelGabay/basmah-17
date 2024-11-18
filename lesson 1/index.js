const factorial=(n=5)=>{
    let res=1;
    for(let i=2;i<=n;i++){
        res*=i
    }
    return res
}

console.log(factorial(5))
