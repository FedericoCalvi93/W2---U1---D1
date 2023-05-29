/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Stringa: Quando si scrivono delle frasi con lettere bisogna sempre creare un contenitore (in matematica si chiama variabile) che contiene lettere e si scrive così : const testo = "Hello World" (ricorda con le virgolette !)
/* Numero: Quando si scrivono dei numeri bisogna sempre creare un altro contenitore che racchiude numeri e si scrive così : const numeri = 123 (ricorda senza le virgolette !)
/* Boolean: Se vogliamo vedere che il contenitore 1 che pesa 10 è più grande del contenitore 2 che pesa 5 e vogliamo sapere se è vero o falso, scriviamolo così: console.log(Numero1 > Numero2), la risposta sarà True, che signfica vero !
/* Undefined: Quando non ci ricordiamo il nome del papà di un nostro amico possiamo scrivere così e lasciarlo indefinito finchè non ce lo ricorderemo: let nome =
/* Null: Si può creare infine un contenitore dove non mettiamo nulla dentro e siamo noi a deciderlo in questo caso: let nome = null
/* Ricorda sempre che prima dell' uguale diamo un nome al contenitore e dopo il simbolo dell' uguale gli diamo un valore ! 
Con const però il valore non cambierà mai e rimarrà sempre quello mentre con let possiamo cambiare anche successivamente il suo valore scrivendo di nuovo il nome del contenitore e cambiando il valore senza più aggiungere let(ex. let Numero1 = 10 --> Numero 1= 12)

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let Name="Federico"
Name="Federico"
console.log('Il mio nome', "Federico")

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let myNumber=12
let myNumber2=20
console.log('Addizione di 12+20', myNumber+myNumber2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x=12
x=12
console.log('nome variabile', x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

Name= "Calvi"
console.log('Il mio cognome', Name)
const nome= "Federico"
/* nome="Michele"--- Questa variabile non può essere assegnata da un nuovo valore dato che è stata creata con il Datatype const */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y=4
console.log('Sottrazione', x-y)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const Name1="john"
const Name2="John"
console.log('Verifica che sia false', Name1===Name2)
console.log(Name1.charAt(0).toLowerCase === Name2.charAt(0).toLowerCase)

