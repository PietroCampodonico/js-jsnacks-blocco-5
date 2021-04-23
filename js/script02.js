/*[Snack 2]
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.*/


//Creo 10 oggetti
var listaOrtaggi = [
    zucchina1 = {
        varietà: "a",
        peso: 200,
        unita_misura_peso: "g",
        lunghezza: 10,
        unita_misura_lunghezza: "cm",
    },
    zucchina2 = {
        varietà: "b",
        peso: 180,
        unita_misura_peso: "g",
        lunghezza: 11,
        unita_misura_lunghezza: "cm",
    },
    zucchina3 = {
        varietà: "c",
        peso: 230,
        unita_misura_peso: "g",
        lunghezza: 12,
        unita_misura_lunghezza: "cm",
    },
    zucchina4 = {
        varietà: "d",
        peso: 195,
        unita_misura_peso: "g",
        lunghezza: 13,
        unita_misura_lunghezza: "cm",
    },
    zucchina5 = {
        varietà: "e",
        peso: 181,
        unita_misura_peso: "g",
        lunghezza: 14,
        unita_misura_lunghezza: "cm",
    },
    zucchina6 = {
        varietà: "f",
        peso: 320,
        unita_misura_peso: "g",
        lunghezza: 15,
        unita_misura_lunghezza: "cm",
    },
    zucchina7 = {
        varietà: "g",
        peso: 179,
        unita_misura_peso: "g",
        lunghezza: 16,
        unita_misura_lunghezza: "cm",
    },
    zucchina8 = {
        varietà: "h",
        peso: 150,
        unita_misura_peso: "g",
        lunghezza: 17,
        unita_misura_lunghezza: "cm",
    },
    zucchina9 = {
        varietà: "i",
        peso: 345,
        unita_misura_peso: "g",
        lunghezza: 18,
        unita_misura_lunghezza: "cm",
    },
    zucchina10 = {
        varietà: "l",
        peso: 200,
        unita_misura_peso: "g",
        lunghezza: 19,
        unita_misura_lunghezza: "cm",
    },
]

//Divido in due array le zucchine
var zucchinePiccole = [];

for (i = 0; i < listaOrtaggi.length; i++) {
    
    if (listaOrtaggi[i].lunghezza < 15) {
        zucchinePiccole.push(listaOrtaggi[i]);
        listaOrtaggi.splice(i, 1);
        i--
    }
}

var zucchineGrandi = listaOrtaggi;

//Stampo i pesi dei due array
var pesoZucchinePiccole = 0;
var pesoZucchineGrandi = 0

console.log(zucchineGrandi);
console.log(zucchinePiccole);
pesaturaVerdura(zucchineGrandi, pesoZucchinePiccole);
pesaturaVerdura(zucchinePiccole, pesoZucchineGrandi)

