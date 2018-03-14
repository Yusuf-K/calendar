function getCurrentViewDate (current_view, current_year, current_month){
    if (current_view === 'year'){
        document.getElementsByClassName("view_date")[0].innerHTML = current_year;
    }
}