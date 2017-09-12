$(document).ready(function(){

//bongo da esquerda
$(document).keydown(function(e){
	if(e.wich == 65 || e.keyCode == 65){
		$("#bangoEsquerda").attr("fill", "#a5874d");
		var audio1 = new Audio();
		audio1.src = "MP3/som2.wav";
		audio1.play();
	}
})

$(document).keyup(function(e){
	if(e.wich == 65 || e.keyCode == 65){
		$("#bangoEsquerda").attr("fill", "#C7B299");
	}
})

$('#bangoEsquerda').click(function(){
	$("#bangoEsquerda").attr("fill", "#a5874d");
	var audio1 = new Audio();
	audio1.src = "MP3/som2.wav";
	audio1.play();
	setTimeout(function(){ 
		$("#bangoEsquerda").attr("fill", "#C7B299");
	}, 100);  })

//bongo da direita
$(document).keydown(function(e){
	if(e.wich == 70 || e.keyCode == 70){
		$("#bangoDireita").attr("fill", "#a5874d");
		var audio1 = new Audio();
		audio1.src = "MP3/som1.wav";
		audio1.play();
	}
})

$(document).keyup(function(e){
	if(e.wich == 70 || e.keyCode == 70){
		$("#bangoDireita").attr("fill", "#C7B299");
	}
})

$('#bangoDireita').click(function(){
	$("#bangoDireita").attr("fill", "#a5874d");
	var audio1 = new Audio();
	audio1.src = "MP3/som1.wav";
	audio1.play();
	setTimeout(function(){ 
		$("#bangoDireita").attr("fill", "#C7B299");
	}, 100);  })


})
