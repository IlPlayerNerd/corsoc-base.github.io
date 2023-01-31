var inputText;
var resultText;
function onLoad(){
	inputText = document.getElementById("inp");
	resultText = document.getElementById("risultato"); 
	
	inputText.addEventListener("keyup", onInputChange);
	console.log("dsadas");
}

function onInputChange(){
	console.log(inputText.value);
	try{
		resultText.innerHTML = eval(inputText.value);
		
		if(resultText.innerHTML == "NaN" || resultText.innerHTML == "Infinity"|| resultText.innerHTML == "undefined") resultText.innerHTML = "";
	}
	catch {
		resultText.innerHTML = "";
	}
}