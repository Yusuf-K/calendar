    function getCurrentDays (current_month, current_year) {
    //      var current_month = 9;
    //      var current_year = 2018;
        var date = new Date();
        // var current_month = date.getMonth();
        // var current_year = date.getFullYear();
        function getDaysInMonth(month, year) {
            var date = new Date(year, month, 1);
            date.setHours(0);
            var days = [];
            while (date.getMonth() === month) {
                date.setDate(date.getDate() + 1);
                // days.push(new Date(date).getDate());
                var dateStr = (new Date(date)).toISOString();
                days.push(parseInt(dateStr.split('-')[2].split('T')[0]));
                //days.push(parseInt(dateStr.split('-')[0].split(' ')[2])+1);
                //days.push((new Date(date)));
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
        // if (first_day_of_month === 1) {
        //     var appendix = 42 - days[quantity_of_days - 1];
        //     days = days.concat(days_append.splice(0, appendix));
        // }
        // else {
            if (first_day_of_month === 0) {
                var preappendix = 6;
            }
            else {
                var preappendix = first_day_of_month - 1;
            }

            var appendix = 42 - days[quantity_of_days - 1] - preappendix;

            // console.log(typeof(first_day_of_month));
            // console.log(current_month);
            // console.log(appendix);
            // console.log(days_conc.toString());
            // console.log(days_append.toString());

            days = days_conc.splice(days_conc.length - preappendix, days_conc.length).concat(days, days_append.splice(0, appendix));
        //}
        for (var i = 0; i < 42; i++) {
            if (i < preappendix || i >= quantity_of_days + preappendix) {
                days[i] = '<li><span class="circle out">' + days[i] + '</span></li>'
            }
            else {
                var color = current_year +'_' +current_month+'_'+days[i] === date.getFullYear()+'_'+date.getMonth()+'_'+date.getDate() ? 'circle red' : 'circle';
                days[i] = '<li><span class="'+color+'" >' + days[i] + '</span></li>';
            }
        }
        var new_days = [];
        for (var j = 0; j <= 6; j++) {
            for (var i = 0; i <= 35; i += 7) {
                new_days.push(days[i + j]);
            }
        }

        //console.log(days[i]);
    // console.log(days.length);
    //   for (var i = 0; i< days.length;i++){
    //     console.log(new_days[i]);
    //   }

      document.getElementsByClassName("processed_days")[0].innerHTML = new_days.join(' ');
 }
