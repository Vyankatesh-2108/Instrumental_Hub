document.querySelector('.img-btn').addEventListener('click', function()
{
    document.querySelector('.cont').classList.toggle('s-signup')
}
);
function validate(){
    getCookie("email");
    var mail = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if(mail=="" || pass==""){
        alert("Fields Can not be Empty....!");
    }
    else if(mail == "chinmayp100@gmail.com" || mail == "vyankateshkhetri07@gmail.com" && pass=="1234567"){
        alert("Log in Successfull....");
    }
    else{
        alert("Username or password is incorrect....");
    }
}
document.querySelector('.submit1').onclick = function(){
    var name1 = document.getElementById("name2").value;
    var email3 = document.getElementById("email2").value;
    var password = document.querySelector('.password').value;
    var confirm = document.querySelector('.confirmpassword').value;
    if(name1 =="" || email3=="" || password =="" || confirm == ""){
        alert("Field Cannot be empty...!");
    }
    else if(password != confirm){
        alert("Password did not match...!");
    }
    else{
        alert("Account Created");
    }
}

function myFun(){
    alert("Hii")
    var now=new Date();
	now.setMonth(now.getMonth() + 1);
	
	emailid=escape(document.myform.email)+";";
	document.cookie="EmailID : "+emailid;
	
	password=escape(document.myform.password)+";";
	document.cookie="Password : "+password;

	document.cookie="Expired Date : "+now.toUTCstring+";";
	alert("Cookies created . . . ");
	alert("Email_ID: "+emailid);
	alert("password : "+password)
 	alert("Cokies Expired Date is : "+now);
}

function openWin(){
    window.open("https://www.facebook.com/chinmay.mp.54/","","width=500, height=300px");
}

function openInsta(){
    window.open("https://www.instagram.com/chinuek/","width=500px, height=300px");
}

function myFunction(){
    setCookie("user_email","bobthegreat@gmail.com",30); //set "user_email" cookie, expires in 30 days
    var userEmail=getCookie("user_email");//"bobthegreat@gmail.com" 
}
function setCookie(gemailId,passwordd,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = gemailId + "=" + (passwordd || "")  + expires + "; path=/";
}
function getCookie(gemailId) {
    var nameEQ = gemailId + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return alert('Welcome Back ' , gemailId);
}

