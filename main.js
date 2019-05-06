// - Creare un oggetto che descriva uno studente con le seguenti proprietà:
//  nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti
// e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var studente = {
  'nome' : 'franco',
  'cognome' : 'stanco',
  'eta' : 33
};

  document.writeln(studente.nome + " " + studente.cognome + "<br>")
  document.writeln("===================Fine primo esercizio===================="+ "<br>"+ "<br>")

var studenti = [
  { 'nome':'mario',
    'cognome': 'rossi',
    'eta': 19
  },
  { 'nome':'luigi',
    'cognome': 'verdi',
    'eta': 21
  },
  { 'nome':'luisa',
    'cognome': 'azzurri',
    'eta': 22
  }
];

for (var all in studenti){
  document.writeln(studenti[all].nome + " " + studenti[all].cognome + " " + "<br>" );
}
document.writeln("===================Fine secondo esercizio====================" + "<br>"+ "<br>")

var new_student = {
nome : prompt("inserisci il nome"),
cognome : prompt("inserisci il cognome"),
eta : prompt('inserisci età')
};

studenti.push(new_student);
document.writeln("===================nuova lista studenti====================" + "<br>"+ "<br>")
for (var all in studenti){
  document.writeln(studenti[all].nome + " " + studenti[all].cognome + " " + "<br>" );
}
