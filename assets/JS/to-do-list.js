function novaTarefa() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("novaTarefa").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Você precisa escrever algo!");
    } else {
      document.getElementById("lista").appendChild(li);
    }
    document.getElementById("novaTarefa").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }