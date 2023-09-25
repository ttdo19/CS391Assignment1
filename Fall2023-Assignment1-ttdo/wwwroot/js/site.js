// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.body.onload = addSquareAnimation;

function addSquareAnimation() {
    const squares = document.querySelector('.squares');
    for (let i = 0; i < 10; i++) {
        let square = document.createElement("li");
        squares.appendChild(square); 
    }
}