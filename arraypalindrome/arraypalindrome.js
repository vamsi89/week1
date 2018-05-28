function palindromeArray() {
    var x = document.getElementById("demo").value.split(",");
    var arr = new Array();
    for(i=0;i<x.length;i++)
        {
            if(isPalindrome(x[i]))
            {
                arr.push(x[i]);
            }
        }
    document.getElementById("demo2").innerHTML = arr;
}
function isPalindrome(x) {
    if(x == x.split("").reverse().join(""))
        return true;
    else
        return false;
}