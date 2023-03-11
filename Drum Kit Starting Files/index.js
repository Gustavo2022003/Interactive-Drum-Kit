
// Criando um for loop para pegar todos os botões
for (let i = 0; i < document.querySelectorAll("button.drum").length; i++) {
    // Selecionando todos os botões e adicionando um eventListener de "click" para cada um deles
    document.querySelectorAll("button")[i].addEventListener("click", function(){

        // Criando uma variável e armazenando o objeto que está sendo pressionado.
        var buttonInnerHTML = this.innerHTML;

        // Chamando a função playSound com o objeto que está sendo pressionado
        playSound(buttonInnerHTML);

    });
}

// Criando um eventListener em toda a página para detectar qual tecla está sendo pressionada
document.addEventListener("keydown", function(event){
    playSound(event.key); // Chamando a função de playSound e dando como parametro a tecla pressionada
});


// Criando uma função playSound
function playSound(key){

    // Criando um switch para cada tecla pressionada
    switch (key){
        case "w":
            // Reproduzindo o som de acordo com a tecla
            let tomOne = new Audio("sounds/tom-1.mp3");
            tomOne.play();
            console.log(`Botão ${key} pressionado`);
            break;

        case "a":
            let tomTwo = new Audio("sounds/tom-2.mp3");
            tomTwo.play();
            console.log(`Botão ${key} pressionado`);
            break;

        case"s":
            let tomThree = new Audio("sounds/tom-3.mp3");
            tomThree.play();
            console.log(`Botão ${key} pressionado`);
            break;

        case"d":
            let tomFour = new Audio("sounds/tom-4.mp3");
            tomFour.play();
            console.log(`Botão ${key} pressionado`);
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            console.log(`Botão ${key} pressionado`);
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            console.log(`Botão ${key} pressionado`);
            break;

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            console.log(`Botão ${key} pressionado`);
            break;

        default:
            console.log(`Botão ${key} pressionado`);
    }
}
