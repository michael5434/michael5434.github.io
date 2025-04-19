let input = document.querySelector("#input");
let button = document.querySelector("#btn");
const container = document.querySelector("#container");

let row_width = 480;


button.addEventListener("click", ()=>{
    let size = Number(input.value);
    let squareHeight = row_width/size;

    container.innerHTML = "";

    for(let i=0; i < size; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.height = `${row_width/size}px`;
        

        for(let j=0; j < size; j++){
            const square = document.createElement("div");
            square.classList.add("square");

            square.style.height = `${squareHeight}px`;
            square.style.width = `${squareHeight}px`;

            row.appendChild(square);
        }

        container.appendChild(row);
    }

});
 