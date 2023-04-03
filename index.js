
let outputText = "";
let outputNode = document.querySelector("#outputText");


let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        console.log(button.attributes["data-value"].value);
        outputNode.textContent += button.attributes["data-value"].value
    })
})


/*



*/