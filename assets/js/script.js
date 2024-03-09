//Desafio 1 Borde
const hideAndShowBorder = () =>{
    const image = document.querySelector('#image');
    if (image.style.border === "")
        image.style.border = '2px solid red';
    else
        image.style.border = "";
}

//Desafio 2 Sticker
const checkSum = () => {
    const cantidad = document.getElementsByTagName('input');
    let total = 0;
    for (i=0; i < cantidad.length; i++){
        total += parseInt(cantidad[i].value);
    }
    if (0 < total && total <= 10){
        document.querySelector('#message').textContent = "Llevas " + total + " Stickers.";
    }else if (total > 10){
        document.querySelector('#message').textContent = "Llevas Demasiados Stickers.";
    }else if (total < 0){
        document.querySelector('#message').textContent = "No puedes agregar numeros negativos";
    }else{
        document.querySelector('#message').textContent = "Por favor agrega stickers.";
    }
}

//Desafio 3 Password
const checkPass = () => {
    const number1 = document.querySelector('#digito1').value;
    const number2 = document.querySelector('#digito2').value;
    const number3 = document.querySelector('#digito3').value;
    if (number1 === '9' && number2 ==='1' && number3 === '1'){
        document.getElementById('passMessage').textContent = "Password 1 Correcto";
    }else if (number1 === '7' && number2 ==='1' && number3 === '4'){
        document.getElementById('passMessage').textContent = "Password 2 Correcto";
    }else{
        document.getElementById('passMessage').textContent = "Password Incorrecto";
    }
}

//Menu
const hideAndShow = (id) =>{
    const element = document.getElementsByClassName('item');
    for (i=0; i < element.length; i++){
        if (element[i].id === id && id != "item3"){
            element[i].style.display = "flex";
            element[i].style.justifyContent = "center"

        }else if(element[i].id === id && id === "item3"){
            element[i].style.display = "block";
        }
        else{
            element[i].style.display = "none";
        }
    }
}
