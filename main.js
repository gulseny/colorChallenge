$(document).ready(function(){
	console.log()

	var colors = ['red','blue', 'green', 'yellow', 'teal', 'purple', 'pink', 'olive', 'gray'];
	var colorCodes = [
		['red', '#ff0000'], ['blue', '#0000ff'], ['green', '#00ff00'],
		['yellow', '#ffff00'], ['teal', '#008080'], ['purple', '#800080'], 
		['pink', '#ff00ff'], ['olive', '#808000'], ['gray', '#808080']
	];

	var $tile = $('.tile');
	$tile.each(function(color){
		var random1 = Math.floor(Math.random() *  colors.length);;
		var random2 = Math.floor(Math.random() *  colors.length);;
		$(this).css('background-color', colorCodes[random1][1]).text(colors[random2]);
	});
});

