
$(document).ready(function() {

	$(document).mousemove(function( event ) {
		var mousePos = "(" + event.pageX + "," + event.pageY + ")";
		$(".author span").text(mousePos);
	});

	var generateFall = function(){ 
		var elementCreate;
		var elementCount=250;
		var elementClass=".fall";
		var container="body";
		var maxWidth=$(document).width();
		var maxHeight=$(document).height();
		var texts = ["falling","symbols","*","%","$","="];
		var colors = ["lime","gray", "red", "blue", "yellow"];

		for (a=0;a<elementCount;a++){
			elementCreate="<span class='fall'>"+texts[randInt(0,texts.length)]+"</span>";
			elementColor=colors[randInt(0,colors.length)];
			$(container).append(elementCreate); 
			$(elementClass+":nth-of-type("+(a+1)+")").css(
				{	
					"color": elementColor,
					"left": randInt(0,maxWidth), 
					"opacity": '.'+randInt(1,9), 
					"animation-delay": randInt(0,5)+'s', 
					"animation-duration": randInt(6,20)+'s',
					"zoom": randInt(1,5),
					"text-shadow": "0px 0px "+randInt(4,36)+"px "+elementColor
				}
			);
		}
	}
	generateFall();
});

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}