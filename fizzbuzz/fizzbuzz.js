function replaceNum() {
    var n = document.getElementById("id1").value;
    var str  = ""; 
    for(i=1;i<=n;i++)
    {
        if(i%3==0 && i%5==0)
            str += "FizzBuzz,";
        else if(i%3==0)
            str += "Fizz,";
        else if(i%5==0)
            str += "Buzz,";
        else
            str += i+",";
    }
    document.getElementById("id2").innerHTML=str.substring(0,str.length-1);
}