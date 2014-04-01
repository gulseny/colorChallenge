$(document).ready(function(){

	var currentScore = 0;
	var highestScore = 0;
	var timeLeft = 20;

	var colors = ['RED','BLUE', 'GREEN', 'YELLOW', 'PURPLE', 'PINK'];
	var colorCodes = ['#cc0000','#0000ee', '#00ee00', '#ffff00', '#800080', '#ff00ff'];
	var colorsLib = {
		RED: '255, 0, 0', BLUE: '0, 0, 255', GREEN: '0, 255, 0', 
		YELLOW: '255, 255, 0', PURPLE: '128, 0, 128', PINK: '255, 0, 255'
	};

	var generateIndeces = function(){
		var indexColor = Math.floor(Math.random() *  colors.length);
		var indexCode = Math.floor(Math.random() *  colorCodes.length);
		return [colorCodes[indexCode], colors[indexColor]]
	};

	var $tile = $('.tile');
	var $timeLeft = $('.timeLeft');
	var $wrong = $('#wrong');
    var $correct = document.getElementById('correct');
    var $wrong = document.getElementById('wrong');


	var generateTiles = function(){
		$tile.each(function(){
			var input = generateIndeces();
			$(this).text(input[1]).css('color', input[0]);
		});
	};

	var endGame = function(){
		console.log('game over!');
		clearInterval(gameTimer);
		clearInterval(tileTimer);
		$tile.off('click');
	};

	$tile.on('click', function(){
		var text = $(this).text();
		var color_tile = $(this).css('color').toString();
		var color_real = 'rgb(' + colorsLib[text] + ')';
		console.log(color_tile, color_real);
		if(color_tile === color_real) {
			$correct.play();
			console.log('+1')
			currentScore++;
			if(currentScore > highestScore){
				highestScore = currentScore;
				$('.highestScore').text(highestScore);
			}
		} else {
			$wrong.play();
			console.log('0')
			currentScore = 0;
		}
		$('.currentScore').text(currentScore);
	});

	generateTiles();
	var tileTimer = setInterval(generateTiles, 2000);
	var gameTimer = setInterval(function(){
		timeLeft--;
		$timeLeft.text(timeLeft);
		if(timeLeft <= 5){
			$timeLeft.css({'color': 'red', 'font-size': '3.5em'});
		}
		if(timeLeft === 0){
			endGame();
		}
	}, 1000);





});

