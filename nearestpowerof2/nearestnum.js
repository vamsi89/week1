function closestPower() {
    var x = document.getElementById("id1").value;
    var i=0;
    var num;
    while(Math.pow(2,i)<=x){
        num = i;
        i++;
    }
    document.getElementById("id2").innerHTML = num;
}