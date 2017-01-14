$(document).ready(function(){
  $("form#name").submit(function(event) {
    event.preventDefault();
    $(".name-group").hide();
    $(".design-group").fadeIn();
  });

  $(".design-btn").click(function(event) {
    event.preventDefault();
    $(".design-group").hide();
    $(".business-size-group").fadeIn();
  });

  $(".business-size-btn").click(function(event) {
    event.preventDefault();
    $(".business-size-group").hide();
    $(".work-type-group").fadeIn();
  });

  $(".design-btn").click(function(event) {
    event.preventDefault();
    $(".design-group").hide();
    $(".business-size-group").fadeIn();
  });

  $(".business-size-btn").click(function(event) {
    event.preventDefault();
    $(".business-size-group").hide();
    $(".work-type-group").fadeIn();
  });

  $(".work-type-btn").click(function(event) {
    event.preventDefault();
    $(".work-type-group").hide();
    $(".future-group").fadeIn();
  });

  $(".future-btn").click(function(event) {
    event.preventDefault();
    $(".future-group").hide();
    $(".windows-vs-group").fadeIn();
  });

  $("form#questionnare").submit(function(event){
    $(".hideMe").hide();
    event.preventDefault();
    var design = $("input:radio[name=design]:checked").val();
    var businessSize = $("input:radio[name=business-size]:checked").val();
    var workType = $("input:radio[name=work-type]:checked").val();
    var future = $("input:radio[name=future]:checked").val();
    var windowsVsMac = $("input:radio[name=windows-vs-mac]:checked").val();

    if (design === "yes" && future === "cocktails") {
      $("#css-design").show();
    } else if (businessSize === "medium" && workType === "agency") {
      $("#php-drupal").show();
    } else if (businessSize === "large" && workType === "android dev") {
      $("#java-android").show();
    } else if (businessSize === "large" && windowsVsMac === "windows" || workType === "business software") {
      $("#cnet").show();
    } else if (businessSize === "small") {
      $("#ruby-rails").show();
    } else {
      $("#cnet").show();
    }
});
