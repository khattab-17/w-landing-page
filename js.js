var three = document.querySelector("#three");
var men = document.querySelector("#men");

three.onclick = function(){
    men.classList.toggle("block")
    // alert("poiuyt")
}


$(function(){
    $(".answer").hide();
    $(".question-text").click(function(){
        $(this).next(".answer").slideToggle();
    })
})
