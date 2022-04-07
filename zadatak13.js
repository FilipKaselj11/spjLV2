var rand = require('./slucajanBroj');

var aPolje=[];

for(var i = 0; i<30; i++)
{
    aPolje.push(rand.dajSlucajanBroj(10,200));
}

var done = false;
while(!done)
{
    done = true;
    for(var i=1; i < aPolje.length; i++)
    {
        var pom;
        if(aPolje[i-1]> aPolje[i])
        {
            done= false;
            pom= aPolje[i-1];
            aPolje[i-1]=aPolje[i];
            aPolje[i]=pom;
        }
        
    }
}

aPolje.forEach(function(br)
{  
    console.log(br);
});