var Username="someone";
var Password="pass123";
function checkInfo(){
  if($(".Un").val()===Username && $(".Pw").val()===Password)
  {
    $(".mercury").html('<div style="color:green;">Login successful</div>');
  }
  else {
    {
      $(".mercury").html('<div class="hide" style="color:red;">Invalid Username or Password</div>');
    }
  }
}
function passChange(){
  $(".hidden").addClass("show");
}
function submit(){
  if($("#new1").val()!==$("#new2").val())
  {
      $("#new2").css("border-color","red");
     $(".mercury").html('<div style="color:red;">password mismatch</div>');
  }
  else
  {
      Password=$("#new2").val();
      $(".mercury").html('<div>password updated</div>');
        $("#new2").css("border-color","#808080");
      $(".hidden").removeClass("show");
  }
}
