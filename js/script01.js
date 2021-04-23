/*[Snack 1]
Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
peso e lunghezza.Calcola quanto pesano tutte le zucchine.*/

function pesaturaVerdura(arrayOrtaggi, pesOrtaggio) {
    for (var i = 0; i < arrayOrtaggi.length; i++) {
        pesOrtaggio += arrayOrtaggi[i].peso;
    }

    return console.log(pesOrtaggio + "g")
}

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

var pesoZucchine = 0;

pesaturaVerdura(listaOrtaggi, pesoZucchine)