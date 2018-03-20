function createYearView (current_year){

    var days = [];
    var months = [];
    for (var i = 0; i < 12; i++){
        //months.push('<div class="year_view_months">'+getCurrentMonth(i,current_year)[0] + '</div>');
        // days.push('<div class="view_days_of_month"><ul><li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li><li>Su</li></ul></div><div class="processed_days month_in_year"><ul>' + getCurrentDays (i, current_year) + '</ul></div>');
        // days.push('<div class="month_in_year"><div class="view_days_of_month"><ul><li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li><li>Su</li></ul></div><div class="processed_days"><ul>' + getCurrentDays (i, current_year) + '</ul></div></div>');
        if (i%4 === 0){
            days.push('<div class="year_view_month">'+getCurrentMonth(i,current_year)[0]+'</div><div class="year_view_month">'+getCurrentMonth(i+1,current_year)[0]+'</div><div class="year_view_month">'+getCurrentMonth(i+2,current_year)[0]+'</div><div class="year_view_month">'+getCurrentMonth(i+3,current_year)[0]+'</div><table class="weekdays_table">'+ getCurrentDays (i, current_year) +'</table>');
        }
        else {
            days.push('<div class="year_view_months"><table class="weekdays_table">' + getCurrentDays(i, current_year) + '</table></div>');
        }

    }
    // months = '<div class="months_name">' + months.join(' ') + '</div>';
    days = '<div class="year_view">' + days.join(' ') + '</div>';
    //console.log(days)
    document.getElementsByClassName("view")[0].innerHTML = days;//months + '<br>' +  days ;
}

//<ul><li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li><li>Su</li>