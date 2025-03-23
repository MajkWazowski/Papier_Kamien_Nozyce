function Wybor_komputera(){
    const wybor=['Papier','Kamień','Nożyce']
    const losowyWybor = wybor[Math.floor(Math.random() * wybor.length)]; 

    document.getElementById("Wybor_komputera").innerHTML=`Komputer wybrał: ${losowyWybor}!`

    return losowyWybor;
    
}

let wynik_Gracza=0
let wynik_Komputera=0

function wybor_Gracza(wybor_Gracza){
    document.getElementById("Wybor_twoj").innerHTML=`Wybrałeś:  ${wybor_Gracza}!`
    const wyborKomputera = Wybor_komputera()



let wynik=""
if (wybor_Gracza === wyborKomputera){
    wynik="Remis!"
}
else if (
(wybor_Gracza === 'Papier' && wyborKomputera === 'Kamień') ||
(wybor_Gracza === 'Kamień' && wyborKomputera === 'Nożyce') ||
(wybor_Gracza === 'Nożyce' && wyborKomputera === 'Papier')
) {
wynik = "Wygrałeś!";
wynik_Gracza++
} 

else
{
    wynik="Przegrałeś!"
    wynik_Komputera++
}

document.getElementById("wynik").innerHTML=`Wynik: ${wynik}`
document.getElementById("wynik_Gracza").innerText=wynik_Gracza
document.getElementById("wynik_Komputera").innerHTML=wynik_Komputera
}