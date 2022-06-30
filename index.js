// console.log("hdjwdh");
function validate() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var cpassword = document.getElementById('cpassword').value;
  console.log("username",username)
  checkusername(username);
  checkemail(email);
  checkpassword(password);
  checkpasswordmatch(password, cpassword);
}
function checkusername(username) {
  if (username.length > 7) {
    // document.getElementById('username').classList.replace('error', 'success');
    document.getElementById('username').classList.remove('error');
    document.getElementById('username_error').innerHTML=''
  } 
  else {
    document.getElementById('username').classList.add('error');
    document.getElementById('username_error').innerHTML='username must contain at least 8 char'
  }
}
function checkemail(email) {
  if (email.includes('@itbhu.ac.in')) {
    // document.getElementById('email').classList.replace('error', 'success');
    document.getElementById('email').classList.remove('error');
    document.getElementById('email_error').innerText=''
  } 
  else {
    document.getElementById('email').classList.add('error');
    document.getElementById('email_error').innerText='email must contain @itbhu.ac.in'
  }
}
function checkpassword(password) {
  if (password.length > 7) {
    // document.getElementById('password').classList.replace('error', 'success');
    document.getElementById('password').classList.remove('error');
    document.getElementById('password_error').innerText=''
  } 
  else {
    document.getElementById('password').classList.add('error');
    document.getElementById('password_error').innerText='password must contain at least 8 letters'
  }
}
function checkpasswordmatch(password,cpassword) {
  if (password.length > 7&&password==cpassword) {
    // document.getElementById('cpassword').classList.replace('error', 'success');
    document.getElementById('cpassword').classList.remove('error');
    document.getElementById('cpassword_error').innerText=''
  } 
  else {
    document.getElementById('cpassword').classList.add('error');
    document.getElementById('cpassword_error').innerText='confirm password must contain at least 8 letters and must equal to password'
  }
}

document.getElementById('submit').addEventListener("click",validate);
// function checkemail(){

// }
// function checkpassword(){

// }
// function checkpasswordmatch(){

// }
