function equalNum() {
    var num = document.getElementById("num").value; 
   var arr = document.getElementById("array").value.split(" ").map(function(item){
        return parseInt(item,10);
    });
    //document.write("Hello");
    var str = "";
    for(i = 0;i<arr.length-1;i++)
        {
            for(j = i+1;j<arr.length;j++)
                {
                    if((arr[i]+arr[j])==num)
                    {
                        document.write('"'+arr[i]+" ,"+arr[j]+'"<br>');                      
                    }
                }
        }
}