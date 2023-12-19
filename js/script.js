const txtElement = [ 'Web Developer', 'Front end', 'Back end'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector(".tulisan").textElement = words;



	setTimeout(ngetik, 500);
})();
 
 function bigImg(x) {
  x.style.height = "400px";
  x.style.width = "400px";
}

function normalImg(x) {
  x.style.height = "250px";
  x.style.width = "250px";
}


		