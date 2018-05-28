function sumofnum() {
    var n = Number(document.getElementById("id1").value);
    if (n > 500){
        alert("input should not exceed 500");
        //window.location.assign("sumofnums.html");
    }
    else
        {
            n = (n*(n+1))/2;
            document.getElementById("id2").innerHTML = n;
            
        }
}

