function objectCode() {
    var x = document.getElementById("id1").value;
    var y = JSON.parse(x);
    var sum = 0;
    for(i in y)
        sum+=y[i]; 
    document.getElementById("id2").innerHTML = sum;
}