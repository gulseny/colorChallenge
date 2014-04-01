$(document).ready(function(){

	var currentScore = 0;
	var highestScore = 0;
	var timeLeft = 20;

	var colors = ['red','blue', 'green', 'yellow', 'purple', 'pink'];
	var colorCodes = ['#ff0000','#0000ff', '#00ff00', '#ffff00', '#800080', '#ff00ff'];
	var colorsLib = {
		red: '255, 0, 0', blue: '0, 0, 255', green: '0, 255, 0', 
		yellow: '255, 255, 0', purple: '128, 0, 128', pink: '255, 0, 255'
	};

	var generateIndeces = function(){
		var indexColor = Math.floor(Math.random() *  colors.length);
		var indexCode = Math.floor(Math.random() *  colorCodes.length);
		return [colorCodes[indexCode], colors[indexColor]]
	};

	var $tile = $('.tile');
	var generateTiles = function(){
		$tile.each(function(){
			var input = generateIndeces();
			$(this).text(input[1]).css('color', input[0]);
		});
	};

	generateTiles();
	var tileTimer = setInterval(generateTiles, 4000);
	var gameTimer = setInterval(function(){
		timeLeft--;
		$('.timeLeft').text(timeLeft);
		if(timeLeft === 0){
			endGame();
		}
	}, 1000);

	var endGame = function(){
		console.log('game over!');
		clearInterval(gameTimer);
		clearInterval(tileTimer);
	};




	$tile.on('click', function(){
		var text = $(this).text();
		var color_tile = $(this).css('color').toString();
		var color_real = 'rgb(' + colorsLib[text] + ')';
		console.log(color_tile, color_real);
		if(color_tile === color_real) {
			console.log('+1')
			currentScore++;
			if(currentScore > highestScore){
				highestScore = currentScore;
				$('.highestScore').text(highestScore);
			}
		} else {
			console.log('0')
			currentScore = 0;
		}
		$('.currentScore').text(currentScore);
	});
});

