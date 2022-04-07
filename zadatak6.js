var rand = require('./slucajanBroj');

var polje=[];

for(var i = 0; i<100; i++)
{
    polje.push(rand.dajSlucajanBroj(50,5000));
}

var par=0;
polje.forEach(function(br)
{
    if(br%2==0)
    {
        par++;
    }
});

console.log(par);
console.log(100-par);