let name = prompt("What's your username?", "");
document.getElementById("name").innerHTML = name

function replaceName() {
let name = prompt("What's your username?", "");
document.getElementById("name").innerHTML = name
}

document.getElementById("button").addEventListener("click", function() {
    replaceName();
})


let nameInput = document.getElementById("input-name")

document.getElementById("submit").addEventListener("click", function() {
    const messageName =  nameInput.value

    document.getElementById("message-name").innerHTML = messageName
})

let birthday = document.getElementById("input-birthday")

document.getElementById("submit").addEventListener("click", function() {
    const messageBirthday = birthday.value

    document.getElementById("message-birthday").innerHTML = messageBirthday
})


const Lakilaki =  document.getElementById("laki");
const Perempuan = document.getElementById("perempuan");
const mySubmit = document.getElementById("submit");
const messageGender = document.getElementById("message-gender");

mySubmit.onclick = function() {

    if(Lakilaki.checked){
        messageGender.textContent = 'Laki-laki'
    }
    if(Perempuan.checked){
        messageGender.textContent = 'Perempuan'
    }
}

let Message = document.getElementById("input-message")

document.getElementById("submit").addEventListener("click", function() {
    const message = Message.value

    document.getElementById("message-message").innerHTML = message
})
