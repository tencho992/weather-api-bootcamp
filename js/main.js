function getTemp(){
  let getAnswer = document.querySelector('input').value
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${getAnswer}&APPID=76cdbae952e035864405714b8200419f`
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    let convert = Math.floor((data.main.temp - 273.15) * 1.8 + 32)
    document.querySelector('#placeToSee').innerText = `${convert}`
  })
  .catch(err => {
      console.log(`error ${err}`)
});
}
document.querySelector('button').addEventListener('click', getTemp)
