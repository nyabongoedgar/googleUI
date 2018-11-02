
    function validate(){
        var x = document.getElementById("searchInput").value;
        if (x !=''){
            document.getElementById('error_message').innerHTML =" ";
            return window.alert(x);
        }
        else if(x.trim()==''){
            y= document.getElementById('error_message').innerHTML ="Please type something !";
            return y;
        }  
        
    }
    

