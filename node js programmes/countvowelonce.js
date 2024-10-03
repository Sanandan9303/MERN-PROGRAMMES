const readline=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
var n,j,cnt,a=0,e=0,i=0,o=0,u=0;
readline.question('enter a string :',num=>{
n=num;
readline.close();
for(j=0;j<n.length;j++)
{
    if(n[j]=='a')
    {
        a=1;
    }
    if(n[j]=='e')
        {
            e=1;
        }
        if(n[j]=='i')
            {
                i=1;
            }
            if(n[j]=='o')
                {
                    o=1;
                }
                if(n[j]=='u')
                    {
                        u=1;
                    }
}
cnt=a+e+i+o+u;
console.log(cnt);
});