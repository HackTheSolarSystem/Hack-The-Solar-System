 document.addEventListener("DOMContentLoaded", function(event) {
       let planets = document.getElementById('planets')
       let mass = document.getElementById('mass')
       let submitButton = document.getElementById('mass-form')

       function planetForm(e){
           console.log(e.target.value)
       }
       function massForm(e){
           console.log(e.target.value)
       }
       function submitMassForm(e){
           e.preventDefault()
           let planet = planets.value
           let planetMass = mass.value
           console.log(planetMass,planet)
       }

       planets.addEventListener('change',planetForm)
       mass.addEventListener('change',massForm)
       submitButton.addEventListener('submit',submitMassForm)

 })
