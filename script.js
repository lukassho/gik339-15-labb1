const checkbox = document.getElementById('divStyle');
const input = document.querySelectorAll('input');
const btn = document.querySelector('.button');
const output = document.getElementsByClassName('output');

for(let i = 0; i < input.length; i++){
    input[i].addEventListener('click', inputFiledListener);
};

function inputFiledListener(e) {
    const targetName = e.target.id;
        if(targetName == 'divStyle') {
            checked();
        }
    console.log('inputfältet', targetName, 'klickades.');
};

input.forEach((field) => {
    field.addEventListener('blur', handleBlur);
});


function handleBlur(e) {
   const name = e.target.name;
   const value = e.target.value;

    if(name == 'content') {
    const outputDiv = document.querySelector('.output');
    outputDiv.innerHTML = value;
    console.log(value);
    }

    console.log('inputfältet', name, 'lämnades.');
};

function checked() {
    const outputDiv = document.querySelector('.output');
    const colorField = card.color;
    outputDiv.style.backgroundColor = colorField.value;
};

/* function buttonDel() {
    btn.addEventListener('click', function (event) {
        event.preventDefault();

        if(btn) {
            card.removeChild(output);
        }
    )}; */
