
for (let i = 0; i < document.querySelectorAll("button.drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        alert("I got clicked");
    });
}

