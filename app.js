let now = new Date(); 
let time = now.toLocaleTimeString() 
date.innerText = now.toDateString()+" "
function weather(){
    const city = document.getElementById('input').value 
    const country = document.getElementById('country').value
    const cityName = document.getElementById('city-name')
    const response = fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+','+country+'&appid=9b8ac0da368e9235fc351212dfc67a13')
    .then((response)=>{
    const data = response.json()
    return data
    })
    .then((data)=>{ 
    cityName.innerText = data.city.name
    temp.innerText = Math.floor(data.list[0].main.temp)-273+" °C "+data.list[0].weather[0].description
    pressure.innerText = data.list[0].main.pressure+" hPa"
    speed.innerText = data.list[0].wind.speed+" m/s"
    })
    .catch(()=>{
    console.log("Fetching API is Failed")
    })
}

//Tomorrow's weather
 



