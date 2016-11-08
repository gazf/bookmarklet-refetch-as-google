console.clear();

var table=document.getElementById("grid");
console.log("row", table.rows.length);
for(var i = 0; i < table.rows.length; i++){
  console.log("cell", table.rows[i].length);
  for(var j = 0; j < table.rows[i].cells.length; j++){
    console.log(i, j, table.rows[i].cells[j], table.rows[i].cells[j].innerText);
  }
}
