var i = 0;
	var musicas =   [
        { mp3:'MP3/piano/base/jazz.mp3' , ogg:'jazz.ogg' , titulo:'Jazz'},
        { mp3:'MP3/piano/base/bossanova.mp3', ogg:'bossanova.ogg' , titulo:'Bossa Nova'},
        { mp3:'MP3/piano/base/choro.mp3' ,ogg:'choro.ogg' , titulo:'Choro'},
    ]; 

	var audioFundo1 = new Audio();
	audioFundo1.src = musicas[i].mp3;
	audioFundo1.volume = 0.5;
$(document).ready(function(){
	$('.botao-musica').mouseover(event, function() {
		console.log($(this).attr('id'));
    	$(this).find('#botao').attr("style", "fill:#e89d2e");
	}).mouseleave(function() {
		$(this).find('#botao').attr("style", "fill:#FFDA44");
	});	


	$('.botao-musica').click(event, function() {
		let id = $(this).attr('id');
		eventosBotao(id);
	})
})

function eventosBotao(valor){
	switch(valor){
		case 'botao-play': audioFundo1.play(); break;
		case 'botao-pausar': audioFundo1.pause(); break;
		case 'botao-diminuir': if(audioFundo1.volume > 0){
				audioFundo1.volume -= 0.1;	
			}; break;
		case 'botao-aumentar': if(audioFundo1.volume < 1){
    			audioFundo1.volume += 0.1;
    		}; break;
    	case 'botao-proxima': 
    			i++;
				if(i >= musicas.length) i = 0; 
				audioFundo1.src = musicas[i].mp3;
				audioFundo1.play();
				break;
	}
}var i = 0;
	var musicas =   [
        { mp3:'MP3/piano/base/jazz.mp3' , ogg:'jazz.ogg' , titulo:'Jazz'},
        { mp3:'MP3/piano/base/bossanova.mp3', ogg:'bossanova.ogg' , titulo:'Bossa Nova'},
        { mp3:'MP3/piano/base/choro.mp3' ,ogg:'choro.ogg' , titulo:'Choro'},
    ]; 

	var audioFundo1 = new Audio();
	audioFundo1.src = musicas[i].mp3;
	audioFundo1.volume = 0.5;
$(document).ready(function(){
	$('.botao-musica').mouseover(event, function() {
		console.log($(this).attr('id'));
    	$(this).find('#botao').attr("style", "fill:#e89d2e");
	}).mouseleave(function() {
		$(this).find('#botao').attr("style", "fill:#FFDA44");
	});	


	$('.botao-musica').click(event, function() {
		let id = $(this).attr('id');
		eventosBotao(id);
	})
})

function eventosBotao(valor){
	switch(valor){
		case 'botao-play': audioFundo1.play(); break;
		case 'botao-pausar': audioFundo1.pause(); break;
		case 'botao-diminuir': if(audioFundo1.volume > 0){
				audioFundo1.volume -= 0.1;	
			}; break;
		case 'botao-aumentar': if(audioFundo1.volume < 1){
    			audioFundo1.volume += 0.1;
    		}; break;
    	case 'botao-proxima': 
    			i++;
				if(i >= musicas.length) i = 0; 
				audioFundo1.src = musicas[i].mp3;
				audioFundo1.play();
				break;
	}
}