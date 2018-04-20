 window.onload = function() {
  document.getElementById("myText").focus();
  };

  function typo() {
  if (document.getElementById("myText").value.trim().length == 0) {
     document.getElementById("myText").focus();
    
  }
   else
   {
    var currentText = document.getElementById("demo").innerHTML;
    var x = '<div><p class=bubble>' + document.getElementById("myText").value + '</p></div>';
    document.getElementById("myText").value = "";
    var y = document.getElementById("demo").innerHTML = currentText + x;

    var z = document.getElementById("wrapper");
    z.scrollTop = z.scrollHeight;
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
  function isTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        return true;
    }catch(e){
        return false;
    }
}

function touchScroll(demo){
    if(isTouchDevice()){ //if touch events exist...
        var el=document.getElementById(demo);
        var scrollStartPos=0;

        document.getElementById(demo).addEventListener("touchstart", function(event) {
            scrollStartPos=this.scrollTop+event.touches[0].pageY;
            event.preventDefault();
        },false);

        document.getElementById(demo).addEventListener("touchmove", function(event) {
            this.scrollTop=scrollStartPos-event.touches[0].pageY;
            event.preventDefault();
        },false);
}
} 
 
  