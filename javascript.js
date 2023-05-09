const container = document.querySelector(".container");

const colorPicker = document.querySelector("#colorpicker");

const rainbowEffect = document.querySelector(".random");

const clear = document.querySelector(".blank");

const grid = document.querySelector(".slider");

const gridSize = document.querySelector(".gSize");

let mouse_down = false;

let color = colorPicker.value;

let rainbow = false;

let numOfDivs = grid.value;

let width = 400/numOfDivs;

let height = width;

gridSize.textContent = `${numOfDivs} x ${numOfDivs}`;


for (let i=1; i<=numOfDivs; i++){

    const mainDivs = document.createElement("div");

    const classes = "mainDivs" + `${i}`;

    mainDivs.classList.add(classes);

    mainDivs.style.display = "flex";
    mainDivs.style.flexDirection = "row"; 

    container.appendChild(mainDivs);

    const divs = document.querySelector(`.${classes}`);

    for (let j=1; j<=numOfDivs; j++){

        const div = document.createElement("div");

        div.classList.add(`divs${j}`);

        div.style.width = `${width}px`;
        div.style.height = `${height}px`;
        div.style.outline= "1px ridge #eeeeee";
        div.style.outlineOffset = "-1px";

        divs.appendChild(div);

    }

}

grid.addEventListener('change',function(){

    numOfDivs = grid.value;
    width = 400/numOfDivs;
    height = width;
    color = colorPicker.value;

    gridSize.textContent = `${numOfDivs} x ${numOfDivs}`

    removeAllChildNodes();
    gridCreation();
    eventListeners();

    clear.classList.toggle("shadow");
    rainbowEffect.classList.remove("shadow");
    rainbow = false;
    childs.forEach(child => {
        child.style.background = "none";
    })

});

function removeAllChildNodes(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function gridCreation(){

    for (let i=1; i<=numOfDivs; i++){

        const mainDivs = document.createElement("div");

        const classes = "mainDivs" + `${i}`;

        mainDivs.classList.add(classes);

        mainDivs.style.display = "flex";
        mainDivs.style.flexDirection = "row"; 

        container.appendChild(mainDivs);

        const divs = document.querySelector(`.${classes}`);

        for (let j=1; j<=numOfDivs; j++){

            const div = document.createElement("div");

            div.classList.add(`divs${j}`);

            div.style.width = `${width}px`;
            div.style.height = `${height}px`;
            div.style.outline= "1px ridge #eeeeee";
            div.style.outlineOffset = "-1px";

            divs.appendChild(div);

        }

    }

}

function eventListeners(){

    childs = document.querySelectorAll(".container>div>*");

    childs.forEach(child =>{
        child.addEventListener('mousedown',function(e){
            mouse_down=true;
        });
        child.addEventListener('mouseup',function(){
            mouse_down=false;
        });
        child.addEventListener('mouseover',function(e){
            if(mouse_down){
                randomColor();
                const newColor = e.target;
                newColor.style.background = color;
                clear.classList.remove("shadow");
            }
        });
    });
}

let childs = document.querySelectorAll(".container>div>*");

childs.forEach(child =>{
    child.addEventListener('mousedown',function(e){
        mouse_down=true;
    });
    child.addEventListener('mouseup',function(){
        mouse_down=false;
    });
    child.addEventListener('mouseover',function(e){
        if(mouse_down){
            randomColor();
            const newColor = e.target;
            newColor.style.background = color;
            clear.classList.remove("shadow");
        }
    });
});

function randomColor(){
    if(rainbow){
        let maxVal = 0xFFFFFF;
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        let randColor = randomNumber.toString(16);
        color = "#" + randColor;
    }else{
        rainbowEffect.classList.remove("shadow");
    }
}


colorPicker.addEventListener('change',function(){
    color = colorPicker.value;
    rainbowEffect.classList.remove("shadow");
    clear.classList.remove("shadow");
    rainbow = false;
});

rainbowEffect.addEventListener('click',function(){
    rainbow = true;
    rainbowEffect.classList.add("shadow");
    clear.classList.remove("shadow");
});

clear.addEventListener('click',function(){
    clear.classList.add("shadow");
    rainbowEffect.classList.remove("shadow");
    rainbow = false;
    childs.forEach(child => {
        child.style.background = "#e1ceff";
    })
    color = colorPicker.value;
});





