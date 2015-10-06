$("button.openSurvey").on("click",function(){
    console.log("Opening Survey");
});
$("button.submitSurvey").on("click", function(){
    console.log("Submit Survey");
});

$("form.container").submit(function() {
    alert("Submit Survey");
});