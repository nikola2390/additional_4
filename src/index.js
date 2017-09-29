module.exports = function multiply(first, second) {
  let arr1 = first.split('');
	let arr2 = second.split('');
	let pr = [];
	let prLength = arr1.length + arr2.length;

	for (let i = 0; i < prLength ; i++ ){
		pr[i] = 0;
	}

	for (let i = 0; i < arr2.length; i++){
		for (let j = 0; j < arr1.length; j++){
			pr[i + j + 1] += arr1[j] * arr2[i];
		}
	}

	for ( let i = prLength-1; i > 0 ; i-- ){
		if (pr[i] >= 10){
			pr[i-1] += Math.floor(pr[i]/10);
			pr[i] = pr[i] % 10;
		}
	}

	if (pr[0] === 0) {
		delete pr[0];
	}
	return pr.join('');
}
