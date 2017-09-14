$(document).ready(function(){
	var audioFundo1 = new Audio();
	audioFundo1.src = "MP3/piano/base/Base1-Jazz.mp3"
//EVENTOS BOTÃO
//Botão Voltar
$('#botao-voltar').mouseover(function(){
	$("#botao-voltar").attr("style", "fill:#e89d2e;");
})
.mouseleave(function() {
	$("#botao-voltar").attr("style", "fill:#FFDA44");
});	

//Botão Play Music
$('#botao-play').mouseover(function(){
	$("#botao-play").attr("style", "fill:#e89d2e;");
})
.mouseleave(function() {
	$("#botao-play").attr("style", "fill:#FFDA44");
})
.click(function() {

	audioFundo1.play();
});	

//Botão Pause Music
$('#botao-pause').mouseover(function(){
	$("#botao-pause").attr("style", "fill:#e89d2e;");
})
.mouseleave(function() {
	$("#botao-pause").attr("style", "fill:#FFDA44");
})
.click(function() {
	audioFundo1.pause();
});	

//Botão Aumentar Volume
$('#aumentar-volume').mouseover(function(){
	$("#aumentar-volume").attr("style", "fill:#e89d2e;");
})
.mouseleave(function() {
	$("#aumentar-volume").attr("style", "fill:#FFDA44");
})
.click(function() {
    if( audioFundo1.volume < 1) {
    	audioFundo1.volume += 0.1;
    }
});	

//Botão Diminuir Volume
$('#diminuir-volume').mouseover(function(){
	$("#diminuir-volume").attr("style", "fill:#e89d2e;");
})
.mouseleave(function() {
	$("#diminuir-volume").attr("style", "fill:#FFDA44");
})
.click(function() {
    if( audioFundo1.volume > 0)  audioFundo1.volume -= 0.1;
});	

//Botão Proxima Música
$('#proxima-musica').mouseover(function(){
	$("#proxima-musica").attr("style", "fill:#e89d2e;");
})
.mouseleave(function() {
	$("#proxima-musica").attr("style", "fill:#FFDA44");
});	
//EVENTO PARA QUANDO CLICAR
$(document).keydown(function(e){

// Tecla Branca 1 - C -> Letra Q
if(e.wich == 81 || e.keyCode == 81){
	$("#teclaBranca1").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/c1.mp3";
	audio1.play();
}

// Tecla Branca 2 - D -> Letra W
if(e.wich == 87 || e.keyCode == 87){
	$("#teclaBranca2").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/d1.mp3";
	audio1.play();
}

// Tecla Branca 3 - E -> Letra E
if(e.wich == 69 || e.keyCode == 69){
	$("#teclaBranca3").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/e1.mp3";
	audio1.play();
}

// Tecla Branca 4 - F -> Letra R
if(e.wich == 82 || e.keyCode == 82){
	$("#teclaBranca4").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/f1.mp3";
	audio1.play();
}

// Tecla Branca 5 - G -> Letra T
if(e.wich == 84 || e.keyCode == 84){
	$("#teclaBranca5").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/g1.mp3";
	audio1.play(); 
}

// Tecla Branca 6 - A -> Letra Y
if(e.wich == 89 || e.keyCode == 89){
	$("#teclaBranca6").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/a1.mp3";
	audio1.play(); 
}

// Tecla Branca 7 - B -> Letra U
if(e.wich == 85 || e.keyCode == 85){
	$("#teclaBranca7").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/b1.mp3";
	audio1.play(); 
}

// Tecla Branca 8 - C OITAVADA -> Letra Z
if(e.wich == 90 || e.keyCode == 90){
	$("#teclaBranca8").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/C-oitavada.wav";
	audio1.play();
}

// Tecla Branca 9 - D OITAVADA -> Letra X
if(e.wich == 88 || e.keyCode == 88){
	$("#teclaBranca9").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/D-oitavada.wav";
	audio1.play(); 
}

// Tecla Branca 10 - E OITAVADA -> Letra C
if(e.wich == 67 || e.keyCode == 67){
	$("#teclaBranca10").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/E-oitavada.wav";
	audio1.play(); 
}

// Tecla Branca 11 - F OITAVADA -> Letra V
if(e.wich == 86 || e.keyCode == 86){
	$("#teclaBranca11").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/F-oitavada.wav";
	audio1.play(); 
}

// Tecla Branca 12 - G OITAVADA -> Letra B
if(e.wich == 66 || e.keyCode == 66){
	$("#teclaBranca12").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/G-oitavada.wav";
	audio1.play(); //falta arrumar
}

// Tecla Branca 13 - A OITAVADA -> Letra N
if(e.wich == 78 || e.keyCode == 78){
	$("#teclaBranca13").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/A-oitavada.wav";
	audio1.play(); 
}

// Tecla Branca 14 - B OITAVADA -> Letra M
if(e.wich == 77 || e.keyCode == 77){
	$("#teclaBranca14").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/B-oitavada.wav";
	audio1.play(); 
}

// Tecla Preta 1 - C# -> Letra 2
if(e.wich == 50 || e.keyCode == 50){
	$("#teclaPreta1").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/c1s.mp3";
	audio1.play();
}

//Tecla Preta 2 - D# -> Letra 3
if(e.wich == 51 || e.keyCode == 51){
	$("#teclaPreta2").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/d1s.mp3";
	audio1.play();
}

//Tecla Preta 3 - F# -> Letra 5
if(e.wich == 53 || e.keyCode == 53){
	$("#teclaPreta3").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/f1s.mp3";
	audio1.play();
}

//Tecla Preta 4 - G# -> Letra 6
if(e.wich == 54 || e.keyCode == 54){
	$("#teclaPreta4").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/g1s.mp3";
	audio1.play(); 
}

//Tecla Preta 5 - A# -> Letra 7
if(e.wich == 55 || e.keyCode == 55){
	$("#teclaPreta5").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/a1s.mp3";
	audio1.play(); 
}

//Tecla Preta 6 - C# Oitavada -> Letra S
if(e.wich == 83 || e.keyCode == 83){
	$("#teclaPreta6").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/Cs-oitavada.wav";
	audio1.play(); 
}

//Tecla Preta 7 - D# Oitavada -> Letra D
if(e.wich == 68 || e.keyCode == 68){
	$("#teclaPreta7").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/Ds-oitavada.wav";
	audio1.play(); 
}

//Tecla Preta 8 - F# Oitavada -> Letra G
if(e.wich == 71 || e.keyCode == 71){
	$("#teclaPreta8").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/Fs-oitavada.wav";
	audio1.play(); 
}

//Tecla Preta 9 - G# Oitavada -> Letra H
if(e.wich == 72 || e.keyCode == 72){
	$("#teclaPreta9").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/Gs-oitavada.wav";
	audio1.play(); 
}

//Tecla Preta 10 - A# Oitavada -> Letra J
if(e.wich == 74 || e.keyCode == 74){
	$("#teclaPreta10").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/As-oitavada.wav";
	audio1.play(); 
}

})

//EVENTOS PARA QUANDO DEIXAR DE DIGITAR
$(document).keyup(function(e){

// Tecla Branca 1 - C -> Letra Q
if(e.wich == 81 || e.keyCode == 81){
	$("#teclaBranca1").attr("fill", "#FFFFFF");
}

// Tecla Branca 2 - D -> Letra W
if(e.wich == 87 || e.keyCode == 87){
	$("#teclaBranca2").attr("fill", "#FFFFFF");
}

// Tecla Branca 3 - E -> Letra E
if(e.wich == 69 || e.keyCode == 69){
	$("#teclaBranca3").attr("fill", "#FFFFFF");
}

// Tecla Branca 4 - F -> Letra R
if(e.wich == 82 || e.keyCode == 82){
	$("#teclaBranca4").attr("fill", "#FFFFFF");
}

// Tecla Branca 5 - G -> Letra T
if(e.wich == 84 || e.keyCode == 84){
	$("#teclaBranca5").attr("fill", "#FFFFFF"); 
}

// Tecla Branca 6 - A -> Letra Y
if(e.wich == 89 || e.keyCode == 89){
	$("#teclaBranca6").attr("fill", "#FFFFFF"); 
}

// Tecla Branca 7 - B -> Letra U
if(e.wich == 85 || e.keyCode == 85){
	$("#teclaBranca7").attr("fill", "#FFFFFF"); 
}

// Tecla Branca 8 - C OITAVADA -> Letra Z
if(e.wich == 90 || e.keyCode == 90){
	$("#teclaBranca8").attr("fill", "#FFFFFF"); 
}

// Tecla Branca 9 - D OITAVADA -> Letra X
if(e.wich == 88 || e.keyCode == 88){
	$("#teclaBranca9").attr("fill", "#FFFFFF"); 
}

// Tecla Branca 10 - E OITAVADA -> Letra C
if(e.wich == 67 || e.keyCode == 67){
	$("#teclaBranca10").attr("fill", "#FFFFFF"); 
}

// Tecla Branca 11 - F OITAVADA -> Letra V
if(e.wich == 86 || e.keyCode == 86){
	$("#teclaBranca11").attr("fill", "#FFFFFF"); 
} 

// Tecla Branca 12 - G OITAVADA -> Letra B
if(e.wich == 66 || e.keyCode == 66){
	$("#teclaBranca12").attr("fill", "#FFFFFF"); 
}

// Tecla Branca 13 - A OITAVADA -> Letra N
if(e.wich == 78 || e.keyCode == 78){
	$("#teclaBranca13").attr("fill", "#FFFFFF"); 
}

// Tecla Branca 14 - B OITAVADA -> Letra M
if(e.wich == 77 || e.keyCode == 77){
	$("#teclaBranca14").attr("fill", "#FFFFFF"); 
}

// Tecla Preta 1 - C# -> Letra 2
if(e.wich == 50 || e.keyCode == 50){
	$("#teclaPreta1").attr("fill", "#000000");
}

// Tecla Preta 2 - D# -> Letra 3
if(e.wich == 51 || e.keyCode == 51){
	$("#teclaPreta2").attr("fill", "#000000");
}

// Tecla Preta 3 - F# -> Letra 5
if(e.wich == 53 || e.keyCode == 53){
	$("#teclaPreta3").attr("fill", "#000000");
}

// Tecla Preta 4 - G# -> Letra 6
if(e.wich == 54 || e.keyCode == 54){
	$("#teclaPreta4").attr("fill", "#000000"); 
}

// Tecla Preta 5 - A# -> Letra 7
if(e.wich == 55 || e.keyCode == 55){
	$("#teclaPreta5").attr("fill", "#000000"); 
}

// Tecla Preta 6 - C# OITAVADA -> Letra S
if(e.wich == 83 || e.keyCode == 83){
	$("#teclaPreta6").attr("fill", "#000000"); 
}

// Tecla Preta 7 - D# OITAVADA -> Letra D
if(e.wich == 68 || e.keyCode == 68){
	$("#teclaPreta7").attr("fill", "#000000"); 
}

// Tecla Preta 8 - F# OITAVADA -> Letra G
if(e.wich == 71 || e.keyCode == 71){
	$("#teclaPreta8").attr("fill", "#000000"); 
}

// Tecla Preta 9 - G# OITAVADA -> Letra H
if(e.wich == 72 || e.keyCode == 72){
	$("#teclaPreta9").attr("fill", "#000000"); 
}

// Tecla Preta 10 - A# OITAVADA -> Letra J
if(e.wich == 74 || e.keyCode == 74){
	$("#teclaPreta10").attr("fill", "#000000"); 
}
})


//EVENTOS PARA QUANDO CLICAR COM O MOUSE
// Tecla Branca 1 - C
$('#teclaBranca1').click(function(){
	$("#teclaBranca1").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/c1.mp3";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaBranca1").attr("fill", "#FFFFFF");
	}, 100);  })

