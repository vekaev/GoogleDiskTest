var gridBlock = document.querySelector(".grid-block"),
    div = document.createElement('div'),
    mainBlock = document.querySelectorAll(".main-block");

div.classList.add("blue");
console.log(gridBlock);

gridBlock.insertBefore(div, mainBlock);




// var timerId = setInterval(sayHello, 3000);

// function sayHello() {
//     alert("Hello");
// }





// var openBtn = document.getElementById("set_open-btn");

// console.log(openBtn);
// // openBtn.addEventListener("mouseenter", function() {
// //     alert("НЕ наводи туда мышку");
// // });
// openBtn.addEventListener("click", function(event) {
//     var target = event.target;
//     target.style.display = "none";

//     // console.log("Произошло событие : " + event.type + event.target + " на элементе ");

// });
// // document.insertBefore(, openBtn)
// // for()