const br = "<br>";
for (let i=0; i<100; i++) {
    let min= 1;
    let max= 100;
    let random_num = Math.random() * (max - min) + min;
    let random_value = Math.random();
    document.write(Math.round(random_num * random_value) + br);
    }

document.write(br + br +br +br);

let Numero= prompt("Scrivi il numero di facce del dado");

let tipo = typeof Numero;

document.write(tipo + br);


if (Numero > 0) {
 for (let i=0; i<100; i++) {
    let random_value = Math.random();
    document.write(Math.round(Numero * random_value) + br);
    } 
} else {
    window.alert('ERRORE SOLO NUMERO POSITIVO ACCETTATO');
}



























