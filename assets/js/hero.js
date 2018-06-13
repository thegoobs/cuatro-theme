---
---

//use liquid to get the hero image list
var pics = {};
{% for pics in site.hero %}
	pics[{{forloop.index}}] = '{{pics}}';
{% endfor %}

$(document).ready(function() {
	var p = 'assets/' + pics[Math.floor(1 + Math.random() * 4)];
	$(".hero-container").css({"background-image": "linear-gradient(rgba(75,75,75, 0.5),rgba(0, 0, 0, 0.9)), url('" + p + "')" })
	console.log(p);
});