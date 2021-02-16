
//selecting necessary
let button = document.querySelector('#button');
let input = document.querySelector('#input');
let tbody = document.querySelector('tbody');

//function for calculate length of input value
function inputLength(){
    return input.value.length;
}

function delete_job(){
    let tr = document.querySelector(tr);
    let del_item = document.querySelector(tr);
    del_item.remove();
}

//function for create li element in ul
function createTableElement() {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.appendChild(document.createTextNode('[+]'));
    td2.appendChild(document.createTextNode(input.value));
    td3.appendChild(document.createElement('button'));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
    input.value = "";
    document.querySelector('tr:last-child').className = "text-center";




}

// function for adding input value in ul by clicking
function addByClick() {
    if (inputLength() > 0) {
        createTableElement();
    }
}

//function for adding input value in ul by pressing enter
function addByEnter(event) {
        if (inputLength() > 0 && event.keyCode === 13) {
            createTableElement();
    }
}

//executing
button.addEventListener('click', addByClick);
input.addEventListener('keypress', addByEnter);



