
 document.addEventListener("DOMContentLoaded", function(event) {
       let planets = document.getElementById('planets')
       let mass = document.getElementById('mass')
       let distance = document.getElementById('distance')

       let submitButton = document.getElementById('mass-form')
       //function to take in planet selected for mass change
       function planetForm(e){
           console.log(e.target.value)
       }
       //mass change form
       function massForm(e){
           console.log(e.target.value)
       }
       function distanceForm(e){
           console.log(e.target.value)
       }

       function submitMassForm(e){
           e.preventDefault()
           let planet = planets.value
           let planetMass = mass.value

           let planetDist = distance.value
           console.log(planetMass,planet,planetDist)
       }



       function submitDistanceForm(){
           console.log(e.target.value)
       }

       planets.addEventListener('change',planetForm)
       mass.addEventListener('change',massForm)
       distance.addEventListener('change',distanceForm)
       submitButton.addEventListener('submit',submitMassForm)
 })
