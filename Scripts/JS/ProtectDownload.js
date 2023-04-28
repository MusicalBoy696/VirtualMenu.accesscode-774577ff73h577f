console.log("Script Connect Successfully");
console.log("CSS Connect Successfully");

function Pass() {
  let password = document.getElementById('password').value;
  window.alert(password);
  if (password === '188') {
    document.getElementById('stat').innerHTML = '<a href="Downloadpage.html" title="Password Correct"> Password Correct</a>';
  } else {
    document.getElementById('stat').innerHTML = '<h2>PassWord Incorrect</h2>'
  }
}
