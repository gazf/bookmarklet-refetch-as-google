var table=document.getElementById("grid");
for(var tr in table.rows){
  for(var td in tr.cells){
    console.log(td);
  }
}
