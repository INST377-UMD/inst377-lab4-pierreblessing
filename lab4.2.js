var alertMeForm = document.getElementById('alertMeForm');
alertMeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var nameInput = document.getElementById('nameInput').value;
    if (nameInput) {
        alert("Hi " + nameInput + "!");
    }
});

var isOrange = true;
var changeColor = document.getElementById('changeColor');
changeColor.addEventListener('click', function() {
    if (isOrange) {
        document.body.style.backgroundColor = 'Green';
    } else {
        document.body.style.backgroundColor = 'Orange';
    }
    isOrange = !isOrange;
});

var textTesterForm = document.getElementById('textTesterForm');
textTesterForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var textInput = document.getElementById('textInput').value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(textInput)) {
        alert("this text contains special characters!");
    } else {
        alert("this text is valid.");
    }
});

var addText = document.getElementById('addText');
addText.addEventListener('click', function() {
    var heading = document.getElementById('heading');
    heading.textContent += " Add Text ";
});
