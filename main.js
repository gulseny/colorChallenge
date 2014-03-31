$(document).ready(function(){
	var score = 0;

	var colors = ['red','blue', 'green', 'yellow', 'purple', 'pink'];
	var colorCodes = ['#ff0000','#0000ff', '#00ff00', '#ffff00', '#800080', '#ff00ff'];
	var colorsLib = {
		red: '255, 0, 0', blue: '0, 0, 255', green: '0, 255, 0', 
		yellow: '255, 255, 0', purple: '128, 0, 128', pink: '255, 0, 255'
	};

	var generateTiles = function(){
		var indexColor = Math.floor(Math.random() *  colors.length);
		var indexCode = Math.floor(Math.random() *  colorCodes.length);
		return [colorCodes[indexCode], colors[indexColor]]
	};


	var $tile = $('.tile');
	$tile.each(function(){
		var input = generateTiles();
		$(this).text(input[1]).css('color', input[0]);
	});

	$tile.on('click', function(){
		var text = $(this).text();
		var color = $(this).css('background-color').toString();
		console.log(color, 'rgb(' + colorsLib[text] + ')');
		if(color === 'rgb(' + colorsLib[text] + ')') {
			console.log('Success!');
		} else {
			console.log('nope!');
		}
	});
});

