const handleSearch=()=>{
    const city=document.getElementById('city').value.trim();
    if(city.length===0) {
        alert('Please enter city!');
        return;
    }
    
    document.getElementById('city').value='';
   
    weather(city);
}

const weather=(city)=>{
   fetch(`https://api.weatherapi.com/v1/current.json?key=4c903aa7d32748d0b63183532211203&q=`+city)
   .then(res=>res.json())
   .then(res=>display(res))
   .catch(()=>alert('City not found!'))
   
}
let img=document.createElement('img');
const display=(res)=>{
  document.getElementById('location').innerHTML=res.location.name+','+' ' +res.location.region+','+' ' +res.location.country;
  document.getElementById('localtime').innerHTML= 'Local Time: '+ res.location.localtime+' '+'('+res.location.tz_id+')';
  document.getElementById('temperature').innerHTML='Temperature: '+res.current.temp_c+' °C / '+res.current.temp_f+' F';
  
  
  document.getElementById('condition').innerHTML=res.current.condition.text;
  document.getElementById('humidity').innerHTML='Humidity: '+res.current.humidity+' %';
  document.getElementById('windspeed').innerHTML='Wind Speed: '+res.current.wind_kph+' kmph';

  img.src='https:'+res.current.condition.icon;
  let tab=document.getElementById('icon');
  tab.appendChild(img);
  
}