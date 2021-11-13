function czyOK( _bok ) {

    let bok = Number( _bok );

    if ( Number.isNaN( bok ) ) return false;
    if ( bok <= 0 ) return false;
    return true;

}

function walidacja() {
    let dlu = document.querySelector('#dlu').value;
    let szer = document.querySelector('#szer').value;
    let wys = document.querySelector('#wys').value;

    return ( czyOK(dlu) && czyOK(szer) && czyOK(wys) );

}

function obliczenia() {
    let dlugosc = Number(document.querySelector('#dlu').value);
    let szerokosc = Number(document.querySelector('#szer').value);
    let wysokosc = Number(document.querySelector('#wys').value);
    let suma = document.getElementById('wynik');

    let wynik = dlugosc * szerokosc * wysokosc;
    let pole = 2*dlugosc*szerokosc+2*dlugosc*wysokosc+2*szerokosc*wysokosc;
    suma.innerHTML = 'Objętość prostopadłościanu wynosi: ' + wynik + ' a jego pole powierzchni to: ' + pole;
}

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('input[type="submit"]').addEventListener('click', () => {
        
        if ( walidacja() ) {
            obliczenia(); 
        } else {
            alert('POPRAW DANE WEJŚCIOWE!');
        }

    }, false);


}, false);