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
const result= document.getElementById('result');

var stringa_ricerca='es';
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
  prova(str){
    for (let x in this){
      console.log(this[x]);
      for (let y in this[x]){
        if (this[x][y].match(str)){
          new_archivio.push(this[x][y]);
        } 
        /*console.log(this[x][y]);*/     
      }
    }
    console.log(new_archivio);
  }
}

var oggettoArchivio = new OggettoArchivio();
console.log('principale:', oggettoArchivio.prova(stringa_ricerca));
result.innerHTML=new_archivio;