
function sliderMove(e){
  const deltaY = e.clientY - downY;
  if (deltaY <= 0)
    movingSlider.style.transform = `translateY(${ 0 }px)`;
  else if (deltaY > maxHeight)
    movingSlider.style.transform = `translateY(${ maxHeight }px)`;
  else
    movingSlider.style.transform = `translateY(${ deltaY }px)`;
}

let downY = 0;
let movingSlider = null;
let maxHeight = 0

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector(".slider-container").addEventListener("mousedown", function(event){
    if (event.target.classList.contains("slider-handle")) {
      downY = event.clientY;
      movingSlider = event.target;
      maxHeight = event.target.parentNode.clientHeight - event.target.clientHeight;
      // debugger;
      document.addEventListener("mousemove", sliderMove)
      document.addEventListener("mouseup", function(){
        document.removeEventListener("mousemove", sliderMove)
      })
    }
  })
})
