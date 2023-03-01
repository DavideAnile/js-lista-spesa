/* 
Data una lista della spesa (memorizzata in un array), 
stampare sulla pagina (anche brutalmente, basta che si vedano) 
gli elementi della lista individualmente con un ciclo while.

*/


/* 
-creo un array con elementi al suo interno
-creo un contatore con valore "0"
-prendo il contenitore della lista dal dom
FINCHE' il valore del contatore è minore della lunghezza della lista
 °creo un elemento "li"
 °li assume il valore in base all'indice dell'array
 °appendo l'elemento li al contenitore della lista
 °aumento il contatore di un'unità


*/


const elementiLista = ["pane", "farina", "burro", "acqua", "sale", "pasta", "cervello nuovo"];
let elementoLista = 0;
const lista = document.getElementById("lista-spesa")


while (elementoLista < elementiLista.length){

    let newEl = document.createElement("li")
    newEl.innerText = elementiLista[elementoLista];
    lista.append(newEl)
    elementoLista++

}





