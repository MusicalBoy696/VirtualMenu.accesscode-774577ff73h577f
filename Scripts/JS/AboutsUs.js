console.log("Script Connect Successfully");
console.log("CSS Connect Successfully");

let elements = document.getElementsByClassName('Founder');

// loop through each element with class name 'Founder' and set its innerHTML
Array.from(elements).forEach((el) => {
  el.innerHTML = "<p><strong>Founder: </strong> Musical Boy</p>";
});


