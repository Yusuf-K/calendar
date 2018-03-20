function getCurrentDays (current_month, current_year) {
    // current_month = 2;
    // current_year = 2018;
    var date = new Date();

    function getDaysInMonth(month, year) {
        var date = new Date(year, month, 1);
        date.setHours(0);
        var days = [];
        while (date.getMonth() === month) {
            date.setDate(date.getDate() + 1);
            // Представляем дату в виде строки
            var dateStr = (new Date(date)).toISOString();
            // Добавляем в массив дней день месяца (цифра)
            days.push(parseInt(dateStr.split('-')[2].split('T')[0]));
        }
        return days;
    }

    var days = getDaysInMonth(current_month, current_year);
    if (current_month === 11){
        var days_append = getDaysInMonth(0, current_year+1);
        var days_conc = getDaysInMonth(current_month - 1, current_year);
    }
    else {
        if (current_month === 0) {
            var days_append = getDaysInMonth(current_month + 1, current_year);
            var days_conc = getDaysInMonth(11, current_year - 1);
        }
        else {
            var days_append = getDaysInMonth(current_month + 1, current_year);
            var days_conc = getDaysInMonth(current_month - 1, current_year);
        }
    }


    var first_day_of_month = new Date(current_year, current_month, 1).getDay();
    var quantity_of_days = days.length;
        if (first_day_of_month === 0) {
            var preappendix = 6;
        }
        else {
            var preappendix = first_day_of_month - 1;
        }

        var appendix = 42 - days[quantity_of_days - 1] - preappendix;
        days = days_conc.splice(days_conc.length - preappendix, days_conc.length).concat(days, days_append.splice(0, appendix));
    var table_header = '<tr><th><span class="weekdays">MON</spanclass></th><th><span class="weekdays">TUE</span></th><th><span class="weekdays">WED</span></th><th><span class="weekdays">THU</span></th><th><span class="weekdays">FRI</span></th><th><span class="weekdays">SAT</span></th><th><span class="weekdays">SUN</span></th></tr>';
    for (var i = 0; i < 42; i++) {
        if (i < preappendix || i >= quantity_of_days + preappendix) {
            days[i] = '<td><span class="circle out">' + days[i] + '</span></td>'
            if (i%7 === 0){
                days[i]= '</tr><tr>' + days[i];
            }
        }
        else {
            var color = current_year +'_' +current_month+'_'+days[i] === date.getFullYear()+'_'+date.getMonth()+'_'+date.getDate() ? 'circle red' : 'circle';
            days[i] = '<td><span class="'+color+'" >' + days[i] + '</span></td>';
            if (i%7 === 0){
                days[i]= '</tr><tr>' + days[i];
            }
        }
    }
    days[41] = days[41] + '</tr>';
    return table_header + days.join(' ');
    console.log(table_header + days.join(' '));

}
