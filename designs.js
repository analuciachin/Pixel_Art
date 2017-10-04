document.getElementById('sizePicker').addEventListener('submit', function(event) {
    // When size is submitted by the user, call makeGrid()
    makeGrid();
    event.preventDefault();
})
 
document.getElementById('pixel_canvas').addEventListener('mousedown', function(event) {
    // Select color input
    var color = document.getElementById('colorPicker').value;
    var cellClicked = event.target.id;
    document.getElementById(cellClicked).style.backgroundColor = color;
})
  
function makeGrid() {
 
    // Select size input
    var height = document.getElementById('input_height').value;
    var width = document.getElementById('input_width').value;
    var table = document.querySelector('table');
    table.innerHTML = '';

    for (var i=0; i < height; i++) {
        var tr = document.createElement('tr');
        for (var j=0; j < width; j++) {
            var td = document.createElement('td');
            td.id = "" + i + j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
 