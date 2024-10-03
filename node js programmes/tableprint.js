const { log } = require('console');

const readline=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var i,n,result;
readline.question('enter the number to print the table ',num=>{
    n=parseInt(num);
    readline.close();
    for(i=1;i<=10;i++)
    {
        result=n*i;
        console.log(result);
    }
})