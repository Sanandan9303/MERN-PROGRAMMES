const readline=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var i,j,n,cnt;
readline.question('enter the number till you want to print prime numbers ',num=>{
    n=parseInt(num);
    readline.close();
    for(i=1;i<=n;i++)
    {
        cnt=0;
        for(j=1;j<=i;j++)
        {
            if(i%j==0)
            {
                cnt++;
            }
        }
        if(cnt==2)
        {
            console.log(i);
        }
    }
})