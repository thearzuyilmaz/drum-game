let drums = document.getElementsByClassName("drum"); // brings an array so loop is needed
let soundFile;




// Click Event
for (let i = 0; i < drums.length; i++){
    
    
    drums[i].addEventListener("click", function(){

        var drumType = this.innerHTML; // drums[i].innerHTML
        makeSound(drumType);
        buttonAnimation(drumType);
    })
}
    

    

// Keyboard Event
document.addEventListener("keydown", function(e){

    makeSound(e.key);
    buttonAnimation(e.key);
    } 
)



function makeSound(input){

    switch(input) {
        case "w":
            soundFile = "./sounds/crash.mp3";
            break;
        case "a":
            soundFile = "./sounds/kick-bass.mp3";
            break;
        case "s":
            soundFile = "./sounds/snare.mp3";
            break;
        case "d":
            soundFile = "./sounds/tom-1.mp3";
            break;
        case "j":
            soundFile = "./sounds/tom-2.mp3";
            break;
        case "k":
            soundFile = "./sounds/tom-2.mp3";
            break;
        case "l":
            soundFile = "./sounds/tom-4.mp3";
            break;
        default:
            soundFile = "";
    }
    let audio = new Audio(soundFile);
    audio.play();

}


function buttonAnimation(currentKey){

    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}