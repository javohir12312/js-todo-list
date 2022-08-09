var list = document.querySelector('ul');

list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
       var div = ev.target.parentNode;
       div.remove();
    }
});

function newElement() {

    var li = document.createElement('li');
    var inputValue = document.getElementById('input').value;
    var t = document.createTextNode(inputValue);

    li.appendChild(t);

    if(inputValue == "") {
       list.textContent = "Nima kerak ekanligini kiriting";
    } 
    else {
       document.getElementById('list').appendChild(li);
    }


    document.getElementById('input').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}