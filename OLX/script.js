function oblicz()
{
    var wynik=document.getElementById('wynik');
    var ilosc=document.getElementById('ilosc').value;
    var klient=document.getElementById('klient').checked;
    var cena=0;

    if(ilosc >= && ilosc<=40)
    {
        if(klient)
            cena=ilosc*(3-0.30);
        else 
            cena=ilosc*3
        }
        if(ilosc >=41)
        {
            if(klient)
            cena=ilosc*(2-0.30);
        else
            cena=ilosc*2;
    }
    wynik.innerHTML="Twoje ogłoszenia będą kosztować: " +cena+"PLN";
}