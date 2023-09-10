const date = new Date(Date.now());
const currDayOfWeek = date.toLocaleString('en-us', {weekday: 'long'});
const currUtcMill = date.getTime();

document.getElementById('currDayOfTheWeek').innerHTML = currDayOfWeek;
document.getElementById('currUtcMill').innerHTML = currUtcMill + ' ms';