$(document).ready(function () {
    $("#calc").click(function () {
        var n1 = document.getElementById("n1").value;
        var n2 = document.getElementById("n2").value;
        if (n1 == 0 || n2 == 0) {
            if ($("#oper option:selected").val() == 'divide') {
                alert("You cannot divide by zero!");
            }
        }
        var URL = "https://api.clearllc.com/api/v2/math/";
        URL += $("#oper option:selected").val() + '?' + 'api_key=bed859b37ac6f1dd59387829a18db84c22ac99c09ee0f5fb99cb708364858818'
            + '&n1=' + $("#n1").val() + '&n2=' + $("#n2").val();
        $.ajax({
            url: URL,
            type: "GET",
            success: function (data) {

                document.getElementById("res").innerHTML = (data.result);
                console.log(data);
            },
            error: function (error) {
                console.log(`Error ${error}`);
            }
        });
    });
});
