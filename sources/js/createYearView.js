function createYearView (current_year){

    var days = [];
    var months = [];
    for (var i = 0; i < 12; i++){
        //months.push('<div class="year_view_months">'+getCurrentMonth(i,current_year) + '</div>');
        days.push('<div class="processed_days month_in_year"><ul>' + getCurrentDays (i, current_year) + '</ul></div>');
    }
    //months = '<div class="months_name">' + months.join(' ') + '</div>';
    days = '<div class="year_view">' + days.join(' ') + '</div>';
    //console.log(days)
    document.getElementsByClassName("view")[0].innerHTML = days;
}

//<ul><li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li><li>Su</li>