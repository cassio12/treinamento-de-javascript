menes = new Array('./assets/vouCair.jpg', './assets/vemTranquilo.jpg', './assets/souLindo.png')
console.log(menes)

let sortMene = () => {
	let sortear = () => { 
		return Math.random() < Math.random()
	}
	menes.sort(sortear);

	for(x = 0; x < menes.length;x++){
		document.getElementById("meneDeHj").innerHTML = menes[x];
	}
}
