const readline=require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
});
//readline is a library that provides input and output function in node js.

var a,b,c;
readline.question('Enter the value of a ',num=>{
    a=parseInt(num);
    readline.question('Enter the value of a ',num=>{
        b=parseInt(num);
        readline.close();
        c=a+b;
        console.log("sumn of a and b = "+c);
});
});