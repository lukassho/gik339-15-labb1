const cl = console.log;
const checkbox = document.getElementById("checkbox");
const input = document.querySelectorAll("input");
const btn = document.querySelector("button");
const output = document.getElementsByTagName("output");

for(let i = 0; i < input.length; i++){
    input[i].addEventListener('click', inputFiledListener);
}

function inputFiledListener(e) {
    const targetName = e.target.id;
    console.log('textfältet', targetName, 'klickades.');
}

input.forEach((field) => {
    field.addEventListener('blur', handleBlur);
});


function handleBlur(e) {
   const name = e.target.name;
   const value = e.target.value;
   const outputDiv = document.querySelector('.output');
   outputDiv.innerHTML = value;
   console.log(value);
}