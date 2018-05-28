function factorial() {
    var num = Number(document.getElementById("id1").value);
    document.getElementById("id2").innerHTML = getNumber(num);
}
function getNumber(num) {
    if(num == 0)
    return 1;
    return num*getNumber(num-1);
}