function Cell({ id, letter, clickCell, gameState }) {

    let classList = "cell ";

    if (gameState != "game") {
        classList += "pointer-events-none "
    } else {
        classList = classList.replace("pointer-events-none","")
    }

    if (!isNaN(letter)) {
        // replace numbers with empty string.
        letter ="";
    } else {
        if (letter === "x") {
            classList += "pointer-events-none cell_x ";
        }
        else {
            classList += "pointer-events-none cell_o ";
        }
    }

    return (
        <button id={id} className={classList} onClick={clickCell}>{letter}</button>
    );
}

export default Cell;