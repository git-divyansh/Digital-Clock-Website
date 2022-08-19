function hours(b,c)
{
    if((b+c)>=24)
    {
        return 24-(c+b);
    }
    else if((b+c)<0)
    {
        return 24+(b+c);
    }
    else
    {
        return (b+c);
    }
}

function mins(d,e)
{
    if((d+e)>=60)
    {
        return 60-(d+e);
    }
    else if((d+e)<0)
    {
        return 60+(d+e);
    }
    else
    {
        return (d+e);
    }
}

click0.addEventListener('click',function(){
    clearInterval(clr)
    clr=setInterval(()=>{
        a=new Date();
        date=a.toLocaleDateString(undefined,options)
        time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
        document.getElementById('time').innerHTML=time + " <br> on " + date;
        document.getElementById('btn23').innerHTML="New Delhi  ";
        },1000)
})      


click1.addEventListener('click',function(){
clearInterval(clr);
clr=setInterval(()=>{
a=new Date();
date=a.toLocaleDateString(undefined,options)
time = hours(a.getHours(),-11) + ':' + mins(a.getMinutes(),-30) + ':' + a.getSeconds();

    document.getElementById('time').innerHTML=time + " <br> on " + date ;
    document.getElementById('btn23').innerHTML="Calagary  ";

},1000)})


click2.addEventListener('click',function(){
    clearInterval(clr);
    clr=setInterval(()=>{
    a=new Date();
    date=a.toLocaleDateString(undefined,options)
    time = hours(a.getHours(),-10) + ':' + mins(a.getMinutes(),-30) + ':' + a.getSeconds();
    
        document.getElementById('time').innerHTML=time + " <br> on " + date;
        document.getElementById('btn23').innerHTML="Dallas ";
    
    },1000)})