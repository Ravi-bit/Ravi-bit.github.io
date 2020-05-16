/*This function is to open postslist.html page*/
function openpage(){
    window.location.href = "./html/postslist.html";
}

/*JavaScript function to open the create post when clicks on create post button*/
var cancel3 = document.getElementById("closingCreate");
cancel3.onclick = function(){
    document.getElementById("myModal3").style.display = "none";
}

/*This function will take up to the Sign Up dialog-box*/
var signUpLink1 = document.getElementById("gotosignup");
signUpLink1.onclick = function(){
    document.getElementById("myModal1").style.display = "none";
    document.getElementById("myModal2").style.display = "block";
}