// Tecla Branca 2 - D
$('#teclaBranca2').click(function(){
	$("#teclaBranca2").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/d1.mp3";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaBranca2").attr("fill", "#FFFFFF");
	}, 100);  })

// Tecla Branca 3 - E
$('#teclaBranca3').click(function(){
	$("#teclaBranca3").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/e1.mp3";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaBranca3").attr("fill", "#FFFFFF");
	}, 100);  })

// Tecla Branca 4 - F
$('#teclaBranca4').click(function(){
	$("#teclaBranca4").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/f1.mp3";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaBranca4").attr("fill", "#FFFFFF");
	}, 100);  })

// Tecla Branca 5 - G
$('#teclaBranca5').click(function(){
	$("#teclaBranca5").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/g1.mp3";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaBranca5").attr("fill", "#FFFFFF");
	}, 100);  })

// Tecla Branca 6 - A
$('#teclaBranca6').click(function(){
	$("#teclaBranca6").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/a1.mp3";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaBranca6").attr("fill", "#FFFFFF");
	}, 100);  })

// Tecla Branca 7 - B
$('#teclaBranca7').click(function(){
	$("#teclaBranca7").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/b1.mp3";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaBranca7").attr("fill", "#FFFFFF");
	}, 100);  })

// Tecla Branca 8 - C OITAVADA
$('#teclaBranca8').click(function(){
	$("#teclaBranca8").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/C-oitavada.wav";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaBranca8").attr("fill", "#FFFFFF");
	}, 100);  })

