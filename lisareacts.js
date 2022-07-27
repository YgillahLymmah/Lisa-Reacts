const feliz = document.getElementById ( 'feliz' );
const triste = document.getElementById ( 'triste' );
const reacts = document.getElementById ( 'reacts' );

function isLisaApaixonada () {
	return reacts.src.indexOf ( 'apaixonada' ) > -1
}

function felizOn () {
	if ( !isLisaApaixonada () ) {
	reacts.src = 'imgs/lisafeliz.jpg';
  }

}

function tristeOn () {
	if ( !isLisaApaixonada () ) {
	reacts.src = 'imgs/lisatriste.jpg';	
	}
	
}

function lisaApaixonada () {
	reacts.src = 'imgs/apaixonada.jpg';
}

feliz.addEventListener ( 'click', felizOn );
triste.addEventListener ( 'click', tristeOn );
reacts.addEventListener ( 'mouseover', felizOn );
reacts.addEventListener ( 'mouseleave', tristeOn );
reacts.addEventListener ( 'dblclick', lisaApaixonada );