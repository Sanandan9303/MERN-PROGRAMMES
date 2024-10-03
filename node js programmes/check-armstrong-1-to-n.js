const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var i=1,n,t=1,j=1,sum,inum,cnt,r;
readline.question('Enter the number of terms :',num=>{
    n=parseInt(num);
    readline.close();
    while(i<=n)//current position is less than  number of terms 
    {
        inum=i;// intialize loop number to temperory number
        cnt=0;// reset cnt everytime
        while(inum>0)// i>0
        {
            cnt++;
            inum=parseInt(inum/10);// 153/10 till its greater than 0
        }
        sum=0;
        inum=i;// initial temperory variable with loop number again
        while(inum>0)// seperating the digits
        {
            r=inum%10;//  153%10=3;
            t=1;
            j=1;
            while(j<=cnt)// multiplying every digits according to the count of the whole number digit;
            {
                t=t*r;
                j++;
            }
            sum=sum+t;// adding the every digit number exponentials
            inum=parseInt(inum/10);// condition for breaking the loop;
        }
        if(i==sum)// checking the loop number is equal to the sum and multiplication of numbers or not;
        {
            console.log(i);
        }
        i++;
    }
});