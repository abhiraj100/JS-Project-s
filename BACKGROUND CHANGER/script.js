function changeBG(color){
    document.body.style.backgroundColor = color;
    color = color.toLowerCase();
    let txt = document.getElementsByClassName("text"); 
    if (color === "#000000" || color === "black" || color === "#333" || color === "rgb(0, 0, 0)"){
        for (let iterator of txt) {
            iterator.style.color = "white";
        }
    } else {
        for (let iterator of txt) {
            iterator.style.color = "black";
        }
    }
}





// function changeBG(color) {
//     document.body.style.backgroundColor = color;

//     // Convert color to lowercase for consistent comparison
//     color = color.toLowerCase();

//     // Select elements with class "text"
//     let txt = document.getElementsByClassName("text");

//     // Check if the background color is dark or light
//     if (color === "#000000" || color === "black" || color === "#333" || color === "rgb(0, 0, 0)") {
//         // If background color is dark, set text color to white
//         for (let iterator of txt) {
//             iterator.style.color = "white";
//         }
//     } else {
//         // For any other background color, set text color to black
//         for (let iterator of txt) {
//             iterator.style.color = "black";
//         }
//     }
// }