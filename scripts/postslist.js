var BoxList;
var LinkBtn;
var No = document.getElementById("no");
var Yes = document.getElementById("yes");
var signUpLink2 = document.getElementById("gotosignup1");
signUpLink2.onclick = function(){
    document.getElementById("myModal1").style.display = "none";
    document.getElementById("myModal2").style.display = "block";
}

/*JavaScript function for deleting a post taking individual post Id's for a same onclick function*/
function trashing(BoxId,TrashBtn){
    BoxList = BoxId;
    DeleteThis = TrashBtn;
    document.getElementById("delete-box").style.display = "block";
}
No.onclick = function(){
    document.getElementById("delete-box").style.display = "none";
}
Yes.onclick = function(){
    console.log(BoxList," was removed by using the button-Id ",DeleteThis);
    document.getElementById(BoxList).style.display = "none";
    document.getElementById("delete-box").style.display = "none";
}

/*This JavaScript function is to set the signUp,Sign In dialog boxes disappear when user clicks on any part of window other than dialog box */
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal1")){
     document.getElementById("myModal1").style.display = "none";
    }
    else if(event.target == document.getElementById("myModal2")){
        document.getElementById("myModal2").style.display = "none"; 
    }
}

/*This JavaScript function is to store the content of a particular post which can be later used by post.html page*/
var User;
var Header;
var content;
function next(NameId,HeadingId,ParaId,LinkingId){
    User = document.getElementById(NameId).innerText;
    Header = document.getElementById(HeadingId).innerText;
    content = document.getElementById(ParaId).innerText;
    LinkBtn = LinkingId;
    if(LinkBtn == "dot1"){
        localStorage.setItem("Username", User);
        localStorage.setItem("HeaderName", Header);
        localStorage.setItem("Matter",content);
    }
    else if(LinkBtn == "dot2"){
        localStorage.setItem("Username",User);
        localStorage.setItem("HeaderName",Header);
        localStorage.setItem("Matter",content);
    }
    else if(LinkBtn == "dot3"){
        localStorage.setItem("Username",User);
        localStorage.setItem("HeaderName", Header);
        localStorage.setItem("Matter",content);
    }
    else if(LinkBtn == "dot4"){
        localStorage.setItem("Username", User);
        localStorage.setItem("HeaderName", Header);
        localStorage.setItem("Matter",content);
    }
    else if(LinkBtn == "dot5"){
        localStorage.setItem("Username", User);
        localStorage.setItem("HeaderName", Header);
        localStorage.setItem("Matter",content);
    }
    window.location.href = "post.html";
}

