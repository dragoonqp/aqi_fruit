$(function(){
    $.ajax({
        url:"../footer.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("#mainfooter");
        }
    });
})
