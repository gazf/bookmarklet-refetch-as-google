(function(){
  
  var input = document.getElementById("path-input");
  var form = document.getElementById("wmxbot-fetch-form");
  var table = document.getElementById("grid");
  var list = table.getElementsByClassName("leftmost path-cell");

  function addFetchButton(dom, option){
    var button = document.createElement("div");
    button.innerText = option.text;
    button.addEventListener("click", option.listener);
    button.setAttribute("data-path", option.path);
    button.setAttribute("class", "goog-inline-block jfk-button jfk-button-primary");
    dom.insertBefore(button, dom.firstChild);
  }

  function fetchButtonListener(e){
    e.stopPropagation();
    var path = e.target.getAttribute("data-path");
    if(path.substr(0, 1) === "/") path = path.substr(1);
    input.value = path;
    form.submit();
  }

  for(var i = 0; i < list.length; i++){
    var path = list[i].innerText;
    addFetchButton(list[i], {
      text: "ReFetch",
      path: path,
      listener: fetchButtonListener
    });
  }
  
})();
