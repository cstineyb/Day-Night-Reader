// JavaScript to get hour in the day

var date = new Date();
var current_hour = date.getHours();

console.log(current_hour);


//IF NIGHTIME  Remove day class
if (current_hour >= 17{

$('body').removeClass('day');
//ADD NIGHT CLASS
$('body').addClass('night');
};