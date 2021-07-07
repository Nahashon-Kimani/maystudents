$(document).ready(function () {
    $("#weather").click(function () {
        var zipcode = document.getElementById("zipcode").value;
        if (zipcode < 9999) {
            alert("Zipcode must be longer than 5 digits!");
        }
        var URL = "https://api.clearllc.com/api/v2";
        URL += '/miamidb/_table/zipcode' + '?' + 'api_key=bed859b37ac6f1dd59387829a18db84c22ac99c09ee0f5fb99cb708364858818'
            + '&ids=' + $("#zipcode").val();
        $.ajax({
            url: URL,
            type: "GET",
            success: function (data) {
                var longitude = (data.resource[0]["longitude"]);
                var latitude = (data.resource[0]["latitude"]);
                var URL2 = "https://api.openweathermap.org/data/2.5";
                URL2 += '/onecall' + '?' + 'appid=c3f77cef1ddae1b7a94505b6779a00ea' + '&lat=' + latitude + '&lon=' + longitude
                    + '&exclude=hourly&units=imperial';
                $.ajax({
                    url: URL2,
                    type: "GET",
                    success: function (data) {
                        var dWeather = (data.daily);
                        console.log(data);
                        populate(1, dWeather[1].temp.min, dWeather[1].temp.max, dWeather[1].weather[0].icon);
                        populate(2, dWeather[2].temp.min, dWeather[2].temp.max, dWeather[2].weather[0].icon);
                        populate(3, dWeather[3].temp.min, dWeather[3].temp.max, dWeather[3].weather[0].icon);
                        populate(4, dWeather[4].temp.min, dWeather[4].temp.max, dWeather[4].weather[0].icon);
                        populate(5, dWeather[5].temp.min, dWeather[5].temp.max, dWeather[5].weather[0].icon);
                        populate(6, dWeather[6].temp.min, dWeather[6].temp.max, dWeather[6].weather[0].icon);
                        populate(7, dWeather[7].temp.min, dWeather[7].temp.max, dWeather[7].weather[0].icon);
                    },
                    error: function (error) {
                        console.log(`Error ${error}`);
                    }
                });

            }
        });
    });
});

function populate(dNum, low, high, icon) {
    if (dNum == 1) {
        var loc = "img/";
        loc += icon + ".png";
        $("#sunImg").attr('src', loc);
        var str = "Low: " + low;
        var str2 = " High: " + high;
        $("#sunP").text(str);
        $("#sunP2").text(str2);
    }
    if (dNum == 2) {
        var loc = "img/";
        loc += icon + ".png";
        $("#monImg").attr('src', loc);
        var str = "Low: " + low;
        var str2 = " High: " + high;
        $("#monP").text(str);
        $("#monP2").text(str2);
    }
    if (dNum == 3) {
        var loc = "img/";
        loc += icon + ".png";
        $("#tueImg").attr('src', loc);
        var str = "Low: " + low;
        var str2 = " High: " + high;
        $("#tueP").text(str);
        $("#tueP2").text(str2);
    }
    if (dNum == 4) {
        var loc = "img/";
        loc += icon + ".png";
        $("#wedImg").attr('src', loc);
        var str = "Low: " + low;
        var str2 = " High: " + high;
        $("#wedP").text(str);
        $("#wedP2").text(str2);
    }
    if (dNum == 5) {
        var loc = "img/";
        loc += icon + ".png";
        $("#thuImg").attr('src', loc);
        var str = "Low: " + low;
        var str2 = " High: " + high;
        $("#thuP").text(str);
        $("#thuP2").text(str2);
    }
    if (dNum == 6) {
        var loc = "img/";
        loc += icon + ".png";
        $("#friImg").attr('src', loc);
        var str = "Low: " + low;
        var str2 = " High: " + high;
        $("#friP").text(str);
        $("#friP2").text(str2);
    }
    if (dNum == 7) {
        var loc = "img/";
        loc += icon + ".png";
        $("#satImg").attr('src', loc);
        var str = "Low: " + low;
        var str2 = " High: " + high;
        $("#satP").text(str);
        $("#satP2").text(str2);
    }
}