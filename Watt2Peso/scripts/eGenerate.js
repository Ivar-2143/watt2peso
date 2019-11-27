$(document).ready(function(){
    $("#calculate").on('click',generate);
    $(".close").on('click',function(){    
        $(".modal").css("display","none");
    });
});

function generate(){
    var dyUsed = $("#daysUsed").val();
    var hrUsed = $("#hoursUsed").val();
    var wkUsed = $("#weekUsed").val();
    var appWatt = $("#Wattage").val();

    calculate(appWatt,dyUsed,hrUsed,wkUsed);
    $(".modal").css({
        "display":"block"});

    
}

function calculate(watt,day,hour,week){

    var cost = parseFloat(((1 * watt)/1000)*6.9).toFixed(2);
    var perHour = cost;
    var perDay  = parseFloat(perHour * hour).toFixed(2);
    var perWeek = parseFloat(perDay * day).toFixed(2);
    var perMonth = parseFloat(perWeek * week).toFixed(2);
    $("#perHour").html(perHour);
    $("#perDay").html(perDay);
    $("#perWeek").html(perWeek);
    $("#perMonth").html(perMonth);

}