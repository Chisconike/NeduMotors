function drop() {
    let dropdown = document.getElementById("click");
    if (dropdown.className === "topnav") {
        dropdown.className += " drop";
    } else {
        dropdown.className = "topnav";
    }
}