$(document).ready(function(){

	$('.teclaBranca').click(function(){
		var id = $(this).attr('id');
		$(this).find('#tecla').attr("fill", "#c4c0c0");
	
		IniciarAudio(id);	

		setTimeout(function(){ 
			$('.teclaBranca').find('#tecla').attr("fill", "#FFFFFF");
		}, 100);  
	})

	$('.teclaPreta').click(function(){
		var id = $(this).attr('id');
		$(this).find('#tecla').attr("fill", "#4f4c4c");
		
		IniciarAudio(id);	
		
		setTimeout(function(){ 
			$('.teclaPreta').find('#tecla').attr("fill", "#000000");
		}, 100);  		
	})

	$(document).keydown(function(e){
		if(e.wich == 81 || e.keyCode == 81){
			$("#teclaBranca1").find("rect").attr("fill", "#c4c0c0");
			IniciarAudio("teclaBranca1");
		}
		if(e.wich == 87 || e.keyCode == 87){
			$("#teclaBranca2").find("rect").attr("fill", "#c4c0c0");
			IniciarAudio("teclaBranca2");
		}
		if(e.wich == 69 || e.keyCode == 69){
			$("#teclaBranca3").find("rect").attr("fill", "#c4c0c0");
			IniciarAudio("teclaBranca3");
		}
		if(e.wich == 82 || e.keyCode == 82){
			$("#teclaBranca4").find("rect").attr("fill", "#c4c0c0");
			IniciarAudio("teclaBranca4");
		}
		if(e.wich == 84 || e.keyCode == 84){
			$("#teclaBranca5").find("rect").attr("fill", "#c4c0c0");
			IniciarAudio("teclaBranca5"); 
		}
		if(e.wich == 89 || e.keyCode == 89){
			$("#teclaBranca6").find("rect").attr("fill", "#c4c0c0");
			IniciarAudio("teclaBranca6"); 
		}
		if(e.wich == 85 || e.keyCode == 85){
			$("#teclaBranca7").find("rect").attr("fill", "#c4c0c0");
			IniciarAudio("teclaBranca7"); 
		}
		if(e.wich == 90 || e.keyCode == 90){
			$("#teclaBranca8").find("rect").attr("fill", "#c4c0c0");
			IniciarAudio("teclaBranca8"); 
		}
		if(e.wich == 88 || e.keyCode == 88){
			$("#teclaBranca9").find("rect").attr("fill", "#c4c0c0");
			IniciarAudio("teclaBranca9"); 
		}
		if(e.wich == 67 || e.keyCode == 67){
			$("#teclaBranca10").find("rect").attr("fill", "#c4c0c0");
			IniciarAudio("teclaBranca10"); 
		}
		if(e.wich == 86 || e.keyCode == 86){
			$("#teclaBranca11").find("rect").attr("fill", "#c4c0c0");
			IniciarAudio("teclaBranca11"); 
		}
		if(e.wich == 66 || e.keyCode == 66){
			$("#teclaBranca12").find("rect").attr("fill", "#c4c0c0");
			IniciarAudio("teclaBranca12"); 
		}
		if(e.wich == 78 || e.keyCode == 78){
			$("#teclaBranca13").find("rect").attr("fill", "#c4c0c0");
			IniciarAudio("teclaBranca13"); 
		}
		if(e.wich == 77 || e.keyCode == 77){
			$("#teclaBranca14").find("rect").attr("fill", "#c4c0c0");
			IniciarAudio("teclaBranca14"); 
		}
		if(e.wich == 50 || e.keyCode == 50){
			$("#teclaPreta1").find("rect").attr("fill", "#4f4c4c");
			IniciarAudio("teclaPreta1"); 
		}
		if(e.wich == 51 || e.keyCode == 51){
			$("#teclaPreta2").find("rect").attr("fill", "#4f4c4c");
			IniciarAudio("teclaPreta2"); 
		}
		if(e.wich == 53 || e.keyCode == 53){
			$("#teclaPreta3").find("rect").attr("fill", "#4f4c4c");
			IniciarAudio("teclaPreta3"); 
		}
		if(e.wich == 54 || e.keyCode == 54){
			$("#teclaPreta4").find("rect").attr("fill", "#4f4c4c");
			IniciarAudio("teclaPreta4"); 
		}
		if(e.wich == 55 || e.keyCode == 55){
			$("#teclaPreta5").find("rect").attr("fill", "#4f4c4c");
			IniciarAudio("teclaPreta5");  
		}
		if(e.wich == 83 || e.keyCode == 83){
			$("#teclaPreta6").find("rect").attr("fill", "#4f4c4c");
			IniciarAudio("teclaPreta6");  
		}
		if(e.wich == 68 || e.keyCode == 68){
			$("#teclaPreta7").find("rect").attr("fill", "#4f4c4c");
			IniciarAudio("teclaPreta7"); 
		}
		if(e.wich == 71 || e.keyCode == 71){
			$("#teclaPreta8").find("rect").attr("fill", "#4f4c4c");
			IniciarAudio("teclaPreta8"); 		
		}
		if(e.wich == 72 || e.keyCode == 72){
			$("#teclaPreta9").find("rect").attr("fill", "#4f4c4c");
			IniciarAudio("teclaPreta9"); 
		}
		if(e.wich == 74 || e.keyCode == 74){
			$("#teclaPreta10").find("rect").attr("fill", "#4f4c4c");
			IniciarAudio("teclaPreta10"); 
		}
	})

	$(document).keyup(function(e){
		if(e.wich == 81 || e.keyCode == 81) $("#teclaBranca1").find("rect").attr("fill", "#FFFFFF");

		if(e.wich == 87 || e.keyCode == 87) $("#teclaBranca2").find("rect").attr("fill", "#FFFFFF");

		if(e.wich == 69 || e.keyCode == 69) $("#teclaBranca3").find("rect").attr("fill", "#FFFFFF");

		if(e.wich == 82 || e.keyCode == 82) $("#teclaBranca4").find("rect").attr("fill", "#FFFFFF");

		if(e.wich == 84 || e.keyCode == 84) $("#teclaBranca5").find("rect").attr("fill", "#FFFFFF"); 

		if(e.wich == 89 || e.keyCode == 89) $("#teclaBranca6").find("rect").attr("fill", "#FFFFFF"); 

		if(e.wich == 85 || e.keyCode == 85) $("#teclaBranca7").find("rect").attr("fill", "#FFFFFF"); 

		if(e.wich == 90 || e.keyCode == 90) $("#teclaBranca8").find("rect").attr("fill", "#FFFFFF"); 

		if(e.wich == 88 || e.keyCode == 88) $("#teclaBranca9").find("rect").attr("fill", "#FFFFFF"); 

		if(e.wich == 67 || e.keyCode == 67) $("#teclaBranca10").find("rect").attr("fill", "#FFFFFF"); 

		if(e.wich == 86 || e.keyCode == 86) $("#teclaBranca11").find("rect").attr("fill", "#FFFFFF"); 

		if(e.wich == 66 || e.keyCode == 66)	$("#teclaBranca12").find("rect").attr("fill", "#FFFFFF"); 

		if(e.wich == 78 || e.keyCode == 78)	$("#teclaBranca13").find("rect").attr("fill", "#FFFFFF"); 

		if(e.wich == 77 || e.keyCode == 77)	$("#teclaBranca14").find("rect").attr("fill", "#FFFFFF");

		if(e.wich == 50 || e.keyCode == 50)	$("#teclaPreta1").find("rect").attr("fill", "#000000");

		if(e.wich == 51 || e.keyCode == 51)	$("#teclaPreta2").find("rect").attr("fill", "#000000");

		if(e.wich == 53 || e.keyCode == 53)	$("#teclaPreta3").find("rect").attr("fill", "#000000");

		if(e.wich == 54 || e.keyCode == 54)	$("#teclaPreta4").find("rect").attr("fill", "#000000"); 

		if(e.wich == 55 || e.keyCode == 55)	$("#teclaPreta5").find("rect").attr("fill", "#000000"); 

		if(e.wich == 83 || e.keyCode == 83)	$("#teclaPreta6").find("rect").attr("fill", "#000000"); 

		if(e.wich == 68 || e.keyCode == 68)	$("#teclaPreta7").find("rect").attr("fill", "#000000"); 

		if(e.wich == 71 || e.keyCode == 71)	$("#teclaPreta8").find("rect").attr("fill", "#000000"); 

		if(e.wich == 72 || e.keyCode == 72)	$("#teclaPreta9").find("rect").attr("fill", "#000000"); 

		if(e.wich == 74 || e.keyCode == 74)	$("#teclaPreta10").find("rect").attr("fill", "#000000"); 
	})
})

