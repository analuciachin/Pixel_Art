document.getElementById('sizePicker').addEventListener('submit', function(event) {
    // When size is submitted by the user, call makeGrid()
    makeGrid();
    event.preventDefault();
})
 
document.getElementById('pixel_canvas').addEventListener('mousedown', function(event){
    // Select color input
    var color = document.getElementById('colorPicker').value;
    var cellClicked = event.target.id;
    console.log(cellClicked);
    //var cellClicked = event.findElement('td');
    //cellClicked.style.backgroundColor = color;
    //document.getElementById(cellClicked).css({"background-color": color});
 
    var test = document.getElementById(cellClicked);
    console.log(test);
 
    //event.preventDefault();
})
 
// When size is submitted by the user, call makeGrid()
 
function makeGrid() {
 
// Your code goes here!
    // Select size input
    var height = document.getElementById('input_height').value;
    var width = document.getElementById('input_width').value;
    var table = document.querySelector('table');
    table.innerHTML = '';
    //debugger;
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
 