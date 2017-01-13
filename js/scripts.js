$(document).ready(function(){
  $("form").submit(function(event){
    $("hideMe").hide();
    event.preventDefault();
    var design = $("input:radio[name=design]:checked").val();
    var businessSize = $("input:radio[name=business-size]:checked").val();
    var workType = $("input:radio[name=work-type]:checked").val();
    var future = $("input:radio[name=future]:checked").val();
    var windowsVsMac = $("input:radio[name=windows-vs-mac]:checked").val();
    console.log(windowsVsMac);
  });
});
