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

 //when keypad is open
  window.addEventListener('native.keyboardshow', function (e) {
    var deviceHeight = window.innerHeight;
    var keyboardHeight = e.keyboardHeight;
    var deviceHeightAdjusted = deviceHeight - keyboardHeight;//device height adjusted
    deviceHeightAdjusted = deviceHeightAdjusted < 0 ? (deviceHeightAdjusted * -1) : deviceHeightAdjusted;//only positive number
    document.getElementById('page').style.height = deviceHeightAdjusted + 'px';//set page height
    document.getElementById('page').setAttribute('keyBoardHeight', keyboardHeight);//save keyboard height
});

  //when keypad is closed
  window.addEventListener('native.keyboardhide', function (e) {
    setTimeout(function () {
        document.getElementById('page').style.height = 100 + '%';//device  100% height
    }, 100);
    var inputs = document.querySelectorAll('input');//select all input
var n = inputs.length;
for (var i = 0; i < n; i++) {
    var input = inputs[i];
    input.addEventListener('focus', function (e) {//add event focus
        var inp = this; 
       //wait 0.6 seconds to scroll down to the input has focus
        setTimeout(function () {
            try {
                //if the keyboard is open
                if (cordova.plugins.Keyboard.isVisible) {
                    var padding = 15;
                    var targetPosition = parseInt($$(inp).offset().top + padding);
                    var keyboardHeight = parseInt(document.getElementById('page').getAttribute('keyBoardHeight'));//get keyboard height   

                    //if the input is hidden by the keyboard,scroll to the input 
                    if (targetPosition >= keyboardHeight) {
                        padding *=5;
                        document.getElementById('page').scrollTop = targetPosition - padding;
                    }
                }
            } catch (ex) {
                alert(ex.message);
            }
        }, 600);
    }, true);
  
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
 