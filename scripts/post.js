
/*JavaScript function to display Sign Up dialog box*/
var signUpLink3 = document.getElementById("gotosignup2");
signUpLink3.onclick = function(){
    document.getElementById("myModal1").style.display = "none";
    document.getElementById("myModal2").style.display = "block";
}
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal1")){
     document.getElementById("myModal1").style.display = "none";
    }
    else if(event.target == document.getElementById("myModal2")){
        document.getElementById("myModal2").style.display = "none"; 
    }
}

/*JavaScript function for like button*/
var clicks=0;
var clickmatter;
function liking(){
    clicks++;
    clickmatter=document.getElementById("fonting").innerText;
    if(clickmatter==" Like"){
        document.getElementById("fonting").innerText =" Liked";
        document.getElementById("likecount").innerHTML = clicks +" person likes this!";
    }
    else{
        document.getElementById("likecount").innerHTML = clicks +" people like this!";
    }
}

/*JavaScript function for display the Username,heading and content of a particular post instead of showing static heading and username*/   
var getUser=localStorage.getItem("Username");
var getheader=localStorage.getItem("HeaderName");
var getmatter=localStorage.getItem("Matter");
window.onload=function(){
    document.getElementById("putname").innerHTML=getUser;
    document.getElementById("putheading").innerHTML=getheader;
    document.getElementById("actualcontent").innerHTML=getmatter+"Let's take an example to understand this better. You have a file named circle.js which consists of logic for calculating the area & the circumference of a circle of a given radius . You can call circle.js a module named circle. You might be wondering why is there a need to have multiple modules? You could have just written all the code in a single module. Well it is very important to write modular code. By modular,I mean to say that your code should be independent and should be loosely coupled. Imagine that there's a large application and you have all your code written in just one place,just one file. Too messy,right? How does the code written inside a module run? Before executing the code written inside a module, Node takes the entire code and encloses it within a function wrapper. The syntax of this function wrapper is: The entire code written inside a module is private to the module,unless explicitly stated(exported)otherwise.This is the most significant advantage of having modules in Node.js. Even if you declare a global variable in a module using var,let or const keywords, the variables are scoped locally to the module rather than being scoped globally. this happens because each module has a function wrapper of its own and the code written inside one function is local to that function and cannot be accessed outside this function. Imagine that there are two modules-A and B. The code written inside the module A is enclosed within the function wrapper corresponding to the module A. Similar thing happens with the code written inside the module B. Because the code pertaining to both the modules enclosed within different functions will not be able to access the code of each other. (Remember each function in javascript has its own local scope?) This is the reason why module A cannot access the code written inside module B and vice versa. The five parameters --exports,require, module, _filename_, _dimame are available inside each module in Node. Though these parameters are gloabl to the code within a module yet they are loacl to the module(because of the function wrapper as explained above). These parameters provide valuable information related to a module. Let's revisit the circle module, which you looked at earlier. There are three constructs defined in this module-- a constant variable PI, a function named calculateArea and another function named calculateCircumference. AN important point to keep in mind is that all these constructs are private to the circle module by default. It means that you cannot use these constructs in any other module unless explicitly specified. So, the question that arises now is how do you specify something in a module that can be used by some other module? This is when the module& require parameters of the function wrapper are helpful. Let's discuss these two parameters in this article module. The module parameter(rather a keyword in a module in Node)refers to the object representing the current module.exports is the key of a module object, the corresponding value of which is an object. the default value of module.exports object is { }(empty object). you can check this by logging the value of module keyword inside any module. Let's check what is the value of module parameter inside the circle module. Notice that there is a console.log(module); at the end of the code in the file given above. When you see the output, it will log the module object,which has a key named exports and the value corresponding to this key is { }(an empty object). Now what does the module.exports object do?Well it is used for defining stuff that can be exported by a module. Whatever is exported from a module can, in turn, be made available to other modules. Exporting something is quite easy. You just need to add it to the module.exports object. There are three ways to add something to the module.exports objet to be exported. Let's discuss these methods one by one.";
}

/*JavaScript function for commenting on a post*/
var CmntMatter;
function commenting(TextId){
    CmntMatter = TextId.value;
    var a = CmntMatter.length;
    console.log(a);
    console.log(CmntMatter); 
    if(a>0){
          var a = document.getElementById("putcomment");
          document.getElementById("cmntdec1").style.display = "block"
          var temp = '<div class="cmnt">' + CmntMatter + '</div>';
         document.getElementById("cmntdec").innerHTML += temp;     
         a.value = a.defaultValue;
    }
    else{
        alert("Enter some content in the textarea");
    }       
}

/*JavaScript function for edit button*/
function editing(Idname){
        document.getElementById("putheading").contentEditable = "true";
        document.getElementById("putcontent").contentEditable = "true";
        document.getElementById("putheading").style.border = "solid #FFB6C1";
        document.getElementById("putcontent").style.border = "solid #FFB6C1";
        document.getElementById("savebutton").style.display = "inline";
        document.getElementById(Idname).style.display = "none";
        document.getElementById("putheading").innerText = getheader;
}

/*JavaScript function for save button*/
function Saving(Idname1){
        getheader = document.getElementById("putheading").innerText;
        document.getElementById("putheading").contentEditable = "false";
        document.getElementById("putcontent").contentEditable = "false";
        document.getElementById("putheading").style.border = "solid #FFFFFF";
        document.getElementById("putcontent").style.border = "solid #FFFFFF";
        document.getElementById(Idname1).style.display = "none";
        document.getElementById("editbutton").style.display = "inline";
        document.getElementById("putheading").innerText = getheader;
}


