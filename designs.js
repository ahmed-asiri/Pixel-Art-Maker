// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()


//Even Type.
const clickEvent = 'click';
//Submit button.
const submit = document.querySelector('form').lastElementChild;
//add the event listener function.
submit.addEventListener(clickEvent, makeGrid);

//The makeGrid function:
function makeGrid(event) {
  //Stop the default action of the submit button.
  event.preventDefault();
  //geting the user input for rows and columns.
  const rowNum = Number(document.querySelector('#inputHeight').value);
  const colNum = Number(document.querySelector('#inputWidth').value);
  //get the table element to append the rows and columns to it.
  const table = document.querySelector('table');
  //Clear the table each time he click on submit button.
  table.innerHTML = "";
  //nested loop to create <tr> and <td>, and also append them to the table.
  for (var i = 0; i < rowNum; i++) {
    //create new <tr> element.
    var newRow = document.createElement('tr');
    //append the new <tr> to the <table>.
    table.appendChild(newRow);
    for (var j = 0; j < colNum; j++) {
      //create new <td> element.
      var newCol = document.createElement('td');
      //event listener for the color change for cells.
      newCol.addEventListener(clickEvent, coloredCell, true);
      //getting the last row that have been created.
      const lastRow = document.querySelector('table').lastElementChild;
      //append the colomns to the <tr>.
      lastRow.appendChild(newCol);
    }
  }

}

//function to get the color that user choose.
function coloredCell(event){
  //getting the color.
  var color = document.querySelector('#colorPicker').value;
  event.target.style.backgroundColor = color;
}
