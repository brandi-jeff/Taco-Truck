const image = document.getElementById("loop-image");
const section = document.querySelector(".my-location");

image.style.left = section.offsetWidth + "px";

const moveImage = () => {
    
    image.style.left = parseInt(image.style.left) -1 + "px";

    // check if image has left the viewport from the left.. if the condition is true, it moves it back to the right of the container to start the loop over
    if (parseInt(image.style.left) + image.width <= 0) {
        image.style.left = section.offsetWidth + "px"; // sets image left position to the width of the parent container (section) 
    }
};

const intervalId = setInterval(moveImage, 5); // sets speed to 10milliseconds