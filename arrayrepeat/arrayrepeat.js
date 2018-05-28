function repeatNum() {
    var arr = document.getElementById("id1").value.split(" ").map(function(item){
        return parseInt(item,10);
    });
   for(i=0;i<arr.length-1;i++)
    {
        for(j=i+1;j<arr.length;j++)
            {
                if(arr[i]==arr[j])
                {
                    document.write(arr[i]+"<br>");
                    break;
                }
            }
    } 

}