// Tecla Branca 9 - D OITAVADA
$('#teclaBranca9').click(function(){
	$("#teclaBranca9").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/D-oitavada.wav";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaBranca9").attr("fill", "#FFFFFF");
	}, 100);  })

// Tecla Branca 10 - E OITAVADA
$('#teclaBranca10').click(function(){
	$("#teclaBranca10").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/E-oitavada.wav";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaBranca10").attr("fill", "#FFFFFF");
	}, 100);  })

// Tecla Branca 11 - F OITAVADA
$('#teclaBranca11').click(function(){
	$("#teclaBranca11").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/F-oitavada.wav";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaBranca11").attr("fill", "#FFFFFF");
	}, 100);  })

// Tecla Branca 12 - G OITAVADA
$('#teclaBranca12').click(function(){
	$("#teclaBranca12").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/G-oitavada.wav";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaBranca12").attr("fill", "#FFFFFF");
	}, 100);  })

// Tecla Branca 13 - A OITAVADA
$('#teclaBranca13').click(function(){
	$("#teclaBranca13").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/A-oitavada.wav";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaBranca13").attr("fill", "#FFFFFF");
	}, 100);  })

// Tecla Branca 14 - B OITAVADA
$('#teclaBranca14').click(function(){
	$("#teclaBranca14").attr("fill", "#c4c0c0");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/B-oitavada.wav";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaBranca14").attr("fill", "#FFFFFF");
	}, 100);  })

