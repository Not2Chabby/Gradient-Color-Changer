document.title = 'Color Machine';

//random Color generator:
window.onload = function() {
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
let colorSpect = [];
let firstDig;
let secondDig;

for (let i = 0; i < hex.length; i++) {
	secondDig = hex[i];
	for (let j = 0; j < hex.length; j++) {
		firstDig = hex[j];
		colorSpect.push(secondDig + firstDig);
	}
}

let angle = 180;
let hexSym = '#';

function check(color) {
	//this.color = color;
	color = color.slice(1, 7);

	let r = colorSpect.indexOf(color.slice(0, 2));
	let g = colorSpect.indexOf(color.slice(2, 4));
	let b = colorSpect.indexOf(color.slice(4, 6));

	if(r === 0 && g < colorSpect.length - 1 && b > 0) {
		b -= 5;
		g += 5;
	} //blue to green
	else if(r < colorSpect.length - 1 && g === colorSpect.length - 1 && b === 0) {
		r += 5;
	} //green to yellow
	else if(r ===  colorSpect.length - 1 && g > 0 && b === 0) {
		g -= 5;
	} //yellow to orange to red
	else if(r <=  colorSpect.length - 1 && g === 0 && b >= 0) {
		r -= 3;
		b += 3;
	}
	
	let combinedColor = '#' + colorSpect[r] + colorSpect[g] + colorSpect[b];
	console
	return combinedColor;
	}

function degCheck(deg){
	deg++;
	return deg;
}

let body = document.getElementsByTagName('body')[0];

check('#0000ff');

let color1 = check('#0000ff');
let color2 = check('#00ff00');
let color3 = check('#0000ff');

let gradGen = () => {
	let colorTemp1 = check(color1);
	let colorTemp2 = check(color2);
	let colorTemp3 = check(color3);
	let degTemp = degCheck(angle);
	color1 = colorTemp1;
	color2 = colorTemp2;
	color3 = colorTemp3;
	angle = degTemp;
	console.log(angle);
	body.style.backgroundImage = `Linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3}`;
	console.log(color1, color2, color3);
}

setInterval(gradGen, 50);
}