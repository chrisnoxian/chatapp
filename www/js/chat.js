 window.onload = function() {
  document.getElementById("myText").focus();
  };
  $(document).ready(function() { 
   touchScroll("wrapper");
}); 
  function typo() {
  if (document.getElementById("myText").value.trim().length == 0) {
     document.getElementById("myText").focus();
    
  } else {
    var currentText = document.getElementById("demo").innerHTML;
    var x = '<div><p class=bubble>' + document.getElementById("myText").value + '</p></div>';
    document.getElementById("myText").value = "";
    var y = document.getElementById("demo").innerHTML = currentText + x;

    var z = document.getElementById('wrapper');
    z.scrollTop = z.scrollHeight;
    document.getElementById("myText").focus();  
  }
}

  
  var input = document.getElementById("myText");
  input.addEventListener("keyup", function(event) {
    event.preventDefault();
  if (event.keyCode === 13 && input.value.trim().length >0) {
      document.getElementById("btn-chat").click();

    }
  });
 
  