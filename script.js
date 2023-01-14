var dynamicIpAdd = "";
var dynamicLat = "";
var dynamicLong = "";
const map = document.getElementById("maps");
var mykey = "7b99701872914eb0d67343c2ce02d82e";

fetch("https://api.ipify.org?format=json")
  .then((value) => value.json())
  .then((value) => {
    dynamicIpAdd = value.ip;

    fetch(`https://ipinfo.io/${dynamicIpAdd}/json?token=3a6e490992dd17`)
      .then((value) => value.json())
      .then((value) => {
        console.log(value);
        city.innerHTML = value.city;
        lat.innerHTML = value.loc.substr(0, 7);
        lat1.innerHTML = value.loc.substr(0, 7);
        dynamicLat = lat.innerHTML;
        long.innerHTML = value.loc.substr(8);
        long1.innerHTML = value.loc.substr(8);
        dynamicLong = long.innerHTML;
        timezone.innerHTML = value.timezone;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${dynamicLat}&lon=${dynamicLong}&appid=${mykey}&units=metric`
        )
          .then((value) => value.json())
          .then((value) => {
            console.log(value);
            windspeed.innerHTML = value.wind.speed;
            feelslike.innerHTML = value.main.feels_like;
            humidity.innerHTML = value.main.humidity;
            pressure.innerHTML = value.main.pressure;
            description.innerHTML = value.weather[0].description;
            winddirection.innerHTML = value.wind.deg;
            temp.innerHTML = value.main.temp;

            let link = `https://maps.google.com/maps?q=${dynamicLat},${dynamicLong} &output=embed`;
            const iframe = document.createElement("iframe");
            iframe.src = link;
            iframe.width = "100%";
            iframe.height = "100%";
            map.appendChild(iframe);
          });
      });
  });
