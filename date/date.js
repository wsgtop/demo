  // const now = _.cloneDeep(currDate);
  const now = new Date()
  console.log(now);
  const date = now.getFullYear()  + '-' + getWeek(now);


  console.log(date);
  console.log(now);

  function getWeek(date) {
    const weekday = date.getDay() || 7;
    date.setDate(date.getDate() - weekday + 1 + 5);
    let firstDay = new Date(date.getFullYear(), 0, 1);
    const dayOfWeek = firstDay.getDay();
    let spendDay = 1;
    if (dayOfWeek !== 0) {
      spendDay = 7 - dayOfWeek + 1;
    }
    firstDay = new Date(date.getFullYear(), 0, 1 + spendDay);
    const d = Math.ceil((date.valueOf() - firstDay.valueOf()) / 86400000);
    const result = Math.ceil(d / 7);
    return result + 1;
  }