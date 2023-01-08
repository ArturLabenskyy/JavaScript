function todayDate(){
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currDay = Date.now();
  const today = new Date(currDay);
  let dayNum = today.getDay();
  let dayName = weekDays[dayNum];
  let monthDay = today.getDate();
  let monthName = monthNames[today.getMonth()];
  let currentYear = today.getFullYear();
  return `Today is ${dayName} the ${monthDay} of ${monthName} ${currentYear}`
}

