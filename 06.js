// Crie uma função que verifique se uma variável é true ou false
function trueOrFalse(data) {
	if (data) {
		return true;
	} else {
		return false;
	}
}

console.log(trueOrFalse(false));
console.log(trueOrFalse(0));
console.log(trueOrFalse(""));

console.log(trueOrFalse(true));
console.log(trueOrFalse("blabla"));
console.log(trueOrFalse(10));
