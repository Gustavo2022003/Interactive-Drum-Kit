
for (let i = 0; i < document.querySelectorAll("button.drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        this.style.color = "white";

    });
}

// var tomOne = new Audio("sounds/tom-1.mp3");
// tomOne.play();