$(document).ready(function(){
  $("form").submit(function(event){
    $("hideMe").hide();
    event.preventDefault();
    var design = $("input:radio[name:design]:checked");
    var businessSize = $("input:radio[name:business-size]:checked");
    var workType = $("input:radio[name:work-type]:checked");
    var future = $("input:radio[name:future]:checked");
    var system = $("input:radio[name:system]:checked");
  });
});
