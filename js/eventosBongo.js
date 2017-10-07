$(document).ready(function(){
	$('#botao-voltar').mouseover(function(){
		$("#botao-voltar").attr("style", "fill:#e89d2e;");
	})
	.mouseleave(function() {
		$("#botao-voltar").attr("style", "fill:#FFDA44");
	});	

	$('.bongo').click(function(){
		$(this).attr("fill", "#a5874d");
		var id = $(this).attr('id');
		IniciarAudio(id);
		setTimeout(function(){ 
			$("#" + id).attr("fill", "#C7B299");
		}, 100);  
	})

	$(document).keydown(function(e){
		if(e.wich == 65 || e.keyCode == 65){
			$("#bongoEsquerda").attr("fill", "#a5874d");
			IniciarAudio('bongoEsquerda');
		}

		if(e.wich == 70 || e.keyCode == 70){
			$("#bongoDireita").attr("fill", "#a5874d");
			IniciarAudio('bongoDireita');
		}
	}).keyup(function(e){
		if(e.wich == 65 || e.keyCode == 65){
			$("#bongoEsquerda").attr('fill', '#C7B299');
		}
		if(e.wich == 70 || e.keyCode == 70){
			$("#bongoDireita").attr("fill", "#C7B299");
		}
	})
})


function IniciarAudio(valor){
	var audio1 = new Audio();
		audio1.src = escolherSom(valor);
		audio1.play();
}

function escolherSom(valor){
	switch(valor) {
		case 'bongoEsquerda': return "MP3/piano/notas/c1.mp3"; break;
		case 'bongoDireita': return "MP3/piano/notas/d1.mp3"; break;
		default: break;
	}
}
