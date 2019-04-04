//Beginning of SIGN UP FORM
let signUpButton = document.getElementById("signUpButton");

function clicked() {
    signUpButton.window.open('signup.html')
}

function clicked1() {
 var user = document.getElementById ('username');
 var pass = document.getElementById ('password');

 var coruser ="test";
 var corpass ="123";


 if (user.value == coruser  && pass.value == corpass ) {
       alert ("You are logged in as " + user.value);
       window.open("#");
 } else {
       alert("Incorrect username or password!");


}
}

//END of LOGIN form