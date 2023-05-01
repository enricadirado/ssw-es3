// Import stylesheets
import './style.css';

// Write Javascript code!
class libro {
  constructor(autore, titolo, posizione, nominativo) {
    this.autore = autore;
    this.titolo = titolo;
    this.posizione = posizione;
    this.nominativo= nominativo;
  }
}

const libro1 = new libro("walt whitman", "leaves of grass", "S3L3P4", "enrica di rado");
const libro2 = new libro("antonia pozzi", "desiderio di cose leggere", "S1L5P2", "davide di rado");
const libro3 = new libro("pierluigi cappello", "stato di quiete", "S3L2P5", "");