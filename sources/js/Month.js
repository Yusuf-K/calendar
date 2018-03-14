function getCurrentMonth (current_month, current_year){
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    // var date = new Date();


    // var current_month = month[date.getMonth()];
    // var current_year = date.getFullYear();
    // if (current_month > 11){
    //     current_month = current_month%12;
    //     current_year+=1;
    // }
    // else if(current_month < 0){
    //     current_month += 12;
    //     current_year -= 1;
    // };
    current_month = month[current_month];
    var month_year = [current_month, current_year];
    return month_year;
    // document.getElementsByClassName("current_month")[0].innerHTML = current_month + '<br>' + current_year;
}
