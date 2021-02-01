$(document).ready(function() {

});

function ConvertTimeStampToTime(timestampValue){
    var date = new Date(timestampValue * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    return formattedTime;
}

function GetCurrentDayNameOfWeek(){
    var d = new Date();
    debugger;
    var n = d.getDate();

    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return week[n];
}