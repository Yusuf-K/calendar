var current_month = new Date().getMonth();
var current_year = new Date().getFullYear();
window.onload = function () {
     getCurrentMonth (current_month, current_year);
     getCurrentDays (current_month, current_year);
     document.getElementsByClassName("prev")[0].onclick = function() {
        current_month-=1;
         if (current_month > 11){
             current_month = current_month%12;
             current_year+=1;
         }
         else if(current_month < 0){
             current_month += 12;
             current_year -= 1;
         };
        getCurrentMonth(current_month, current_year);
        getCurrentDays (current_month, current_year);
     };
     document.getElementsByClassName("next")[0].onclick = function() {
        current_month+=1;
         if (current_month > 11){
             current_month = current_month%12;
             current_year+=1;
         }
         else if(current_month < 0){
             current_month += 12;
             current_year -= 1;
         };
        getCurrentMonth(current_month, current_year);
        getCurrentDays (current_month, current_year);
        //console.log(current_year);
    };
};

