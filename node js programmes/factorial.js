const readline=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var n,fact=1;
readline.question('enter the value of n ',num=>{
    n=parseInt(num);
    readline.close();
    while(n>0)
    {
        fact=fact*n;
        n--;
    }
    console.log('factorial = '+fact);
});