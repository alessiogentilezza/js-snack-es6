/**Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

BONUS
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter. */

/***********************SNACK 1 */

const biciclettaDaCorsa = [
    {
        "nome": "bianchi",
        "peso": 13
    },
    {
        "nome": "atala",
        "peso": 10
    },
    {
        "nome": "bottecchia",
        "peso": 14
    }
];

let biciLeggera = biciclettaDaCorsa[0];

biciclettaDaCorsa.forEach((elemento) => {

    if (elemento.peso < biciLeggera.peso) {
        biciLeggera = elemento;
    }
});

let { nome, peso } = biciLeggera;
console.log(`${nome} pesando ${peso} kg è la bicicletta più legera`);


/***********************SNACK 2 */

const squadreDiCalcio = [
    {
        "nomeSquadra": "lazio",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nomeSquadra": "roma",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nomeSquadra": "fiorentina",
        "puntiFatti": 0,
        "falliSubiti": 0
    }
];


for (let i = 0; i < squadreDiCalcio.length; i++) {
    squadreDiCalcio[i].puntiFatti = Math.floor(Math.random() * 100);
    squadreDiCalcio[i].falliSubiti = Math.floor(Math.random() * 50);
}

const squadreFalli = squadreDiCalcio.map(({ nomeSquadra, falliSubiti }) => {
    console.log(nomeSquadra, falliSubiti);
});

