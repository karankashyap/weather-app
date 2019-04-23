window.addEventListener('load', () => {
  let long;
  let lat;
  let qs = ['time','location-timezone','temperature-degree','temperature-description'];
  let timeContent = document.querySelector('.time');
  let locationTimezone = document.querySelector('.location-timezone');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let temperatureDescription = document.querySelector('.temperature-description');
  let icons = document.querySelector('.icons');

  let secret = "82001d3abbb339f2775a9a16b4389eae";
  let apiUrl = "https://api.darksky.net/forecast/";
  //https://api.darksky.net/forecast/82001d3abbb339f2775a9a16b4389eae/37.8267,-122.4233
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = proxy+apiUrl+secret+"/"+`${lat},${long}`;

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const {temperature, summary, time, icon} = data.currently;
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          timeContent.textContent = new Date(parseInt(time));
          icons.textContent = icon;

        })



    });





  } else {
    h1.textContent = "Fuck";
  }


});
