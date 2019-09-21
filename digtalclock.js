function startTime() {

    var current = new Date();
    var hour = current.getHours();
    var minute = current.getMinutes();
    var second = current.getSeconds();
    var date = current.getDate();
    var month = current.getMonth() + 1; //jan is 0 
    var year = current.getFullYear();
    var day = current.getDay();

    hour = check_24_pattern(hour);
    minute = check(minute);
    second = check(second);
    date = check(date);
    month = check(month);
    year = check(year);

    day = check_day(day);

    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("seconds").innerHTML = second;
    document.getElementById("date").innerHTML = date + "/" + month + "/" + year;
    document.getElementById("day").innerHTML = day;



    // t=setTimeout(function(){startTime()},500);

}
setTimeout(function() { startTime() }, 500);

function check(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function check_24_pattern(i) {
    if (i > 12) {
        i = i % 12;
    }
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function check_day(i) {

    if (i == 0) { i = "Sunday"; } else if (i == 1) { i = "Monday"; } else if (i == 2) { i = "Tuesday"; } else if (i == 3) { i = "Wednesday"; } else if (i == 4) { i = "Thursday"; } else if (i == 5) { i = "Friday"; } else { i = "Saturday"; }

    return i;

}