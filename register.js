function signup(){

    document.getElementById("signup").style.display="block";
    document.getElementById("container-login").style.display="none";
    document.getElementById("menu").style.display="none";
    //to not create different margin and back to default
    document.getElementById("signup").style.marginTop="-577px";
    document.getElementById("container-login").style.marginTop="-502px";
    
    
    }
    
    function login(){
    
        document.getElementById("signup").style.display="none";
        document.getElementById("container-login").style.display="block";
        document.getElementById("menu").style.display="none";
        document.getElementById("signup").style.marginTop="-577px";
        document.getElementById("container-login").style.marginTop="-502px";
    
    
    
    }
    
    function menu(){
        document.getElementById("menu").style.marginLeft = "250px"
        document.getElementById("menu").style.marginLeft = "0px";
        document.getElementById("menu").style.display="block";
        document.getElementById("signup").style.marginTop="-577px";
        document.getElementById("container-login").style.marginTop="-502px";
    
        //to show the home-back
    
        document.getElementById("home-back").style.display="block";
    
        //to hide the menu 
    
        document.getElementById("home").style.display="none";
       
    //    document.getElementById("menu").style.display="block";
    //    document.getElementById("signup").style.marginTop="-575px";
     //   document.getElementById("container-login").style.marginTop="-503px";
    }
    
    
    function menuBack(){
    
        
        document.getElementById("menu").style.marginLeft= "-250px";
    
        //to show the menu again if click again
        document.getElementById("home").style.display="block";
        document.getElementById("home-back").style.display="none";
        //to not create different margin and back to default
        document.getElementById("signup").style.marginTop="-577px";
        document.getElementById("container-login").style.marginTop="-502px";
    
    
    }