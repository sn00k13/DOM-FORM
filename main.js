const inputBox = document.querySelectorAll(".pcode");

let pass = '';

inputBox.forEach((box) => {
    box.addEventListener("keyup", () => {
        box.blur();
        pass += box.value;
        if (pass.length < 4) {
            box.nextElementSibling.focus();
        } else{
        if(pass.length == 4) {
            if (pass.toLowerCase() == '0147') {
                alert("Logged in");
                // pass = "";
            } else {
                alert("Incorrect Pin. Please try again");
                // pass = "";
            }
        } else {
            return;
        }}
        console.log(pass)
    })
})

// const inputBox = document.querySelectorAll(".pcode");
// const btn = document.getElementById("btn")

// let pass = '';

// inputBox.forEach((box) => {
//     box.addEventListener("keyup", () => {
//         box.blur();
//         pass += box.value;
//         if (pass.length < 4) {
//             box.nextElementSibling.focus();
//         } else{
//             btn.focus
//             btn.addEventListener('click', submission)
//         }
//         console.log(pass)
//     })
// });

// function submission() {
//     if(pass.length == 4) {
//         if (pass.toLowerCase() == '0147') {
//             alert("Logged in");
//             // pass = "";
//         } else {
//             alert("Incorrect Pin. Please try again");
//             // pass = "";
//         }
//     } else {
//         return;
//     }
// }