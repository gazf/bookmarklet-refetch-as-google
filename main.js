console.clear();

var input = document.getElementById("path-input");
var table = document.getElementById("grid");
var paths = table.getElementsByClassName("leftmost path-cell");

function createButton(dom, option){
  var button = document.createElement("button");
  button.innerText = option.text;
  button.addEventListener("click", option.listener);
  dom.appendChild(button);
}

for(var i = 0; i < paths.length; i++){
  var path = paths[i].innerText;
  createButton(paths[i], {text: path, listener: function(e){
    console.log(e);
    e.stopPropagation();
    input.value = e.target.innerText;
  }});
}
