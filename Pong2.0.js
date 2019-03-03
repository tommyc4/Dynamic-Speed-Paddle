window.onload = () =>{
const skinNames = ['Classic', 'Camo', 'Crystal'];
const fontColors = ['white', 'black', 'black'];
const gameBackrounds= ['https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/52991399_2042790205786215_5280390857088827392_o.jpg?_nc_cat=109&_nc_ht=scontent-ort2-2.xx&oh=97fb3c2f6f9201d11530d10bc95633fa&oe=5D17373D', 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/52813683_2042789979119571_5520794766649851904_o.jpg?_nc_cat=101&_nc_ht=scontent-ort2-2.xx&oh=288e883ed557a9aba8a070dc016fb871&oe=5D186249', 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/53043013_2042790369119532_7207029923838427136_o.jpg?_nc_cat=110&_nc_ht=scontent-ort2-2.xx&oh=c63b1fa598303ad73462bedfb5973ec8&oe=5CDA6350'];
let paddleSkins =['https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/53345269_2042803099118259_6706963136353665024_n.jpg?_nc_cat=103&_nc_ht=scontent-ort2-2.xx&oh=b56e384bda9a36d05f3c9c08652e67e2&oe=5CDD90B6',  'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/52959998_2044371678961401_7378499664133226496_n.jpg?_nc_cat=101&_nc_ht=scontent-ort2-2.xx&oh=70829d8a19bc7a3872b11272f575eca0&oe=5CDA24EE', 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/53369501_2044372635627972_5937477972423344128_n.jpg?_nc_cat=108&_nc_ht=scontent-ort2-2.xx&oh=15a7cf57d955548e457e935bfdf58b3e&oe=5D257CD6'];
const skinBalls = ['https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/53345269_2042803099118259_6706963136353665024_n.jpg?_nc_cat=103&_nc_ht=scontent-ort2-2.xx&oh=b56e384bda9a36d05f3c9c08652e67e2&oe=5CDD90B6', 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/52984138_2042803029118266_3324763393906180096_n.jpg?_nc_cat=110&_nc_ht=scontent-ort2-2.xx&oh=1d257904ebd0684a09bf3e327449ac89&oe=5D208D07', 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/52947160_2042802959118273_74939925115437056_n.jpg?_nc_cat=103&_nc_ht=scontent-ort2-2.xx&oh=5d0ca20a581a2a7ed3719915ad51fccd&oe=5CE84D6E'];	
const canvas =  document.createElement('canvas');		
const context = canvas.getContext('2d');	
		canvas.id = 'canvas';
		canvas.style.display	= 'block';	
	    canvas.width = 	document.body.clientWidth; 
    		canvas.height = Math.max( window.innerHeight, document.body.clientHeight) - 16;
 	const resizeText =(num)=>{
	return	String(((num/canvas.width) * canvas.width) + 'px');
	}
let menuTitleFonts = resizeText(70);	
let menuSubFonts = resizeText(40);
let fontSizesEnd = resizeText(60);
let subFontSizesEnd = resizeText(30);
let musicFontSize = resizeText(15);
const mobile = window.matchMedia( "(max-width: 600px)" );
	if (mobile.matches) {
	canvas.width = 	 Math.max( window.innerHeight, document.body.clientHeight);
	canvas.height = document.body.clientWidth - 20; 
	menuTitleFonts = resizeText(75);	
	menuSubFonts = resizeText(25);
	fontSizesEnd = resizeText(35);
	subFontSizesEnd = resizeText(20);
	musicFontSize = resizeText(15);
}	

	document.body.appendChild(canvas);
let slide = 0;	
const menuBackgrounds = ['https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/53023853_2042791072452795_2526775001638502400_o.jpg?_nc_cat=110&_nc_ht=scontent-ort2-2.xx&oh=5e5637f014063ad3643f5e3f5c949b06&oe=5D251B0D', 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/53020265_2042790949119474_4989351112764030976_o.jpg?_nc_cat=105&_nc_ht=scontent-ort2-2.xx&oh=238f7be60680f767e9f1a4d6e391304c&oe=5CDDCEB4', 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/53043013_2042790369119532_7207029923838427136_o.jpg?_nc_cat=110&_nc_ht=scontent-ort2-2.xx&oh=c63b1fa598303ad73462bedfb5973ec8&oe=5CDA6350'];	
const background = {
	create(){
		canvas.style.background = 'url(' + menuBackgrounds[slide] + ')';
		canvas.style.backgroundSize =  '100% 100%';
	},	
};
	background.create();
const fontNames =  ['Arial', 'Courier', 'Verdana'];
class menuText {
	constructor(text, x, y, fontSize, color){
	this.text = text;
	this.y = y;
	this.x = x;
	this.color = color;
	this.align = 'center';
	this.fontSize = fontSize;
	}
}
menuText.prototype.write = function(){
	document.fonts.load('10pt impact');
	context.fillStyle = this.color;
	context.textAlign = this.align;
	context.font = this.fontSize + ' ' + fontNames[slide];
	context.fillText(this.text, this.x, this.y);
};
let musicText;
const backgroundMusic ={
	on: -1,
	songs: ['song1.mp3', 'song2.mp3', 'song3.mp3', 'song4.mp3', 'song5.mp3', 'song6.mp3'],
	sound: document.createElement('audio'),
	source: document.createElement('source'),
	textSwitch(){
		if(this.on == -1){
		musicText = 'Off';
		}else if(this.on==1){
		musicText = 'On';
}	
	},
	setupAudio(){
		this.sound.setAttribute('controls', 'mute');
		this.sound.volume = 0.2;
		this.sound.style.display = 'none';
		document.body.appendChild(this.sound);
	},
	randomSong(min, max){
		let number = Math.floor(Math.random() * (max - min) + min);
		return number;
	},
	insertSong(){
		this.source.src = this.songs[backgroundMusic.randomSong(0, this.songs.length)]; 
		this.sound.appendChild(this.source);
	},	
	musicSwitch(){
		this.on = this.on * -1;
		if(this.on == -1){
		context.clearRect(canvas.width/1.4, canvas.height/1.2, canvas.width/5, canvas.height/12);
		music  = new menuText('Music: Off', canvas.width/1.2, canvas.height/1.1, musicFontSize, fontColors[slide]);
		music.write();
		document.body.removeChild(this.sound);	
		} 
		if(this.on == 1){
		context.clearRect(canvas.width/1.4, canvas.height/1.2, canvas.width/5, canvas.height/12);
		music = new menuText('Music: On', canvas.width/1.2, canvas.height/1.1, musicFontSize, fontColors[slide]);
		music.write();
		backgroundMusic.setupAudio();
		backgroundMusic.insertSong();	
		this.sound.play();
	}
},
	playNextSong(){
		if(Number(this.sound.currentTime) == this.sound.duration){	
		this.sound.removeChild(this.source);
		this.source.src = this.songs[this.randomSong(0, this.songs.length)];
		this.sound.appendChild(this.source);
		this.sound.load();
	}
	},
}	
const musicButton =  document.getElementsByClassName('music')[0];
musicButton.addEventListener('mousedown', ()=>{
	backgroundMusic.musicSwitch();
});
backgroundMusic.textSwitch();
const check=()=>{
	backgroundMusic.playNextSong();
}
let t = setInterval(check, 50);
let scoreValue = 5;
let numberOfBalls = 1;
const styleNames = ['Classic', 'Camo', 'Crystal'];
const renderMenu =()=>{
let title = new menuText('Speed Paddle' , canvas.width/2, canvas.height/6, fontSizesEnd, fontColors[slide]);
let difficulty = new menuText('Difficulty:', canvas.width/5, canvas.height/3.2, subFontSizesEnd, fontColors[slide]);
let easy = new menuText(' Easy', canvas.width/2.8, canvas.height/3.2, subFontSizesEnd, 'red');
let medium = new menuText(' Medium', canvas.width/1.8, canvas.height/3.2, subFontSizesEnd, fontColors[slide]);
let impossible = new menuText(' Impossible', canvas.width/1.3, canvas.height/3.2, subFontSizesEnd, fontColors[slide]);
let paddleSize = new menuText(' Paddle Size:', canvas.width/5, canvas.height/2.2, subFontSizesEnd, fontColors[slide]);
let small = new menuText(' Small', canvas.width/2.8, canvas.height/2.2, subFontSizesEnd, fontColors[slide]);
let average = new menuText(' Average', canvas.width/1.8, canvas.height/2.2, subFontSizesEnd, 'red');
let giant = new menuText(' Giant', canvas.width/1.3, canvas.height/2.2, subFontSizesEnd, fontColors[slide]);
let scoreLimit = new menuText('Score Limit:',  canvas.width/5, canvas.height/1.7, subFontSizesEnd, fontColors[slide]);
let decreaseScore = new menuText('<',  canvas.width/2.8, canvas.height/1.7, subFontSizesEnd, fontColors[slide]);
let scoreNum = new menuText(scoreValue.toString(),  canvas.width/1.8, canvas.height/1.7, subFontSizesEnd, fontColors[slide]);
let increaseScore = new menuText('>',  canvas.width/1.3, canvas.height/1.7, subFontSizesEnd, fontColors[slide]);
let ballCount = new menuText('Ball Count:',  canvas.width/5, canvas.height/1.4, subFontSizesEnd, fontColors[slide]);
let lessBall = 	new menuText('<',  canvas.width/2.8, canvas.height/1.4, subFontSizesEnd, fontColors[slide]);
let ballNumber = 	 new menuText( numberOfBalls,  canvas.width/1.8, canvas.height/1.4, subFontSizesEnd, fontColors[slide]);
let moreBall = new menuText('>',  canvas.width/1.3, canvas.height/1.4, subFontSizesEnd, fontColors[slide]);
let styleTitle = new menuText('Style:',  canvas.width/5, canvas.height/1.2, subFontSizesEnd, fontColors[slide]);
let styleBack = new menuText('<',  canvas.width/2.8, canvas.height/1.25, subFontSizesEnd, fontColors[slide]);
let styleForward = new menuText('>',  canvas.width/1.3, canvas.height/1.25, subFontSizesEnd, fontColors[slide]);
let startGame = new menuText('Start Game',  canvas.width/1.75, canvas.height/1.07, subFontSizesEnd, fontColors[slide]);
backgroundMusic.textSwitch();
let music = new menuText('Music: ' + musicText, canvas.width/1.2, canvas.height/1.1, musicFontSize, fontColors[slide]);
const menuElements = [title, difficulty, easy, medium, impossible, paddleSize, small, average, giant, scoreLimit, decreaseScore,
scoreNum, increaseScore, ballCount, lessBall, ballNumber, moreBall, styleBack, styleForward, styleTitle, startGame, music
];
	menuElements.forEach(function(element){
			element.write();
	});
}
renderMenu();
const menuPaddles = {
	render(){
		let img = document.createElement('img');	
		img.src = paddleSkins[slide];
		img.addEventListener('load', function(){
				context.drawImage(img, 1, 25, canvas.width/15, canvas.height/1.1);
				context.drawImage(img, canvas.width-(canvas.width/15), 25, canvas.width/15, canvas.height/1.1);
		});	
	},
	skinEx(){
		let ballSkinEx = document.createElement('img');
		ballSkinEx.src = skinBalls[slide];
				ballSkinEx.addEventListener('load', function(){
				context.drawImage(ballSkinEx, canvas.width/1.9, canvas.height/1.3, canvas.width/13, canvas.height/11);
		});	
	},
}
menuPaddles.render();
menuPaddles.skinEx();
const write =(a, b, c)=>{
	a.write();
	b.write();
	c.write();
}
let difficultyLevel = 'easy';
const easyMode =()=>{
	context.clearRect(canvas.width/1.8, canvas.height/4, canvas.width/2.7, canvas.height/10);
	easy =  new menuText(' Easy', canvas.width/2.8, canvas.height/3.2, subFontSizesEnd, 'red');
	medium = new menuText(' Medium', canvas.width/1.8, canvas.height/3.2, subFontSizesEnd, fontColors[slide]);
 	impossible = new menuText(' Impossible', canvas.width/1.3, canvas.height/3.2, subFontSizesEnd, fontColors[slide]);
	write(easy, medium, impossible);
	difficultyLevel = 'easy';
}
const easyButton = document.getElementsByClassName('easy')[0];
easyButton.addEventListener('mousedown', easyMode);

const mediumMode =()=>{
	context.clearRect(canvas.width/1.8, canvas.height/4, canvas.width/2.7, canvas.height/10);
 easy = new menuText(' Easy', canvas.width/2.8, canvas.height/3.2, subFontSizesEnd,  fontColors[slide]);
 medium = new menuText(' Medium', canvas.width/1.8, canvas.height/3.2, subFontSizesEnd, 'red');
 impossible = new menuText(' Impossible', canvas.width/1.3, canvas.height/3.2, subFontSizesEnd, fontColors[slide]);
	write(easy, medium, impossible);
	difficultyLevel = 'medium';
}
const mediumButton = document.getElementsByClassName('medium')[0];
mediumButton.addEventListener('mousedown', mediumMode);
const impossibleMode =()=>{
	context.clearRect(canvas.width/1.8, canvas.height/4, canvas.width/2.7, canvas.height/10);
 easy = new menuText(' Easy', canvas.width/2.8, canvas.height/3.2, subFontSizesEnd,  fontColors[slide]);
 medium = new menuText(' Medium', canvas.width/1.8, canvas.height/3.2, subFontSizesEnd, fontColors[slide]);
 impossible = new menuText(' Impossible', canvas.width/1.3, canvas.height/3.2, subFontSizesEnd, 'red');
	write(easy, medium, impossible);
	difficultyLevel = 'impossible';
}
const impossibleButton = document.getElementsByClassName('impossible')[0];
impossibleButton.addEventListener('mousedown', impossibleMode);
let paddleHeight = 'average';
const smallMode = ()=>{
	context.clearRect(canvas.width/1.8, canvas.height/3, canvas.width/2.7, canvas.height/10);
 small = new menuText(' Small', canvas.width/2.8, canvas.height/2.2, subFontSizesEnd, 'red');
 average = new menuText(' Average', canvas.width/1.8, canvas.height/2.2, subFontSizesEnd, fontColors[slide]);
 giant = new menuText(' Giant', canvas.width/1.3, canvas.height/2.2, subFontSizesEnd, fontColors[slide]);
	write(small, average, giant);
	paddleHeight = 'small';
}
const smallButton = document.getElementsByClassName('small')[0];
smallButton.addEventListener('mousedown', smallMode);
const averageMode = ()=>{
	context.clearRect(canvas.width/1.8, canvas.height/3, canvas.width/2.7, canvas.height/10);
 small = new menuText(' Small', canvas.width/2.8, canvas.height/2.2, subFontSizesEnd, fontColors[slide]);
 average = new menuText(' Average', canvas.width/1.8, canvas.height/2.2, subFontSizesEnd, 'red');
 giant = new menuText(' Giant', canvas.width/1.3, canvas.height/2.2, subFontSizesEnd, fontColors[slide]);
	write(small, average, giant);
	paddleHeight = 'average';
}
const averageButton = document.getElementsByClassName('average')[0];
averageButton.addEventListener('mousedown', averageMode);
const giantMode = ()=>{
	context.clearRect(canvas.width/1.8, canvas.height/3, canvas.width/2.7, canvas.height/10);
 small = new menuText(' Small', canvas.width/2.8, canvas.height/2.2, subFontSizesEnd, fontColors[slide]);
 average = new menuText(' Average', canvas.width/1.8, canvas.height/2.2, subFontSizesEnd, fontColors[slide]);
 giant = new menuText(' Giant', canvas.width/1.3, canvas.height/2.2, subFontSizesEnd, 'red');
	write(small, average, giant);
	paddleHeight = 'giant';
}
const giantButton = document.getElementsByClassName('giant')[0];
giantButton.addEventListener('mousedown', giantMode);
const decreaseScore =()=>{
	scoreValue = scoreValue - 5;
	if(scoreValue < 5){
		scoreValue = 100;
	}
		context.clearRect( canvas.width/2, canvas.height/1.9, canvas.width/6, canvas.height/15);
	 	scoreNum = new menuText(scoreValue.toString(),  canvas.width/1.8, canvas.height/1.7, subFontSizesEnd, fontColors[slide]);
		scoreNum.write();
}
const scoreLess = document.getElementsByClassName('scoreLess')[0];
scoreLess.addEventListener('mousedown', decreaseScore);
const increaseScore =()=>{
	scoreValue = scoreValue + 5;
	if(scoreValue > 100){
		scoreValue = 5;
	}
	context.clearRect( canvas.width/2, canvas.height/1.9, canvas.width/6, canvas.height/15);
	scoreNum = new menuText(scoreValue.toString(),  canvas.width/1.8, canvas.height/1.7, subFontSizesEnd, fontColors[slide]);
	scoreNum.write();
}
const scoreMore = document.getElementsByClassName('scoreMore')[0];
scoreMore.addEventListener('mousedown', increaseScore);
const decreaseBalls =()=>{
	--numberOfBalls;
	if(numberOfBalls < 1){
		numberOfBalls = 5;
	}
	context.clearRect( canvas.width/2, canvas.height/1.5, canvas.width/6, canvas.height/15);
	ballNumber = 	new menuText( numberOfBalls,  canvas.width/1.8, canvas.height/1.4, subFontSizesEnd, fontColors[slide]);
	ballNumber.write();
}
const ballLess = document.getElementsByClassName('ballLess')[0];
ballLess.addEventListener('mousedown', decreaseBalls);
const increaseBalls =()=>{
	++numberOfBalls;
	if(numberOfBalls > 5){
		numberOfBalls =1;
	}
	context.clearRect( canvas.width/2, canvas.height/1.5, canvas.width/6, canvas.height/15);
	ballNumber = 	 new menuText( numberOfBalls,  canvas.width/1.8, canvas.height/1.4, subFontSizesEnd, fontColors[slide]);
	ballNumber.write();
}
const ballMore = document.getElementsByClassName('ballMore')[0];
ballMore.addEventListener('mousedown', increaseBalls);
const changeStyleLeft = () =>{
	--slide;
	if(slide <  0){
		slide = styleNames.length-1;
	}
	context.clearRect(0, 0, canvas.width, canvas.height);
	background.create()
	renderMenu();
	menuPaddles.render();
	menuPaddles.skinEx();
	document.body.style.backgroundColor = bodyColor[slide];
}
const changeLeft = document.getElementsByClassName('changeStyleLeft')[0];
changeLeft.addEventListener('mousedown', changeStyleLeft);
const changeStyleRight =()=>{
	++slide;
	if(slide > styleNames.length-1){
		slide = 0;
	}
	context.clearRect(0, 0, canvas.width, canvas.height);
	background.create()
	menuPaddles.render();
	menuPaddles.skinEx();	
	renderMenu();
	document.body.style.backgroundColor = bodyColor[slide];
}
const changeRight = document.getElementsByClassName('changeStyleRight')[0];
changeRight.addEventListener('mousedown', changeStyleRight);
const bodyColor = ['black', 'silver', 'white'];
document.body.style.backgroundColor = bodyColor[slide];
const pong = () => {		
context.clearRect(0, 0, canvas.width, canvas.height);
const clearButtons =(type)=>{	
	const buttons = document.getElementsByClassName('track');
	for(let i = 0; i < buttons.length; i++){
	buttons[i].style.display = type;
	}	
}
clearButtons('none');
	const gameBackground = {
		render(){
			canvas.style.background = 'url('+ gameBackrounds[slide] + ')';
			canvas.style.backgroundSize =  '100% 100%';
		}
	}
	if(paddleHeight == 'small'){
		paddleHeight = canvas.width/17;
	}else if(paddleHeight == 'average'){
		paddleHeight = canvas.width/8;
	}else if(paddleHeight == 'giant'){
		paddleHeight = canvas.width/5;
	}
		const getScore = (userScore) => {
	let userScoreString = userScore.toString();
	let convertToScore = eval(userScoreString.replace(/,/g, "+"));
	if(convertToScore == undefined){
		return 0;
	}else{
	return convertToScore;
		}
}
	let humanScore = [];
	let cpuScore = [];	
		const scoreboard = {	
	scoreboardColor:  fontColors[slide],
	scoreboardFontSize: canvas.width/15, 
	scoreboardFontStyle:    fontNames[slide],
	scoreboardHumanPos: canvas.width/4, 
	 scoreboardCpuPos: canvas.width/1.5,
		drawScoreboard(event){
	const scoreboardYPos =	this.scoreboardFontSize;
	context.fillStyle = this.scoreboardColor;
	context.font = this.scoreboardFontSize.toString() + 'px  ' +  this.scoreboardFontStyle;
	context.fillText(getScore(humanScore),  this.scoreboardHumanPos, scoreboardYPos+40);		
	context.fillText(getScore(cpuScore),  this.scoreboardCpuPos, scoreboardYPos+40);			
	},
};
		let playerYPos = [];
	const playerYposMobile = (event) =>{
		event.preventDefault();
		let rect = canvas.getBoundingClientRect();	
		playerYPos[0] = (event.changedTouches[0].pageY) - (paddleHeight/2);
}
	const playerYposDesk = (event) =>{
			let rectMobile = canvas.getBoundingClientRect();	
		playerYPos[0] =  Math.round(event.clientY - rectMobile.top) - (paddleHeight/2);
}
		let playerXPos = canvas.width/20;
		canvas.addEventListener('touchmove', playerYposMobile);
		canvas.addEventListener('mousemove', playerYposDesk);	
	
	const playerPaddle = { 
		playerWidth: 25,
		drawPlayer(event){
		let img = document.createElement('img');
		img.src = paddleSkins[slide];
		context.drawImage(img, playerXPos, playerYPos[0], this.playerWidth, paddleHeight);
	}
};
	playerPaddle.drawPlayer();
	
	let ballObjectYPos = [];
	let ballObjectXPos = [];
		const getBallCoordinates = () =>{
			for(let i = 0; i < ballObjects.length; i++){
				ballObjectYPos[i] = ballObjects[i].yPos;
				ballObjectXPos[i] = ballObjects[i].xPos;
		}
}
		let getClosestBall = () => {
	for(let n = 0; n < numberOfBalls; n++){
		  	 closestXBall = ballObjectXPos.filter((value) => value >=  ballObjectXPos[n]);
	if(closestXBall.length == 1){
			return closestXBall[0];
		}
	}
}
		let closestBallIndex = () => {
	return ballObjectXPos.indexOf(getClosestBall());
}
	let computerYPos = canvas.height/2;
	let computerXPos =	canvas.width * 0.94;
		const computerPaddle = {
	computerWidth: 25,
	drawComputer(){
		const img = document.createElement('img');
		img.src =  paddleSkins[slide];
		context.drawImage(img, computerXPos, computerYPos, this.computerWidth, paddleHeight);
	},
	movePaddleUp(){
	if ((computerYPos  + (paddleHeight/2)) < ballObjectYPos[closestBallIndex()] && getClosestBall() > canvas.width/2) {
	if(difficultyLevel == 'easy'){
		computerYPos = computerYPos + 1;
	}else if(difficultyLevel == 'medium'){
		computerYPos = computerYPos + 2;
	}else if(difficultyLevel == 'impossible'){
		computerYPos = computerYPos + 3;	
			}
		}
	},
	movePaddleDown() {
		if ((computerYPos + (paddleHeight/2)) > ballObjectYPos[closestBallIndex()]  && getClosestBall() > canvas.width/2) {
		if(difficultyLevel == 'easy'){
			computerYPos = computerYPos - 1;
		}else if(difficultyLevel == 'medium'){
			computerYPos = computerYPos - 2;
		}else if(difficultyLevel == 'impossible'){
			computerYPos = computerYPos - 3;	
			}
		}
	}
};
		let changeScreen = () => {
clearInterval(t);
context.clearRect(0, 0, canvas.width, canvas.height);
renderMenu();
menuPaddles.render();
menuPaddles.skinEx();
clearButtons('inline');
canvas.style.background = 'url('+ menuBackgrounds[slide] +')';
canvas.style.backgroundSize =  '100% 100%';
canvas.removeEventListener('mousedown', changeScreen);
	}
		const endGameScreen = {
	textColor: fontColors[slide],
	headFont: fontSizesEnd +' '  + fontNames[slide],
	subFont: subFontSizesEnd +' '+ fontNames[slide],
	stopBalls(){
	if(cpuScore.length == scoreValue || humanScore.length == scoreValue){
		for(let i =0; i < ballObjects.length; i++){
		ballObjects[i].ballMotionX = 0;
		ballObjects[i].ballMotionY = 0;
		}
	}
},
	drawScreenBackground(){
	if(cpuScore.length == scoreValue || humanScore.length == scoreValue ){
		context.clearRect(0, 0, canvas.width, canvas.height);
		canvas.style.background = 'url(' + menuBackgrounds[slide] + ')';
	  	canvas.style.backgroundSize =  '100% 100%';
	}
},
	humanScreenText(){
	if(humanScore.length == scoreValue ){
		context.fillStyle = this.textColor;
		context.font = this.headFont;	
		context.fillText('Congratulations, you win!', canvas.width/2, canvas.height/2);
		context.font = this.subFont;
		context.fillText('Click to continue', canvas.width/2.5, canvas.height/1.5);
	} 
},
	cpuScreenText(){
	if(cpuScore.length == scoreValue){
		context.fillStyle = this.textColor;
		context.font = this.headFont;		
		context.fillText('AI has prevailed, you lose.', canvas.width/2, canvas.height/2);
		context.font = this.subFont;
		context.fillText('Click to continue', canvas.width/2, canvas.height/1.5);	
	}
},
	returnMenu(){
	if(cpuScore.length == scoreValue || humanScore.length == scoreValue){	
		ballObjects = []; 
		canvas.addEventListener('mousedown', changeScreen);			
	}
}
};	
	class Balls {
		constructor(xPos, yPos, radius, xVelocity, yVelocity){
			this.xPos = xPos;
			this.yPos = yPos;
			this.radius = radius;
			this.xVelocity = xVelocity;
			this.yVelocity = yVelocity;
			this.direction = -1;
			this.speedBoost = 1.2;
			this.imgX = this.xPos - this.radius;
			this.imgY = this.yPos - this.radius;
	}
}
const img = document.createElement('img');
img.src=skinBalls[slide];
Balls.prototype.render = function () {
scoreboard.drawScoreboard();
playerPaddle.drawPlayer();
computerPaddle.drawComputer();
  context.save();
  context.beginPath();
  context.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2);
  context.clip();
  context.drawImage(img, this.imgX, this.imgY, this.radius * 2, this.radius * 2);
};
Balls.prototype.motion = function(){
	this.xPos = this.xPos + this.xVelocity;
	this.yPos = this.yPos + this.yVelocity;
	this.imgX = this.imgX + this.xVelocity;
	this.imgY = this.imgY + this.yVelocity;
	};
Balls.prototype.restore = function(){
	context.restore();
}
Balls.prototype.reset = function () {
		if(this.xPos + this.radius >= canvas.width || this.xPos - this.radius <= 0){
			this.xPos = canvas.width/2;
			this.imgX = canvas.width/2 - this.radius;
			this.xVelocity = this.xVelocity * this.direction;	
	}		
};
Balls.prototype.humanScore = function (){
		if(this.xPos + this.radius >= canvas.width){
			humanScore.push(1);
	}
};
Balls.prototype.computerScore = function () {
	if(this.xPos - this.radius <= 0){
		cpuScore.push(1);	
	}
};
	const randomNum = (min, max)=>{
		let number = Math.floor(Math.random() * (max - min) + min);
		if(number === 0){
			number = 1;
		}
		return number;
	}
	let ballObjects = [];	
	let ball = { 
			xPos: [],
			determineXPos(){
				let j = 9;
				for(let i = 0; i < numberOfBalls; i++){
					let x = canvas.width * ( j/10);
					xPos.push(x);
					--j;
				}
			},
			createBallObjects(){
				for(let i = 0; i < numberOfBalls; i++){
					let radius = randomNum(canvas.width/50, canvas.width/30);
					let velocityX = randomNum(-3, 3);
					let velocityY = randomNum(-2, 2);
					let yPos = randomNum(0 + radius, canvas.height - radius);
					let object = new Balls(canvas.width/2, yPos, radius, velocityX, velocityY);				
			if(ballObjects.length == numberOfBalls){
							return;
				}
					ballObjects.push(object);
			}
		}
	}	
	const reduceSpeed =()=>{
		ballObjects.forEach(function(circle){
			while(circle.xVelocity > 3){
				circle.xVelocity = 2;
			}
			while(circle.xVelocity  < -3){
				circle.xVelocity = -2;
			}
		});
	}
	const collision = ()=>{
		ballObjects.forEach(function(circle, index){
			 if(circle.xPos <= playerXPos + 25 + circle.radius){
				 if(circle.yPos >= playerYPos[0] && circle.yPos <= playerYPos[0] + paddleHeight/4){
				 	 circle.xPos = circle.xPos + 3;
					 circle.xVelocity = circle.xVelocity * 1.2;
					 bounceBall(circle, Math.PI);
				 } else if(circle.yPos > playerYPos[0] + paddleHeight/4 && circle.yPos <= playerYPos[0] + paddleHeight * (3/4)){
					circle.xPos = circle.xPos + 3;
					 bounceBall(circle, Math.PI);
			} else if(circle.yPos > playerYPos[0] + paddleHeight * 3/4 && circle.yPos <= playerYPos[0] + paddleHeight * 1.2){
					 circle.xPos = circle.xPos + 3;
					 circle.xVelocity = circle.xVelocity * 1.2;
					 bounceBall(circle, Math.PI);
			}
		}
			if(circle.xPos >= computerXPos - circle.radius && circle.yPos >= computerYPos && circle.yPos <= computerYPos + paddleHeight * 1.2){
				circle.xPos = circle.xPos - 3;
				circle.imgX = circle.imgX - 3;
				bounceBall(circle, 0);
		}
			if(circle.yPos - circle.radius < 0){
				bounceBall(circle, Math.PI/2);
				circle.yPos = circle.radius;
				ballObjects.forEach(function(circle){
				circle.imgX = 	circle.xPos - circle.radius;
				circle.imgY = circle.yPos - circle.radius;
				ballObjects.forEach(function(circle){
				circle.imgX = 	circle.xPos - circle.radius;
				circle.imgY = circle.yPos - circle.radius;	
		});
		});	
			} else if(circle.yPos + circle.radius > canvas.height){
				bounceBall(circle, -Math.PI / 2);
				circle.yPos = canvas.height - circle.radius
				ballObjects.forEach(function(circle){
				circle.imgX = 	circle.xPos - circle.radius;
				circle.imgY = circle.yPos - circle.radius;	
				ballObjects.forEach(function(circle){
				circle.imgX = 	circle.xPos - circle.radius;
				circle.imgY = circle.yPos - circle.radius;	
				});
		});
			}
		ballObjects.forEach(function(other_circle, other_index){
			if(index == other_index){
				return;
			}
			let intersection = circle.radius + other_circle.radius - ballToBallDistance(circle, other_circle);
			if(intersection > 0){
				let angle = ballToBallAngle(circle, other_circle);
				let normal = calcNormalFromAngle(angle);
				bounceBall(circle, angle);
				bounceBall(other_circle, angle + Math.PI);
				
				circle.xPos -= normal[0] * intersection/2;
				circle.yPos -= normal[1] * intersection/2;
				
				other_circle.xPos += normal[0] * intersection/2;
				other_circle.yPos += normal[1] * intersection/2;
				ballObjects.forEach(function(circle){
				circle.imgX = 	circle.xPos - circle.radius;
				circle.imgY = circle.yPos - circle.radius;	
		});
			}
		});
		});
	}
	const bounceBall =(ball, angle)=>{
		let normal = calcNormalFromAngle(angle);
		let velocity = [ball.xVelocity, ball.yVelocity];
		let ul = dotproduct(velocity, normal) / dotproduct(normal, normal);
		let u = [
			normal[0] * ul,
			normal[1] * ul
			];
		let w = [
			velocity[0] - u[0],
			velocity[1] - u[1]
			];
		let new_velocity = [
			w[0] - u[0],
			w[1] - u[1]
			];
		ball.xVelocity = new_velocity[0];
		ball.yVelocity = new_velocity[1];
		
		ballObjects.forEach(function(circle){
		circle.imgX = 	circle.xPos - circle.radius;
		circle.imgY = circle.yPos - circle.radius;	
		});
	}
	const dotproduct = (a, b)=> {
	return a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n)
}

const ballToBallDistance =(ball1, ball2)=> {
	return Math.sqrt((Math.pow(ball2.xPos - ball1.xPos, 2) + Math.pow(ball2.yPos - ball1.yPos, 2)));
}

const ballToBallAngle =(ball1, ball2)=> {
	return Math.atan2(ball2.yPos - ball1.yPos, ball2.xPos - ball1.xPos)
}
const calcNormalFromAngle =(angle)=> {
	return [
		Math.cos(angle),
		Math.sin(angle)
	];
}
let animateBalls = () =>{
	context.clearRect(0, 0, canvas.width, canvas.height);
	ballObjects.forEach(function(ball){
		ball.render();
		ball.motion();
		ball.restore();
		ball.humanScore();
		ball.computerScore();
		ball.reset();
	});
	}
		const createBackground =()=>{
	gameBackground.render();
}
		const createScoreboard =()=>{
	scoreboard.drawScoreboard();
}
		const createComputerPaddle =()=>{
	computerPaddle.movePaddleUp();
	computerPaddle.movePaddleDown();
}
		const createBalls =()=>{
	animateBalls();
	getBallCoordinates();
	ball.createBallObjects();
	collision();
	reduceSpeed();
}
		const createEndGame =()=>{
	endGameScreen.stopBalls();
	endGameScreen.drawScreenBackground();
	endGameScreen.humanScreenText();
	endGameScreen.cpuScreenText();
	endGameScreen.returnMenu();
}
		const animatePong =  () => {
	createBackground();
	createScoreboard();
	 createComputerPaddle();
	createBalls();
	createEndGame();		

}
	const speed = 200;
	let t = setInterval(animatePong, 600/speed);		
}
const startGameButton = document.getElementsByClassName('startGame')[0];
startGameButton.addEventListener('mousedown', pong);
}
/*
► Music Credit: DJ Quads
Track Name: "EDIT TRACK NAME"
Music by: Dj Quads @ https://soundcloud.com/aka-dj-quads
Official YouTube Channel HERE: https://www.youtube.com/channel/UCusFqutyfTWRqGhC8kHA5uw 
SoundCloud HERE: https://soundcloud.com/aka-dj-quads
Twitter HERE: https://twitter.com/DjQuads
Spotify HERE: https://open.spotify.com/artist/2VZrdImbvB03VWApYtBRr3
Instagram HERE: https://www.instagram.com/djquads

► Music Credit: LAKEY INSPIRED
Track Name: "EDIT TRACK NAME"
Music By: LAKEY INSPIRED @ https://soundcloud.com/lakeyinspired
Official "LAKEY INSPIRED" YouTube Channel HERE: 
https://www.youtube.com/channel/UCOmy8wuTpC95lefU5d1dt2Q
License for commercial use: Creative Commons Attribution 3.0 Unported "Share Alike" (CC BY-SA 3.0) 
Full License HERE - https://creativecommons.org/licenses/by-sa/3.0/legalcode
Music promoted by NCM @ https://www.youtubetomp3musicdownload.com/


► Music Credit: LAKEY INSPIRED
Track Name: "EDIT TRACK NAME"
Music By: LAKEY INSPIRED @ https://soundcloud.com/lakeyinspired
Official "LAKEY INSPIRED" YouTube Channel HERE: 
https://www.youtube.com/channel/UCOmy8wuTpC95lefU5d1dt2Q
License for commercial use: Creative Commons Attribution 3.0 Unported "Share Alike" (CC BY-SA 3.0) 
Full License HERE - https://creativecommons.org/licenses/by-sa/3.0/legalcode
Music promoted by NCM @ https://www.youtubetomp3musicdownload.com/

► Music Credit: LAKEY INSPIRED
Track Name: "EDIT TRACK NAME"
Music By: LAKEY INSPIRED @ https://soundcloud.com/lakeyinspired
Official "LAKEY INSPIRED" YouTube Channel HERE: 
https://www.youtube.com/channel/UCOmy8wuTpC95lefU5d1dt2Q
License for commercial use: Creative Commons Attribution 3.0 Unported "Share Alike" (CC BY-SA 3.0) 
Full License HERE - https://creativecommons.org/licenses/by-sa/3.0/legalcode
Music promoted by NCM @ https://www.youtubetomp3musicdownload.com/

► Music Credit: LAKEY INSPIRED
Track Name: "EDIT TRACK NAME"
Music By: LAKEY INSPIRED @ https://soundcloud.com/lakeyinspired
Official "LAKEY INSPIRED" YouTube Channel HERE: 

https://www.youtube.com/channel/UCOmy8wuTpC95lefU5d1dt2Q
License for commercial use: Creative Commons Attribution 3.0 Unported "Share Alike" (CC BY-SA 3.0) 
Full License HERE - https://creativecommons.org/licenses/by-sa/3.0/legalcode
Music promoted by NCM @ https://www.youtubetomp3musicdownload.com/
*/