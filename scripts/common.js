var cancel1 = document.getElementsByClassName("close")[0];
var cancel2 = document.getElementsByClassName("close")[1];

/*JavaScript function for Sign In*/
function signingin(){
    document.getElementById("myModal1").style.display = "block";
}

/*JavaScript function for Sign Up*/
function signingup(){
    document.getElementById("myModal2").style.display = "block";
}

/*JavaScript function for cancel(x)*/
cancel1.onclick = function(){
    document.getElementById("myModal1").style.display = "none";
}

/*JavaScript function for cancel(x)*/
cancel2.onclick = function(){
    document.getElementById("myModal2").style.display = "none";
}

/*JavaScript function for Create Post button*/
function creatingPost(){
    document.getElementById("myModal3").style.display = "block";
}

/*This JavaScript function will make the dialog-box disapper when click on any part of the window other than on the dailog-box*/
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal1")){
     document.getElementById("myModal1").style.display = "none";
    }
    else if(event.target == document.getElementById("myModal2")){
        document.getElementById("myModal2").style.display = "none"; 
    }
    else if(event.target == document.getElementById("myModal3")){
        document.getElementById("myModal3").style.display = "none"; 
    }
}

