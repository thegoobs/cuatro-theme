var num = Math.floor(Math.random() * Math.floor(4)) + 1;
var url = $(".hero-container").attr("hero" + num);
var css = "linear-gradient(rgba(75,75,75, 0.5),rgba(0, 0, 0, 0.9)), url(" + url + ")";
console.log($(".hero-container").attr("hero" + num));

$(".hero-container").css({"background-image": css});