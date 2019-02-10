 document.addEventListener("DOMContentLoaded", function(event) {
       let planets = document.getElementById('planets')
       let mass = document.getElementById('mass')


       let planetForDistance = document.getElementById('planet-distance')
       let planetDistance = document.getElementById('distance-number')
       let submitButton = document.getElementById('mass-form')
       //function to take in planet selected for mass change
       function planetForm(e){
           console.log(e.target.value)
       }
       //mass change form
       function massForm(e){
           console.log(e.target.value)
       }
        //function to take in planet selected for distance change
       function planetDistanceSelect(){
           console.log(e.target.value)
       }
       //distance change form
       function planetDistanceInput(){
           console.log(e.target.value)
       }
       function submitMassForm(e){
           e.preventDefault()
           let planet = planets.value
           let planetMass = mass.value
           let planetForDist = planetForDistance.value
           let planetDist = planetDistance.value
           console.log(planetMass,planet,planetForDist,planetDist)
       }



       function submitDistanceForm(){
           console.log(e.target.value)
       }

       planets.addEventListener('change',planetForm)
       mass.addEventListener('change',massForm)
       submitButton.addEventListener('submit',submitMassForm)

       planetForDistance.addEventListener('change',planetDistanceSelect)
       planetDistance.addEventListener('change',planetDistanceInput)
       planetDistanceForm.addEventListener('submit',submitDistanceForm)

 })
