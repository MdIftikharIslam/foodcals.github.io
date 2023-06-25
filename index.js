
const form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    let query = form.querySelector('[data-input]').value
    fetch(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
        method:'GET',
        headers:{
            'X-Api-Key': 's2F/8KmyrpR/D9qOE7/G1A==bX3IGb1Xfl2q3kUo'
        }
    }).then(res=>{
        return res.json()
    }).then(res=>{
        console.log(res);
        let calories = res[0].calories
        let carbohydrates_total_g = res[0].carbohydrates_total_g
        let cholesterol_mg = res[0].cholesterol_mg
        let fat_saturated_g = res[0].fat_saturated_g
        let fat_total_g = res[0].fat_total_g
        let fiber_g = res[0].fiber_g
        let name = res[0].name.toUpperCase()
        let potassium_mg = res[0].potassium_mg
        let protein_g = res[0].protein_g
        let sodium_mg = res[0].sodium_mg
        let sugar_g = res[0].sugar_g

        document.getElementById('name').innerText = name
        document.getElementById('info_name').innerText = name
        document.getElementById('total_fat').innerText = fat_total_g
        document.getElementById('fat_saturated').innerText = fat_saturated_g
        document.getElementById('protein').innerText = protein_g
        document.getElementById('sodium').innerText = sodium_mg
        document.getElementById('potassium').innerText = potassium_mg
        document.getElementById('cholesterol').innerText = cholesterol_mg
        document.getElementById('total_carbohydrate').innerText = carbohydrates_total_g
        document.getElementById('fiber').innerText = fiber_g
        document.getElementById('sugar').innerText = sugar_g
        document.getElementById('calories').innerText = calories

        document.querySelector('.hero-section').style.display = 'block'
        document.getElementById('alertBox').style.display = 'none'
    }).catch (error => {
        document.querySelector('.hero-section').style.display = 'none'
        document.getElementById('alertBox').style.display = 'block'
    })
})
