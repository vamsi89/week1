function palindrome() {
    var x = document.getElementById("id1").value;
    if(x == x.split("").reverse().join(""))
        document.getElementById("id2").innerHTML = "palindrome number";
    else
        document.getElementById("id2").innerHTML = "not a palindrome number";
}