
var locationOptions = {
	enableHighAccuracy: true,
	maximumAge: 50000,
	timeout: 60000
};
function errorHandler(error) {
switch (error.code) {
case error.PERMISSION_DENIED:
alert ('You have denied access to your position.');
break;
case error.POSITION_UNAVAILABLE:
alert ('There was a problem getting your position.');
break;
case error.TIMEOUT:
alert ('The application has timed out attempting to get your position.');
break;
	} 
}
function getLocation()
{
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(showPosition,errorHandler,locationOptions);
	}
else{
	alert ('Geolocation is not supported in this browser.');
	}
}
function showPosition(position){
	alert('Latitude: ' + position.coords.latitude+ '\n' + 'Longitude: '' + position.coords.longitude);
}