// Tecla Preta 1 - C#
$('#teclaPreta1').click(function(){
	$("#teclaPreta1").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/c1s.mp3";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaPreta1").attr("fill", "#000000");
	}, 100);  })

// Tecla Preta 2 - D#
$('#teclaPreta2').click(function(){
	$("#teclaPreta2").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/d1s.mp3";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaPreta2").attr("fill", "#000000");
	}, 100);  })

// Tecla Preta 3 - F#
$('#teclaPreta3').click(function(){
	$("#teclaPreta3").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/f1s.mp3";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaPreta3").attr("fill", "#000000");
	}, 100);  })

// Tecla Preta 4 - G#
$('#teclaPreta4').click(function(){
	$("#teclaPreta4").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/g1s.mp3";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaPreta4").attr("fill", "#000000");
	}, 100);  })

// Tecla Preta 5 - A#
$('#teclaPreta5').click(function(){
	$("#teclaPreta5").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/a1s.mp3";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaPreta5").attr("fill", "#000000");
	}, 100);  })

// Tecla Preta 6 - C# OITAVADA
$('#teclaPreta6').click(function(){
	$("#teclaPreta6").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/Cs-oitavada.wav";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaPreta6").attr("fill", "#000000");
	}, 100);  })

// Tecla Preta 7 - D# OITAVADA
$('#teclaPreta7').click(function(){
	$("#teclaPreta7").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/Ds-oitavada.wav";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaPreta7").attr("fill", "#000000");
	}, 100);  })

// Tecla Preta 8 - F# OITAVADA
$('#teclaPreta8').click(function(){
	$("#teclaPreta8").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/Fs-oitavada.wav";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaPreta8").attr("fill", "#000000");
	}, 100);  })

// Tecla Preta 9 - G# OITAVADA
$('#teclaPreta9').click(function(){
	$("#teclaPreta9").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/Gs-oitavada.wav";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaPreta9").attr("fill", "#000000");
	}, 100);  })

// Tecla Preta 10 - A# OITAVADA
$('#teclaPreta10').click(function(){
	$("#teclaPreta10").attr("fill", "#4f4c4c");
	var audio1 = new Audio();
	audio1.src = "MP3/piano/As-oitavada.wav";
	audio1.play();
	setTimeout(function(){ 
		$("#teclaPreta10").attr("fill", "#000000");
	}, 100);  })
})

