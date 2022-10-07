const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function validate()
{
  const ph = document.getElementById('phone')
  if(isNaN(ph.value) || ph.value.length != 10)
  {
    alert("Invalid number")
    return false
  } 
}

var form = document.getElementById('form')

if(form)
{
  form.addEventListener('submit', function(event){
      event.preventDefault()
      console.log(document.getElementById('user').value)
      console.log(document.getElementById('email').value)
      console.log(document.getElementById('phone').value)
      console.log(document.getElementById('messagebox').value)
    
    
    })
}
