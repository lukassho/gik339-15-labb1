//Vi skapar variabler och använder olika DOM-funktioner för att hämta upp önskade HTML-element.
const checkbox = document.getElementById('divStyle');
const input = document.querySelectorAll('input');
const btn = document.querySelector('.button');
const output = document.querySelector('.output');

// Vi använder en for-loop som använder sig av i och i++, vi tilldelar 1 värdet noll och säger att "om i är mindre än listans längd, öka med 1.
//Detta gör vi för att kontrollera längden på listan med input-element.
//Därefter skapar vi eventlyssnare som reagerar på knapptryck i inputfälten.
for(let i = 0; i < input.length; i++){
    input[i].addEventListener('click', inputFieldListener);
};

//Vi skapar en funktion som vi namnger "inputfieldListener" som har parametern "e". I funktionen skapar vi variabeln "targetName"
//som vi tilldelar id:t på det fält som klickats. Vi skapar en if-sats som säger att "om targetName är divStyle, kör funktionen vid namn "checked"". 
//Vi gör en utskrift till konsollen.
function inputFieldListener(e) {
    const targetName = e.target.id;
        if(targetName == 'divStyle') {
            checked();
        }
    console.log('inputfältet', targetName, 'klickades.');
};

//Vi skapar en event-lyssnare för samtliga input-fält med hjälp av input.forEach. 
//Vi lägger till en lyssnare med funktionen blur för att se när fältet "tas ur fokus". Vi anropar funktionen handleBlur.
input.forEach((field) => {
    field.addEventListener('blur', handleBlur);
});

//Vi skapar funktionen handleBlur med parametern "e". Vi skapar variablerna "name" och "value" som vi 
//tilldelar namnet och/eller värdet på fältet som "tagits ur fokus".
//Vi skapar en if-sats med villkoret att namnet är lika med "content", om detta stämmer gör den en ändring i HTML-filen. 
//vi skriver output.innerHTML då det är elementet som vi tilldelat variabeln output vi vill göra ändringar i, och "innerHTML" då det ska ske innom objektet. 
//Vi lägger till innehållet av variabeln "value". Vi har även en konsoll-utskrift som berättar vilket fält som lämnades ut fokus.
function handleBlur(e) {
   const name = e.target.name;
   const value = e.target.value;

    if(name == 'content') {
    output.innerHTML = value;
    }

    console.log('inputfältet', name, 'lämnades.');
};


//Vi skapar en anonym funktion och tilldelar den till variabeln "checked". Funktionen innehåller variablen colorField 
//som i sin tur innehåller färgen på "card" (vår formulärsruta). Vi ändrar bakgrundsfärg på vår div med namn "output" med hjälp av style.backgroundColor
//till det värde som användaren fyllt i och som vi lagrat i colorField.
const checked = function() {
    const colorField = card.color;
    output.style.backgroundColor = colorField.value;
};

//Vi skapar en anonym funktion med uppgift att radera div-elementet med namn "output". Detta gör vi med hjälp av funktionen addEventListener som lyssnar efter
//knapptryck. Vid ett knapptryck körs "e.preventDefault" då knappen ligger i ett formulär och har som standard-beteende att skicka formuläret och ladda om sidan. Vi lägger
//alltså till detta för att undvika att det ska uppstå. Därefter använder vi removeChild för att gå in i vårt formulär (card) och radera child-elementet "output".
btn.addEventListener('click', (e) => {
    e.preventDefault();
    card.removeChild(output);
});
