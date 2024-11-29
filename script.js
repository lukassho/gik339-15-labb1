const cl = console.log;

const checkbox = document.getElementById("checkbox");

const text = document.getElementsByClassName("textfield");

const btn = document.querySelector("button");

const div = document.getElementsByTagName("div");

for(let i = 0; i < text.length; i++){
    text[i].addEventListener('click', inputFiledListener);
}

function inputFiledListener(e) {
    const targetName = e.target.id;
    console.log('textfältet', targetName, 'klickades.');
}