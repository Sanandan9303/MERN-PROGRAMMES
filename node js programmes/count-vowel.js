const readline=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var n,i,cnt=0;
readline.question(' enter a string ',num=>{
    n=num;
    readline.close();
    for(i=0;i<n.length;i++)
    {
        if(n[i]=='a'||n[i]=='u'||n[i]=='o'||n[i]=='i'||n[i]=='e')
        {
            cnt++;
        }
    }
    console.log(cnt);
})