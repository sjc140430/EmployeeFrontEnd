$(function() {
    $("#b1").click(function(){
        $.get("localhost:8080/employees/2", function(data, status){
            alert(status + " " + data)
        })
    });
});