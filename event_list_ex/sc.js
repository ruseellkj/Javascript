const buttonToBeClicked = document.getElementById("save-button");

const resetButton = document.getElementById("reset-button");

// the text that the button is initialized with
// so the initialText will store "you have not saved ur pass"
const initialText = buttonToBeClicked.textContent;

// the text that the button contains after being clicked
const clickedText = "Your password is saved";

// we hoist the event listener callback function
// to prevent having duplicate listeners attached
function eventListener() {
  buttonToBeClicked.textContent = clickedText;
}

function addListener() {
  buttonToBeClicked.addEventListener("click", eventListener, {
    passive: true,
    // once: true,
  });
}

// when the reset button is clicked, the example button is reset,
// and allowed to have its state updated again
resetButton.addEventListener("click", () => {
  buttonToBeClicked.textContent = initialText;
  addListener();
});

addListener();