$(document).ready(function(){

	var $play = $('.play');

	$play.on('click', function(){
		$play.css('visibility', 'hidden');

		var currentScore = 0;
		var highestScore = 0;
		var timeLeft = 60;
		
		var $timeLeft = $('.timeLeft');
		$timeLeft.text(timeLeft);

		var colors = ['red','blue', 'green', 'yellow', 'purple', 'pink'];
		var colorCodes = ['#ff0000','#0000ff', '#00ff00', '#ffff00', '#800080', '#ff00ff'];
		var colorsLib = {
			red: '255, 0, 0', blue: '0, 0, 255', green: '0, 255, 0',
			yellow: '255, 255, 0', purple: '128, 0, 128', pink: '255, 0, 255'
		};

		var generateIndeces = function(){
			var indexColor = Math.floor(Math.random() *  colors.length);
			var indexCode = Math.floor(Math.random() *  colorCodes.length);
			return [colorCodes[indexCode], colors[indexColor]];
		};

		var $tile = $('.tile');
		var $container = $('.container');
		var $correct = document.getElementById('correct');
		var $wrong = document.getElementById('wrong');


		var generateTiles = function(){
			$tile.each(function(){
				var input = generateIndeces();
				$(this).text(input[1]).css('color', input[0]);
			});
		};

		var endGame = function(){
			clearInterval(gameTimer);
			clearInterval(tileTimer);
			$tile.off('click');
		};

		$tile.on('click', function(){
			var text = $(this).text();
			var color_tile = $(this).css('color').toString();
			var color_real = 'rgb(' + colorsLib[text] + ')';
			if(color_tile === color_real) {
				$correct.play();
				currentScore++;
				if(currentScore > highestScore){
					highestScore = currentScore;
					$('.highestScore').text(highestScore);
				}
			} else {
				$wrong.play();
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
				$timeLeft.css('color', 'red');
			}
			if(timeLeft === 0){
				$play.text('play again?').css('visibility', 'visible');
				endGame();
			}
		}, 1000);
		
	});
});

