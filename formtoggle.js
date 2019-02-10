

let hideForm = null

function setupFormToggle(){
  const planetForm = document.querySelector(".js-form-container")
  hideForm = function(){
    planetForm.classList.remove("js-showing")
  }
  document.querySelector(".js-edit-planets").addEventListener("click", function(){
    if (planetForm.classList.contains("js-showing")) {
      hideForm()
    } else {
      planetForm.classList.add("js-showing")
    }
  })
}