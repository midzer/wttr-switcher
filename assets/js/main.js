function changeWeather () {
    var input = document.getElementById('weather-input');
    var img = document.getElementById('weather-img');
    img.src =
        'https://wttr.in/' + input.value +
        '_' + weatherOptions
        + '.png';
    img.alt = weatherImgAlt + input.value;
    input.value = '';
}

document.getElementById('weather-btn').onclick = function () {
    changeWeather();
}

document.getElementById('weather-form').onkeypress = function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      changeWeather();
    }
}

var weatherOptions = '0pq_transparency=200_lang=en';
var weatherImgAlt = 'Current weather in ';
