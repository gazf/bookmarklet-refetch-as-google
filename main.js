console.clear();

var input = document.getElementById("path-input");
var submit = document.getElementById("wmxbot-submit-crawl-button");
var table = document.getElementById("grid");
var paths = table.getElementsByClassName("leftmost path-cell");

function createButton(dom, option){
  var button = document.createElement("button");
  button.innerText = option.text;
  button.addEventListener("click", option.listener);
  button.setAttribute("data-path", option.path);
  dom.appendChild(button);
}

for(var i = 0; i < paths.length; i++){
  var path = paths[i].innerText;
  createButton(paths[i], {text: path, path: path, listener: function(e){
    console.log(e);
    e.stopPropagation();
    
    var path = e.target.getAttribute("data-path");
    if(path.substr(0, 1) === "/") path = path.substr(1);
    input.value = path;
    document.getElementById("wmxbot-submit-crawl-button").click();
  }});
}
