function days_to_sunday(our_date){
  var odays = 7 - our_date.getDay();
  return (odays<7)?odays:"Сегодня воскресенье!!! Отдыхай!!!";
}
function strannoe_zadani_e(){
  key_press_count++;
  
  var week_days_str = week_days.join('');
  var arr_week_days = week_days_str.split(first_letter[key_press_count-1]);
  form.vyvod.value = key_press_count+" - "+arr_week_days.join("");
}