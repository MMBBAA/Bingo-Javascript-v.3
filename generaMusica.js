  document.addEventListener('keydown', teclado, false);
  
	let reproducir = false;
	let musica = new Audio("musica.mp3");

		  //arranca la música en bucle
		  musica.addEventListener('ended', function() {
		  	this.currentTime=0.60;
		  	this.play();
		  }, false);

function resumeAudio () {
	if (!reproducir) {
		reproducir = true;
		musica.play();
	}
}


function pauseAudio () {
	if (reproducir) {
		reproducir = false;
		musica.pause();
	}
}

	function teclado(objeto){
       		var tecla = objeto.which;
       		var num;

   switch (tecla){

   	case 81:
   	sonidoParapeto();
   	break;
   	case 32:
   	disparo();
        //disparo();
        break;
        case 67://c usado para probar si funciona
       // contador();	
        break;
        case 77: //m
        resumeAudio();
        break;
      case 78: //n
      pauseAudio();
      break;
      default :alert("m:activar música n:desactivar música");
  }
}