console.clear();

var table=document.getElementById("grid");
for(var i = 0; i < table.rows.length; i++){
  for(var j = 0; j < table.rows[i].cells.length; j++){
    console.log(table.rows[i].cells[j]);
  }
}
