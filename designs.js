// When size is submitted by the user, call makeGrid()
const form = document.querySelector("#sizePicker");
form.addEventListener("submit", getValues);

function getValues(e) {
  e.preventDefault();
  // Select color input
  const color = document.querySelector("#colorPicker").value;

  // Select size input
  const height = document.querySelector("#input_height").value;
  const width = document.querySelector("#input_width").value;

  //crate a grid  Object
  const grid = {
    color,
    height,
    width
  };

  makeGrid(grid);
}

function makeGrid(grid) {
  //draw a canvas with this object

  //function to create cells to insert
  let cells = function(height, width) {
    let result = "";
    for (let i = 0; i < height; i++) {
      result += "<tr>";
      for (let j = 0; j < width; j++) {
        result += "<td></td>";
      }
      result += "</tr>";
    }
    return result;
  };

  //drawn the actual grid
  document.querySelector("#pixel_canvas").innerHTML = cells(
    grid.height,
    grid.width
  );

  //colour the grid
  document
    .querySelector("#pixel_canvas")
    .addEventListener("click", e => (e.target.style.background = grid.color));
}
