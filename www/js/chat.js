 window.onload = function() {
  document.getElementById("myText").focus();
  };
  function typo() {
  if (document.getElementById("myText").value.trim().length == 0) {
     document.getElementById("myText").focus();
    
  } else {
    var currentText = document.getElementById("demo").innerHTML;
    var x = '<div><p class=bubble>' + document.getElementById("myText").value + '</p></div>';
    document.getElementById("myText").value = "";
    var y = document.getElementById("demo").innerHTML = currentText + x;

    var z = document.getElementById('demo');
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
  $("#input").focus(function(e) {
    var container = $('#container'),
    scrollTo = $('#input');

    setTimeout((function() {
       container.animate({
       scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
       });
    }), 500);

});
  $("#input").click(function(e) {
    e.stopPropagation();
    var container = $('#container'), //container element to be scrolled, contains input
    scrollTo = $('#input');

    setTimeout((function() {
        container.animate({
        scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
      });
    }), 500);
});
  