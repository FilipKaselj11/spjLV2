var rand = require('./slucajanBroj');

var polje=[];

for(var i = 0; i<200; i++)
{
    polje.push(rand.dajSlucajanBroj(150,1500));
}

var max = 0;
var min= 1501;

polje.forEach(function(br)
{
    if(br>max)
    {
        max=br;
    }
    if(br<min)
    {
        min=br;
    }
});

console.log(max);
console.log(min);