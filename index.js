// Import stylesheets
import './style.css';

// Write Javascript code!

/*
il metodo in archivio deve restituire un array di libri che corrispondono a una stringa.
l'array principale è creato con il costruttore. 
la classe archivio contiene
  -l'array con i libri
  -funzione (il metodo)
i libri sono creati con la classe libro
*/

var stringa_ricerca='wal';
var new_archivio=[];

class OggettoLibro {
  constructor(titolo, autore, posizione, nominativo) {
    this.titolo = titolo;
    this.autore = autore;
    this.posizione = posizione;
    this.nominativo= nominativo;
  }
}

class OggettoArchivio {
  constructor() {
    this.oggettoLibro1 = new OggettoLibro("walt whitman", "leaves of grass", "S3L3P4", "enrica di rado");
    this.oggettoLibro2 = new OggettoLibro("antonia pozzi", "desiderio di cose leggere", "S1L5P2", "davide di rado");
    this.oggettoLibro3 = new OggettoLibro("pierluigi cappello", "stato di quiete", "S3L2P5", "");
  }
  nameContainss(str) {

    this.forEach(myFun, str);
    function myFun(libro){
      if (this.libro.titolo.match(str)){
        new_archivio.push(libro.titolo);
        new_archivio.push(libro.autore);
      } 
    }
  }
nameContains(str){
  ;
}

}

var oggettoArchivio = new OggettoArchivio();
console.log(oggettoArchivio.oggettoLibro1.autore); 
console.log(oggettoArchivio.oggettoLibro2.titolo);
console.log(oggettoArchivio);
console.log(oggettoArchivio.nameContains(stringa_ricerca));

/*
return this.oggettoLibro1.titolo.includes(str);
*/