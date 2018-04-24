 window.onload = function() {
  document.getElementById("myText").focus();
  };

  function typo() {
  if (document.getElementById("myText").value.trim().length == 0) {
     document.getElementById("myText").focus();
    
  }
   else
   {
    var currentText = document.getElementById("wrapper").innerHTML;
    var x = '<div><p class=bubble>' + document.getElementById("myText").value + '</p></div>';
    document.getElementById("myText").value = "";
    var y = document.getElementById("wrapper").innerHTML = currentText + x;

    var z = document.getElementById('wrapper');
    z.scrollTop = z.scrollHeight;
    $("input, textarea").focus(function(){  $(document.body).addClass('wrapper');     });
$("input, textarea").blur( function(){  $(document.body).removeClass('widebox');  });
    document.getElementById("myText").focus();  
  }
}

   var input = document.getElementById("myText");
 $("textarea").keypress(function(e){
    // Enter was pressed + shift key
    if (e.keyCode === 13 && !e.shiftKey)
    {
        document.getElementById("btn-chat").click();
    }
});
 if (e.keyCode === 13 && e.shiftKey) {

    // Trigger the button element with a click
   e.preventDefault();
    }
 
 