document.querySelector('button').addEventListener('click', getTemp)
    
function getTemp(){
  let city= document.querySelector('#city').value
  let country= document.querySelector('#country').value

  const url= `http://api.weatherstack.com/current?access_key=6d7283ca10feb5870a89057ec8b615f4&query=${city}`
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    // document.querySelector('h2').innerText= data.title
    
  })
  .catch(err => {
      console.log(`error ${err}`)
});
}