function IniciarAudio(valor){
	var audio1 = new Audio();
		audio1.src = escolherSom(valor);
		audio1.play();
}

function escolherSom(valor){
	switch(valor) {
		case 'teclaBranca1': return "MP3/piano/notas/c1.mp3"; break;
		case 'teclaBranca2': return "MP3/piano/notas/d1.mp3"; break;
		case 'teclaBranca3': return "MP3/piano/notas/e1.mp3"; break;
		case 'teclaBranca4': return "MP3/piano/notas/f1.mp3"; break;
		case 'teclaBranca5': return "MP3/piano/notas/g1.mp3"; break;
		case 'teclaBranca6': return "MP3/piano/notas/a1.mp3"; break;
		case 'teclaBranca7': return "MP3/piano/notas/b1.mp3"; break;
		case 'teclaBranca8': return "MP3/piano/notas/C-oitavada.wav"; break;
		case 'teclaBranca9': return "MP3/piano/notas/D-oitavada.wav"; break;
		case 'teclaBranca10': return "MP3/piano/notas/E-oitavada.wav"; break;
		case 'teclaBranca11': return "MP3/piano/notas/F-oitavada.wav"; break;
		case 'teclaBranca12': return "MP3/piano/notas/G-oitavada.wav"; break;
		case 'teclaBranca13': return "MP3/piano/notas/A-oitavada.wav"; break;
		case 'teclaBranca14': return "MP3/piano/notas/B-oitavada.wav"; break;
		case 'teclaPreta1': return "MP3/piano/notas/c1s.mp3"; break;	
		case 'teclaPreta2': return "MP3/piano/notas/d1s.mp3"; break;	
		case 'teclaPreta3': return "MP3/piano/notas/f1s.mp3"; break;	
		case 'teclaPreta4': return "MP3/piano/notas/g1s.mp3"; break;	
		case 'teclaPreta5': return "MP3/piano/notas/a1s.mp3"; break;	
		case 'teclaPreta6': return "MP3/piano/notas/Cs-oitavada.wav"; break;	
		case 'teclaPreta7': return "MP3/piano/notas/Ds-oitavada.wav"; break;	
		case 'teclaPreta8': return "MP3/piano/notas/Fs-oitavada.wav"; break;	
		case 'teclaPreta9': return "MP3/piano/notas/Gs-oitavada.wav"; break;	
		case 'teclaPreta10': return "MP3/piano/notas/As-oitavada.wav"; break;		
		default: break;
	}
}

