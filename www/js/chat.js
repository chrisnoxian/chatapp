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
    document.getElementById("myText").focus();  
  }
}

cordova.plugins.Keyboard.disableScroll(true);
$$(window).on('native.keyboardshow', function(e) {
    $$('body').css('padding-bottom', e.keyboardHeight + 'px');

    var el = $$('input:focus, textarea:focus');
    var content = el.closest('.wrapper');
    var offset = el.offset().top + content.scrollTop();
    /* 15 is an arbitrary value to add a bit of padding */
    var safeAreaHeight = el.outerHeight(true) + 15;
    var maxPosition = content.height() - safeAreaHeight;
    if (content.scrollTop() < (offset - maxPosition)) {
            content.scrollTop(offset - maxPosition);
    }

});
$$(window).on('native.keyboardhide', function(e) {
    $$('body').css('padding-bottom', 0);
});

  
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
 
 