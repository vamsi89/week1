function multiplesOf3Or5() {
    var n = document.getElementById("id1").value;
    if(!validateFunction(n))
    {
        alert("Enter input below 1000");
        window.location.assign("multiples.html");
    }
    else
        document.getElementById("id2").innerHTML = logic(n);
}
function validateFunction(n){
    return n>1000 ? false : true;
}
function logic(n) {
    var sum = 0;
    var i;
    for(i = 1;i < n; i++)
    {
        if(i%3 == 0 || i%5 == 0)
            sum +=i;
    }
    return sum;
}