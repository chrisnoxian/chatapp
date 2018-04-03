 window.onload = function() {
  document.getElementById("myText").focus();
  };
  function typo(){
    var currentText = document.getElementById("demo").innerHTML;
    var x = '<div><p class=bubble>' + document.getElementById("myText").value + '</p></div>';
    document.getElementById("myText").value = "";
    var y = document.getElementById("demo").innerHTML = currentText + x;
     var z = document.getElementById('demo');
  z.scrollTop = z.scrollHeight;
  }
  var input = document.getElementById("myText");
  input.addEventListener("keyup", function(event) {
    event.preventDefault();
  if (event.keyCode === 13 && input.value.length >=1) {
      document.getElementById("btn-chat").click();
    }
  });