var paintColor = "BLACK";
var autoPaint = true;
var rainbowClr = false;

function generateGrid(){ 
    var nr = document.getElementById("GridSize").value;
    var body = document.querySelector('#grid')
    if (body.hasChildNodes(row)) {body.replaceChildren()};

    for(var i = 0; i < nr; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= nr; x++){ 
          var cell = document.createElement("div"); 
          cell.className = "gridsquare"; 
          cell.classList.add("Outset");
          row.appendChild(cell); 
      } 
      body.appendChild(row); 
    } 
  }

function clearBGC(){
    var cellNodeList = document.querySelectorAll('.gridsquare');
    var i;
    for (i = 0; i < cellNodeList.length; i++) {
        cellNodeList[i].style.backgroundColor = "rgb(222, 232, 228)";
    }
}

function changeColor(color) {
    rainbowClr = false;
    paintColor = color;
}

// function paintToggle() {
//     if(autoPaint) {
//         autoPaint = false;
//         console.log(autoPaint);
//     }
//     else {
//         autoPaint = true;
//         console.log(autoPaint);
//     }
// }

function singleRandomColor() {
    rainbowClr = false;
    randomColor();
}

function eraser() {
    rainbowClr = false;
    paintColor = "rgb(222, 232, 228)";
}

function randomColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    paintColor = `rgb(${r},${g},${b})`;
}

function gridToggle() {
    var cellNodeList = document.querySelectorAll('.gridsquare');
    var i;
    for (i = 0; i < cellNodeList.length; i++) {
        if(cellNodeList[i].classList.contains("Outset")) {
            cellNodeList[i].classList.add("Empty");
            cellNodeList[i].classList.remove("Outset");
        }
        else if(cellNodeList[i].classList.contains("Empty")) {
            cellNodeList[i].classList.add("Outset");
            cellNodeList[i].classList.remove("Empty");
        }
    }
}

function rainbowColor() {
    if(rainbowClr) {
        rainbowClr = false
    }
    else {
        rainbowClr = true;
    }
}

addEventListener("mouseover", function (e) {
    if(e.target.classList.contains("gridsquare")) {
        if(rainbowClr) {
            randomColor();
        }
        e.target.style.backgroundColor = paintColor;
    }
})
   



