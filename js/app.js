$(document).ready(function(){
    generateGrid(16,16);
})

function generateGrid(rows,cols){
    for(var i=0;i<rows;i++){
        generateRow(cols);
    }
    $( ".cell" ).css("width",(480/cols).toString());  //Dynamically update cell width
    $( ".cell" ).css("height",(480/rows).toString()); //Dynanically update cell height
    $( ".grid" ).children().css("height",(480/rows).toString()); //Set row height

    $( ".cell" ).mouseenter(function(){
        $( this ).css("background-color","blue");    
    });
}

function generateRow(cols){
    $( ".grid" ).append( "<div class=\"row\"></div>" );
    var rowObject = $( ".row" ).last();
    createCols(rowObject,cols);
}

function createCols(row,cols){
    for(var i=0;i<cols;i++){
        row.append( "<div class=\"cell\"></div>" );
    }
}

function clearGrid(){
    $( ".grid" ).children().remove();
}

function newGrid(){
    var rows=0;
    var cols=0;
    while(rows < 2){
        rows = prompt("How many rows? You need at least 2.","Rows");
    }
    while(cols < 2){    
        cols = prompt("How many cols? You need at least 2.","Cols");
    }
    clearGrid();
    generateGrid(rows,cols);
    
}