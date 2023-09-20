document.addEventListener("DOMContentLoaded", function () {
    const tableButtons = document.querySelectorAll("table button");
    const resetButton = document.querySelector(".reset");
    const undoButton = document.querySelector(".undo");
    let previousStates = [];

    tableButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const buttonIndex = Array.from(tableButtons).indexOf(button);
            previousStates.push({ index: buttonIndex, opacity: button.style.opacity });
            button.style.opacity = "0.2";
        });
    });

    resetButton.addEventListener("click", function () {
        tableButtons.forEach((button) => {
            button.style.opacity = "1";
        });
        previousStates = [];
    });

    undoButton.addEventListener("click", function () {
        if (previousStates.length > 0) {
            const lastAction = previousStates.pop();
            tableButtons[lastAction.index].style.opacity = lastAction.opacity;
        }
    });
});
